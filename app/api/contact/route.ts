import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const googleSheetsUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL || '';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, business, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    const errors: string[] = [];
    let supabaseSuccess = false;
    let sheetsSuccess = false;

    // --- 1. Save to Supabase ---
    if (supabaseUrl && supabaseAnonKey) {
      try {
        const supabase = createClient(supabaseUrl, supabaseAnonKey);
        const { error: supabaseError } = await supabase
          .from('inquiries')
          .insert([{ name, email, phone, business, message, status: 'new' }]);

        if (supabaseError) {
          console.error('Supabase insert error:', supabaseError);
          errors.push(`Supabase: ${supabaseError.message}`);
        } else {
          supabaseSuccess = true;
          console.log('✅ Lead saved to Supabase');
        }
      } catch (err: any) {
        console.error('Supabase connection error:', err);
        errors.push(`Supabase connection failed: ${err.message}`);
      }
    } else {
      errors.push('Supabase credentials not configured');
    }

    // --- 2. Save to Google Sheets ---
    if (googleSheetsUrl) {
      try {
        const sheetsResponse = await fetch(googleSheetsUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name,
            email,
            phone: phone || '',
            business: business || '',
            message,
            timestamp: new Date().toISOString(),
          }),
        });

        if (!sheetsResponse.ok) {
          const sheetsText = await sheetsResponse.text();
          console.error('Google Sheets error:', sheetsText);
          errors.push(`Google Sheets: HTTP ${sheetsResponse.status}`);
        } else {
          sheetsSuccess = true;
          console.log('✅ Lead saved to Google Sheets');
        }
      } catch (err: any) {
        console.error('Google Sheets connection error:', err);
        errors.push(`Google Sheets connection failed: ${err.message}`);
      }
    } else {
      errors.push('Google Sheets URL not configured');
    }

    // Return response based on results
    if (supabaseSuccess || sheetsSuccess) {
      return NextResponse.json({
        success: true,
        message: 'Your request has been submitted successfully!',
        savedTo: {
          supabase: supabaseSuccess,
          googleSheets: sheetsSuccess,
        },
      });
    }

    // Both failed
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to save your request. Please try again later.',
        details: errors,
      },
      { status: 500 }
    );
  } catch (err: any) {
    console.error('API route error:', err);
    return NextResponse.json(
      { error: 'Internal server error', details: err.message },
      { status: 500 }
    );
  }
}
