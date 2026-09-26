-- ════════════════════════════════════════════════════════════════
-- NKB Regovanta Newsletter — Supabase Setup
-- Run this in the Supabase Dashboard → SQL Editor
-- ════════════════════════════════════════════════════════════════

-- 1. Create the subscribers table
create table if not exists subscribers (
  id            uuid primary key default gen_random_uuid(),
  email         text unique not null,
  status        text not null default 'pending'
                  check (status in ('pending', 'confirmed', 'unsubscribed')),
  confirm_token uuid not null default gen_random_uuid(),
  created_at    timestamptz not null default now(),
  confirmed_at  timestamptz
);

-- 2. Index for fast token lookups (used on every confirmation click)
create index if not exists idx_subscribers_confirm_token
  on subscribers (confirm_token);

-- 3. Index for fast email lookups (used on subscribe + unsubscribe)
create index if not exists idx_subscribers_email
  on subscribers (email);

-- 4. Enable Row Level Security
--    All operations go through the service_role key (server-side only).
--    No public read/write policies = secure by default.
alter table subscribers enable row level security;

-- ── Optional: verify the table was created ────────────────────────────────────
-- select * from subscribers limit 5;

-- ── Optional: insert a test row to confirm everything works ──────────────────
-- insert into subscribers (email) values ('test@example.com');
-- select * from subscribers where email = 'test@example.com';
-- delete from subscribers where email = 'test@example.com';
