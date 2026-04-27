-- Migration: Add phone and business columns to inquiries table
-- Run this in your Supabase SQL Editor (https://supabase.com/dashboard → SQL Editor)

-- Add 'phone' column to inquiries
ALTER TABLE public.inquiries ADD COLUMN IF NOT EXISTS phone TEXT;

-- Add 'business' column to inquiries
ALTER TABLE public.inquiries ADD COLUMN IF NOT EXISTS business TEXT;

-- Verify the updated table structure
-- SELECT column_name, data_type FROM information_schema.columns WHERE table_name = 'inquiries';
