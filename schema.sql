-- Supabase Schema for BrandXMedia

-- 1. Services Table
CREATE TABLE public.services (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    icon TEXT, -- e.g., 'language', 'brand_awareness'
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Projects Table (Portfolio)
CREATE TABLE public.projects (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    problem TEXT,
    solution TEXT,
    result TEXT,
    image_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Testimonials Table
CREATE TABLE public.testimonials (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    role TEXT NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 4. Inquiries Table (Contact Form)
CREATE TABLE public.inquiries (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    business TEXT,
    message TEXT NOT NULL,
    status TEXT DEFAULT 'new' NOT NULL, -- 'new', 'read', 'archived'
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 5. Pricing Plans Table
CREATE TABLE public.pricing_plans (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    price TEXT NOT NULL,
    features JSONB NOT NULL DEFAULT '[]'::jsonb,
    is_popular BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Set up Row Level Security (RLS)
-- By default, allow public read access for specific tables, but require authentication for everything else

ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.pricing_plans ENABLE ROW LEVEL SECURITY;

-- Public read access policies
CREATE POLICY "Allow public read access on services" ON public.services FOR SELECT USING (true);
CREATE POLICY "Allow public read access on projects" ON public.projects FOR SELECT USING (true);
CREATE POLICY "Allow public read access on testimonials" ON public.testimonials FOR SELECT USING (true);
CREATE POLICY "Allow public read access on pricing_plans" ON public.pricing_plans FOR SELECT USING (true);

-- Allow public to insert into inquiries (contact form)
CREATE POLICY "Allow public to insert inquiries" ON public.inquiries FOR INSERT WITH CHECK (true);

-- Authenticated (Admin) full access policies
-- Assuming anyone with a valid Supabase auth token is an admin for this project context
CREATE POLICY "Allow authenticated users full access on services" ON public.services FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Allow authenticated users full access on projects" ON public.projects FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Allow authenticated users full access on testimonials" ON public.testimonials FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Allow authenticated users full access on pricing_plans" ON public.pricing_plans FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Allow authenticated users full access on inquiries" ON public.inquiries FOR ALL USING (auth.role() = 'authenticated');
