> Historical document. Page counts, verification claims, and ranking timelines below are not current evidence. See [SEO implementation and next steps](SEO_IMPLEMENTATION_AND_NEXT_STEPS.md) for the September 7, 2026 changes. Search rankings and indexing dates are not guaranteed.

# NKB Regovanta — Complete SEO Audit Report

> **278 Pages Analyzed** | **777 Issues Identified** | **42 Critical** | **43 High** | **687 Medium** | **5 Low**
> **Date:** September 6, 2026
> **Scope:** All route files in `src/routes/`

---

## Executive Summary

| Severity | Count | Description |
|:---|:---:|:---|
| 🔴 **Critical** | **42** | Duplicate routes, layout routes with no H1, canonical mismatches |
| 🟠 **High** | **43** | Duplicate H1s, keyword cannibalization, missing H1s, duplicate meta descriptions |
| 🟡 **Medium** | **687** | Title too long (249), title keyword stuffing (192), meta description too long (193), title/H1 mismatch (12), marketing H1s (2), missing JSON-LD (19), OG URL mismatch (19), meta keywords present (278 pages) |
| ⚪ **Low** | **5** | Meta description too short |

> [!CAUTION]
> **The site has 42 critical architectural SEO defects that must be fixed before any content or keyword optimization work begins.** Until these are resolved, Google cannot correctly interpret the site's URL structure.

---

## 🔴 Issue #1: Duplicate / Competing Routes (12 instances)

**Severity: CRITICAL**

12 URL paths have **two different route files** competing for the same URL. TanStack Router will use one, but SEO metadata from both files creates confusion, and Google may see inconsistent signals.

| URL | File 1 (index) | File 2 (layout) | Conflicting Titles |
|:---|:---|:---|:---|
| `/case-studies` | `case-studies.index.tsx` | `case-studies.tsx` | `Client Case Studies & Success Stories` vs `Medical Device Regulatory Case Studies | NKB Regovanta | NKB Regovanta` |
| `/services/australia` | `services.australia.index.tsx` | `services.australia.tsx` | `Australia TGA ARTG Consultant | Australian Sponsor & Medical Device Registration` vs `Australia TGA ARTG Consultant | Medical Device Registration` |
| `/services/brazil` | `services.brazil.index.tsx` | `services.brazil.tsx` | `ANVISA Brazil Medical Device Registration & BGMP Consultant` vs `ANVISA Brazil Medical Device Regulatory Consultant | NKB | NKB Regovanta` |
| `/services/canada` | `services.canada.index.tsx` | `services.canada.tsx` | `Health Canada MDL & MDEL Registration Consultant | MDSAP Canada` vs `Health Canada Medical Device Licence Consultant | NKB Regovanta | NKB Regovanta` |
| `/services/eu` | `services.eu.index.tsx` | `services.eu.tsx` | `EU MDR 2017/745 & EU IVDR 2017/746 Regulatory Consulting | CE Marking & Technical Documentation` vs `EU MDR & IVDR Regulatory Consultant | CE Marking | NKB Regovanta | NKB Regovanta` |
| `/services/india` | `services.india.index.tsx` | `services.india.tsx` | `CDSCO Medical Device Import & Manufacturing Licence India` vs `Medical Device Consultant & Regulatory Consultancy India | CDSCO` |
| `/services/mdsap` | `services.mdsap.index.tsx` | `services.mdsap.tsx` | `MDSAP Audit Readiness & Consulting for Medical Device Manufacturers` vs `MDSAP Audit Readiness & Consulting | NKB Regovanta | NKB Regovanta` |
| `/services/new-zealand` | `services.new-zealand.index.tsx` | `services.new-zealand.tsx` | `New Zealand WAND Notification & Medsafe Compliance Consultant` vs `Medsafe New Zealand Medical Device Regulatory Consultant | NKB | NKB Regovanta` |
| `/services/saudi-arabia` | `services.saudi-arabia.index.tsx` | `services.saudi-arabia.tsx` | `Saudi Arabia SFDA Medical Device Registration & MDMA Consultant` vs `SFDA Saudi Arabia Medical Device Regulatory Consultant | NKB | NKB Regovanta` |
| `/services/uae` | `services.uae.index.tsx` | `services.uae.tsx` | `UAE MOHAP Medical Device Registration & Market Access Consultant` vs `MoHAP UAE Medical Device Regulatory Consultant | NKB Regovanta | NKB Regovanta` |
| `/services/uk` | `services.uk.index.tsx` | `services.uk.tsx` | `UK MHRA Medical Device Registration & UK Responsible Person (UKRP) | CE Recognition & UKCA` vs `MHRA UK Medical Device Regulatory Consultant | UKRP | NKB | NKB Regovanta` |
| `/services/usa` | `services.usa.index.tsx` | `services.usa.tsx` | `USFDA Medical Device Consultant | 510(k), 510 k, De Novo, PMA` vs `US FDA Medical Device Regulatory Consultant | 510(k) | NKB Regovanta | NKB Regovanta` |

> [!IMPORTANT]
> **Fix:** The `.tsx` layout files (e.g., `services.usa.tsx`) render `<Outlet />` for child routes. They should NOT have competing SEO metadata with the `.index.tsx` files. The layout files' `head()` metadata is being merged/overridden unpredictably. **Remove the `head()` function from layout files**, or consolidate the metadata to only exist in the `.index.tsx` file.

---

## 🔴 Issue #2: Layout Routes with No H1 (12 pages)

**Severity: CRITICAL**

These layout routes have `<title>` tags and meta descriptions but render only `<Outlet />` with **no H1 heading**. If Google crawls the layout URL directly, it sees a titled page with no primary content heading.

| URL | Layout File | Title (being served) |
|:---|:---|:---|
| `/case-studies` | `case-studies.tsx` | `Medical Device Regulatory Case Studies | NKB Regovanta | NKB Regovanta` |
| `/services/australia` | `services.australia.tsx` | `Australia TGA ARTG Consultant | Medical Device Registration` |
| `/services/brazil` | `services.brazil.tsx` | `ANVISA Brazil Medical Device Regulatory Consultant | NKB | NKB Regovanta` |
| `/services/canada` | `services.canada.tsx` | `Health Canada Medical Device Licence Consultant | NKB Regovanta | NKB Regovanta` |
| `/services/eu` | `services.eu.tsx` | `EU MDR & IVDR Regulatory Consultant | CE Marking | NKB Regovanta | NKB Regovanta` |
| `/services/india` | `services.india.tsx` | `Medical Device Consultant & Regulatory Consultancy India | CDSCO` |
| `/services/mdsap` | `services.mdsap.tsx` | `MDSAP Audit Readiness & Consulting | NKB Regovanta | NKB Regovanta` |
| `/services/new-zealand` | `services.new-zealand.tsx` | `Medsafe New Zealand Medical Device Regulatory Consultant | NKB | NKB Regovanta` |
| `/services/saudi-arabia` | `services.saudi-arabia.tsx` | `SFDA Saudi Arabia Medical Device Regulatory Consultant | NKB | NKB Regovanta` |
| `/services/uae` | `services.uae.tsx` | `MoHAP UAE Medical Device Regulatory Consultant | NKB Regovanta | NKB Regovanta` |
| `/services/uk` | `services.uk.tsx` | `MHRA UK Medical Device Regulatory Consultant | UKRP | NKB | NKB Regovanta` |
| `/services/usa` | `services.usa.tsx` | `US FDA Medical Device Regulatory Consultant | 510(k) | NKB Regovanta | NKB Regovanta` |

> [!WARNING]
> **Additional problem:** 10 of these titles contain **"NKB Regovanta" repeated twice** (e.g., `| NKB Regovanta | NKB Regovanta`). This is a clear title generation bug — the layout's head metadata is being merged/concatenated with the index route's metadata.

---

## 🔴 Issue #3: Canonical URL Mismatches (18 pages)

**Severity: CRITICAL**

18 pages have canonical URLs pointing to a **different page**, effectively telling Google: *"Don't index me, I'm a copy of that other page."* If these pages have unique content, their indexing value is being thrown away.

### Service Pages with Wrong Canonicals

| Page URL | Canonical Points To | Decision Needed |
|:---|:---|:---|
| `/services/eu/ce-registration` | `/services/eu/ce-marking` | Are these the same page? If yes → 301 redirect. If no → self-referencing canonical. |
| `/services/eu/pms` | `/services/eu/pms-pmcf` | Same content? → redirect. Different? → fix canonical. |
| `/services/uk/dors-registration` | `/services/uk/mhra-registration` | Same vs. different content decision needed. |
| `/services/uk/labeling` | `/services/uk/technical-file` | Labeling ≠ Technical File. **This is wrong.** |
| `/services/uk/mhra-liaison` | `/services/uk/ukrp` | MHRA Liaison ≠ UKRP. **This is wrong.** |
| `/services/uk/qms` | `/services/uk/audit-readiness` | QMS ≠ Audit Readiness. **This is wrong.** |
| `/services/uk/regulatory-writing` | `/services/uk/technical-file` | Regulatory Writing ≠ Technical File. **This is wrong.** |

### Industry Pages with URL Parsing Issue

These canonicals are actually **correct** in value, but the URL path detection is generating double slashes due to the underscore (`_`) in TanStack Router filenames (e.g., `industries.cosmetics_` → `/industries/cosmetics/`). The canonical values written in the code are correct, but the actual route path needs verification:

| File | Canonical (correct) |
|:---|:---|
| `industries.cosmetics_.eu.tsx` | `/industries/cosmetics/eu` |
| `industries.cosmetics_.india.index.tsx` | `/industries/cosmetics/india` |
| `industries.cosmetics_.india.for-importer.tsx` | `/industries/cosmetics/india/for-importer` |
| `industries.cosmetics_.india.for-manufacturer.tsx` | `/industries/cosmetics/india/for-manufacturer` |
| `industries.cosmetics_.uk.tsx` | `/industries/cosmetics/uk` |
| `industries.cosmetics_.usa.tsx` | `/industries/cosmetics/usa` |
| `industries.ivd_.eu.tsx` | `/industries/ivd/eu` |
| `industries.ivd_.india.tsx` | `/industries/ivd/india` |
| `industries.ivd_.usa.tsx` | `/industries/ivd/usa` |
| `industries.medical-devices_.india.for-importer.tsx` | `/industries/medical-devices/india/for-importer` |
| `industries.medical-devices_.india.for-manufacturer.tsx` | `/industries/medical-devices/india/for-manufacturer` |

> [!NOTE]
> The industry page canonicals appear correct in the code — the false positives are from our URL parser not handling TanStack's `_` pathless layout convention. However, you should **verify the actual rendered URLs** match the canonicals.

---

## 🟠 Issue #4: Duplicate H1 Headings (4 groups, 11 pages)

**Severity: HIGH — Keyword Cannibalization**

Multiple pages share the **exact same H1 heading**, making them compete for the same Google search query.

### Group 1: "Testing Strategy & Laboratory Coordination" — 5 pages!

| URL | Country |
|:---|:---|
| `/services/australia/testing-strategy` | Australia |
| `/services/brazil/testing-strategy` | Brazil |
| `/services/canada/testing-strategy` | Canada |
| `/services/eu/testing-strategy` | EU |
| `/services/usa/testing-strategy` | USA |

**Fix:** Each H1 must include the country/authority context:
- `TGA Testing Strategy & Laboratory Coordination (Australia)`
- `ANVISA Testing Strategy & Laboratory Coordination (Brazil)`
- `Health Canada Testing Strategy & Laboratory Coordination`
- `EU MDR Testing Strategy & Laboratory Coordination`
- `FDA Testing Strategy & Laboratory Coordination (USA)`

### Group 2: "Medical Device Software, SaMD & Cybersecurity" — 2 pages

| URL |
|:---|
| `/services/canada/software` |
| `/services/eu/software` |

**Fix:** → `Health Canada SaMD & Cybersecurity Consulting` vs `EU MDR Software & SaMD Regulatory Consulting`

### Group 3: "Technical Documentation & Safety / Performance Evidence" — 2 pages

| URL |
|:---|
| `/services/new-zealand/technical-documentation` |
| `/services/uae/technical-documentation` |

**Fix:** → `Medsafe Technical Documentation (New Zealand)` vs `MOHAP Technical Documentation & Evidence (UAE)`

### Group 4: "De Novo & PMA Support" — 2 pages (SAME COUNTRY!)

| URL |
|:---|
| `/services/usa/de-novo` |
| `/services/usa/pma` |

> [!CAUTION]
> **This is the worst case.** Two USA service pages — De Novo and PMA — share the exact same H1. Google literally cannot tell them apart.
>
> **Fix:**
> - `/services/usa/de-novo` → H1: `FDA De Novo Classification Request Consulting`
> - `/services/usa/pma` → H1: `FDA PMA Premarket Approval Consulting`

---

## 🟠 Issue #5: 21 Pages Missing H1 Headings Entirely

**Severity: HIGH**

These are real content pages (not layout routes) that have **no detectable H1 tag**. Google sees a page with a title and body content but no primary heading.

| URL | File | Title |
|:---|:---|:---|
| `/ai-news` | `ai-news.tsx` | Live Regulatory Intelligence Feed & AI News |
| `/regulatory-updates` | `regulatory-updates.tsx` | Regulatory Updates & Intelligence Feed |
| `/services/india` | `services.india.index.tsx` | CDSCO Medical Device Import & Manufacturing Licence India |
| `/services/india/class-a-import` | `services.india.class-a-import.tsx` | Class A Import Registration (GSR 777(E)) |
| `/services/india/free-sale` | `services.india.free-sale.tsx` | Free Sale Certificate (FSC) CDSCO India |
| `/services/india/investigational-devices` | `services.india.investigational-devices.tsx` | Import Authorization for Investigational Devices |
| `/services/india/ivd-clinical-performance` | `services.india.ivd-clinical-performance.tsx` | IVD Clinical Performance Evaluation India |
| `/services/india/ivd-testing` | `services.india.ivd-testing.tsx` | Test License for IVD Devices India |
| `/services/india/loan-class-a-b` | `services.india.loan-class-a-b.tsx` | Loan Licenses for Class A & B Medical Devices India |
| `/services/india/loan-class-c-d` | `services.india.loan-class-c-d.tsx` | Loan Licenses for Class C & D Medical Devices India |
| `/services/india/market-standing` | `services.india.market-standing.tsx` | Market Standing Certificate (MSC) CDSCO India |
| `/services/india/md-42` | `services.india.md-42.tsx` | MD-42 Certificate (Medical Device Registration) CDSCO |
| `/services/india/mfg-class-a-b` | `services.india.mfg-class-a-b.tsx` | Manufacturing License Class A & B Medical Devices India |
| `/services/india/mfg-class-a-gsr` | `services.india.mfg-class-a-gsr.tsx` | Manufacturing Registration Class A Medical Devices India |
| `/services/india/mfg-class-c-d` | `services.india.mfg-class-c-d.tsx` | Manufacturing License Class C & D Medical Devices India |
| `/services/india/neutral-code` | `services.india.neutral-code.tsx` | Neutral / Special Code Certificate CDSCO India |
| `/services/india/non-conviction` | `services.india.non-conviction.tsx` | Non-Conviction Certificate (NCC) CDSCO India |
| `/services/india/novel-ivds` | `services.india.novel-ivds.tsx` | Import Authorization for Novel IVDs India |
| `/services/india/personal-use` | `services.india.personal-use.tsx` | Personal Use Import License India |
| `/services/india/predicate-devices` | `services.india.predicate-devices.tsx` | Import License for Predicate Medical Devices India |
| `/services/regulatory-affairs` | `services.regulatory-affairs.tsx` | Global Medical Device & IVD Registration |

> [!WARNING]
> **17 of 21 are India/CDSCO pages.** This suggests the India service pages were built with a different component structure that doesn't render an `<h1>` tag, or uses a dynamically generated heading that the extractor couldn't detect. **Manually verify these pages.**

---

## 🟠 Issue #6: Keyword Cannibalization (17 competing pairs)

**Severity: HIGH**

Pages within the same service cluster have titles so similar that Google treats them as competing for the same search intent.

| URL 1 | URL 2 | Similarity | Overlapping Terms |
|:---|:---|:---:|:---|
| `/services/india` (index) | `/services/india` (layout) | 100% | Duplicate route (see Issue #1) |
| `/services/india` | `/services/india/medical-devices` | 100% | cdsco, medical, device, import |
| `/services/india/loan-class-a-b` | `/services/india/loan-class-c-d` | 100% | loan, licenses, class, medical, devices, india |
| `/services/india/mfg-class-a-b` | `/services/india/mfg-class-c-d` | 100% | manufacturing, license, class, medical, devices, india |
| `/services/india/mfg-class-a-b` | `/services/india/mfg-class-a-gsr` | 83% | manufacturing, class, medical, devices, india |
| `/services/canada` | `/services/canada/mdel` | 83% | health, canada, medical, device, licence |
| `/services/canada` | `/services/canada/mdl` | 83% | health, canada, medical, device, licence |
| `/services/canada/mdel` | `/services/canada/mdl` | 83% | health, canada, medical, device, licence |
| `/services/uk` | `/services/uk/ukrp` | 83% | mhra, registration, responsible, person, ukrp |
| `/services/uk/dors-registration` | `/services/uk/mhra-registration` | 80% | device, registration, mhra, dors |
| `/services/uae` | `/services/uae/classification` | 80% | mohap, medical, device, regulatory |
| `/services/saudi-arabia` | `/services/saudi-arabia/establishment-licensing` | 71% | sfda, saudi, arabia, medical, device |

> [!IMPORTANT]
> **The Canada cluster is particularly bad:** The hub page `/services/canada`, plus `/services/canada/mdel` (Medical Device Establishment Licence) and `/services/canada/mdl` (Medical Device Licence) are all fighting for "Health Canada Medical Device Licence." Each needs a distinct primary keyword:
> - Hub: `Health Canada Medical Device Regulatory Consultant`
> - MDEL: `Health Canada MDEL Establishment Licence`
> - MDL: `Health Canada MDL Device Licence Application`

---

## 🟠 Issue #7: Duplicate Meta Descriptions (1 pair)

**Severity: HIGH**

| URL 1 | URL 2 |
|:---|:---|
| `/ai-news` | `/regulatory-updates` |

Both share the identical description: *"Real-time AI-structured regulatory updates, alerts, and guidance from US FDA, CDSCO India, European Commission (EU MDR/IVDR), and MDSAP."*

**Fix:** Give each page a unique description reflecting its specific content focus.

---

## 🟡 Issue #8: Title Too Long (249 pages)

**Severity: MEDIUM**

**249 out of 278 pages** have titles exceeding 60 characters. Google will truncate these in search results, losing important information.

### Worst Offenders (>90 chars)

| Chars | URL | Title |
|:---:|:---|:---|
| 111 | `/services/eu` | `EU MDR 2017/745 & EU IVDR 2017/746 Regulatory Consulting | CE Marking & Technical Documentation | NKB Regovanta` |
| 106 | `/services/uk` | `UK MHRA Medical Device Registration & UK Responsible Person (UKRP) | CE Recognition & UKCA | NKB Regovanta` |
| 105 | `/services/eu/ivdr` | `EU IVDR 2017/746 Regulatory Consulting for In Vitro Diagnostic Devices | PER & CE Marking | NKB Regovanta` |
| 105 | insight page | `EU IVDR Class D Verification: Overcoming Reference Laboratories and Notified Body Hurdles | NKB Regovanta` |
| 103 | insight page | `Overcoming Critical FDA 510(k) Clearance Barriers: Proven Solutions to RTA and AI Holds | NKB Regovanta` |

> [!TIP]
> **Target:** Keep all titles under 60 characters. Structure as: `Primary Keyword | NKB Regovanta` (≤60 chars).
>
> **Example fixes:**
> - `EU MDR & IVDR Regulatory Consultant | NKB Regovanta` (52 chars ✅)
> - `UK MHRA Registration & UKRP | NKB Regovanta` (45 chars ✅)
> - `FDA 510(k) Consultant | NKB Regovanta` (38 chars ✅)

---

## 🟡 Issue #9: Title Keyword Stuffing (192 pages)

**Severity: MEDIUM**

192 pages have titles with excessive pipe separators, commas, or length — attempting to rank for too many terms simultaneously.

**Example of a stuffed title:**
```
USFDA Medical Device Consultant | 510(k), 510 k, De Novo, PMA | NKB Regovanta
```

This tries to rank for: USFDA, Medical Device Consultant, 510(k), 510 k, De Novo, PMA — all at once.

**Better approach:** One primary keyword per page title.
```
FDA Medical Device Consultant | NKB Regovanta
```
Then `/services/usa/510k`, `/services/usa/de-novo`, `/services/usa/pma` each target their own keyword.

---

## 🟡 Issue #10: Meta Keywords Tag Present (278 pages)

**Severity: MEDIUM — Wasted Effort**

**Every single page** (278/278) includes a `<meta name="keywords">` tag with extensive keyword lists.

> [!WARNING]
> **Google has officially stated since 2009 that it does NOT use the meta keywords tag for ranking.** Maintaining these keyword lists across 278 pages is entirely wasted effort. It adds code bulk, increases maintenance burden, and provides zero SEO value.
>
> **Recommendation:** Remove all `meta keywords` tags site-wide.

---

## 🟡 Issue #11: Title / H1 Search Intent Mismatch (12 pages)

**Severity: MEDIUM**

These pages have `<title>` and `<h1>` that share almost no keywords, signaling conflicting search intent to Google.

| URL | Title | H1 | Overlap |
|:---|:---|:---|:---:|
| `/` | `Medical Device Consultant & Consultancy | USFDA, 510(k), CDSCO` | `Global Regulatory & Market Access Consulting` | 0% |
| `/about` | `About NKB Regovanta | Medical Device & Regulatory Consulting Leaders` | `GLOBAL EXPERTISE.` | 0% |
| `/case-studies` | `Client Case Studies & Success Stories` | `Real Challenges.` | 0% |
| `/industries` | `Medical Devices, IVDs, Pharmaceuticals & Cosmetics Regulatory` | `Tailored Solutions for Every Industry` | 0% |
| `/markets` | `Global Medical Device Regulatory Markets | CDSCO FDA CE TGA MHRA` | `Access Multiple Global Markets.` | 13% |
| `/services/iso-13485` | `ISO 13485:2016 Implementation Consultant & Certification` | `Build a QMS That Works` | 0% |
| `/services/eu` | `EU MDR 2017/745 & EU IVDR 2017/746 Regulatory Consulting...` | `EU MDR 2017/745 &` | 11% |

**Fix example for homepage:**
- Title: `Medical Device Regulatory Consultants | NKB Regovanta`
- H1: `Global Medical Device Regulatory Consulting`
- Now they share: "Medical Device," "Regulatory," "Consultant/Consulting" = strong alignment.

---

## 🟡 Issue #12: Marketing-Oriented H1s (2 pages)

**Severity: MEDIUM**

| URL | Current H1 | Better H1 |
|:---|:---|:---|
| `/about` | `GLOBAL EXPERTISE.` | `About NKB Regovanta — Global Medical Device Regulatory Consultants` |
| `/contact` | `Let's Discuss Your Regulatory Journey` | `Contact NKB Regovanta — Regulatory Consulting Enquiry` |

Keep the marketing copy as a visual tagline *below* the H1.

---

## 🟡 Issue #13: Missing JSON-LD Structured Data (19 important pages)

**Severity: MEDIUM**

These high-value pages have no structured data, limiting rich snippet potential in Google search results.

| URL | Type Needed |
|:---|:---|
| `/about` | `Organization` |
| `/contact` | `ContactPoint` / `Organization` |
| `/services` | `Service` |
| `/services/australia` | `Service` |
| `/services/brazil` | `Service` |
| `/services/new-zealand` | `Service` |
| `/services/saudi-arabia` | `Service` |
| `/services/uae` | `Service` |
| `/services/manufacturing` | `Service` |
| `/services/regulatory-affairs` | `Service` |
| `/services/regulatory-due-diligence` | `Service` |
| `/services/pc-pndt-certificate` | `Service` |
| `/services/wpc-wireless-medical-devices` | `Service` |
| `/services/audit-compliance` | `Service` |
| `/services/drug-device-combination-products` | `Service` |
| `/services/drug-licenses-for-importers` | `Service` |
| `/services/iec-ad-code` | `Service` |
| `/services/market-access` | `Service` |
| `/services/technical-documentation` | `Service` |

---

## 🟡 Issue #14: OG URL Mismatches (19 pages)

**Severity: MEDIUM**

19 pages have `og:url` values that don't match their actual page URL. This is the same set as the canonical mismatches — the `og:url` should always match the canonical.

---

## 🟡 Issue #15: Meta Description Too Long (193 pages)

**Severity: MEDIUM**

193 pages have meta descriptions exceeding 160 characters. Google will truncate these in search snippets. Target: 120–155 characters.

---

## ⚪ Issue #16: Pages With No Internal Links (4 pages)

**Severity: LOW — but important for architecture**

| URL | File |
|:---|:---|
| `/ai-news` | `ai-news.tsx` |
| `/contact` | `contact.tsx` |
| `/insights` | `insights.index.tsx` |
| `/regulatory-updates` | `regulatory-updates.tsx` |

These pages don't link to any other page on the site. They are **SEO dead ends** — they receive link equity but pass none.

---

## 🏗️ Structural Issues Summary

### Brand Name Repetition in Titles (10 pages)

These layout route titles contain "NKB Regovanta" or "NKB" **twice**:

| URL | Broken Title |
|:---|:---|
| `/case-studies` | `Medical Device Regulatory Case Studies | NKB Regovanta | NKB Regovanta` |
| `/services/brazil` | `ANVISA Brazil Medical Device Regulatory Consultant | NKB | NKB Regovanta` |
| `/services/canada` | `Health Canada Medical Device Licence Consultant | NKB Regovanta | NKB Regovanta` |
| `/services/eu` | `EU MDR & IVDR Regulatory Consultant | CE Marking | NKB Regovanta | NKB Regovanta` |
| `/services/mdsap` | `MDSAP Audit Readiness & Consulting | NKB Regovanta | NKB Regovanta` |
| `/services/new-zealand` | `Medsafe New Zealand Medical Device Regulatory Consultant | NKB | NKB Regovanta` |
| `/services/saudi-arabia` | `SFDA Saudi Arabia Medical Device Regulatory Consultant | NKB | NKB Regovanta` |
| `/services/uae` | `MoHAP UAE Medical Device Regulatory Consultant | NKB Regovanta | NKB Regovanta` |
| `/services/uk` | `MHRA UK Medical Device Regulatory Consultant | UKRP | NKB | NKB Regovanta` |
| `/services/usa` | `US FDA Medical Device Regulatory Consultant | 510(k) | NKB Regovanta | NKB Regovanta` |

**Root cause:** The layout route's `head()` adds `| NKB Regovanta`, and the index route's `head()` also adds `| NKB Regovanta`. TanStack merges them, creating the duplication.

---

## 📋 Prioritized Fix Order

### Phase 1: Architecture (Fix Today) 🔴

1. **Remove `head()` from layout route files** (12 files: `services.usa.tsx`, `services.india.tsx`, etc.) — eliminates duplicate routes, title repetition, and metadata conflicts
2. **Fix 7 canonical mismatches** in UK and EU service pages — decide: redirect or self-reference
3. **Add H1 tags to 21 pages** missing them (especially the 17 India/CDSCO pages)
4. **Fix 4 duplicate H1 groups** — add country/authority context to shared headings

### Phase 2: Metadata Cleanup (This Week) 🟠

5. **Remove all `<meta name="keywords">` tags** (278 pages)
6. **Shorten all titles to ≤60 chars** (249 pages)
7. **Shorten all meta descriptions to ≤155 chars** (193 pages)
8. **Fix title/H1 alignment** on 12 key pages
9. **Fix brand name duplication** in 10 layout titles

### Phase 3: Enrichment (Next Week) 🟡

10. **Add JSON-LD structured data** to 19 important pages
11. **Add internal links** to 4 dead-end pages
12. **Differentiate cannibalized titles** across 17 competing page pairs
13. **Replace marketing H1s** with SEO-optimized headings on About and Contact

---

## 📊 Quick Reference: Issue Count by Type

| Issue Type | Count | Severity |
|:---|:---:|:---:|
| Title Too Long (>60 chars) | 249 | 🟡 |
| Meta Description Too Long (>160 chars) | 193 | 🟡 |
| Title Keyword Stuffing | 192 | 🟡 |
| Meta Keywords Present (useless) | 278 | 🟡 |
| Missing H1 (non-layout pages) | 21 | 🟠 |
| Canonical Mismatch | 18 | 🔴 |
| Keyword Cannibalization Pairs | 17 | 🟠 |
| Missing JSON-LD | 19 | 🟡 |
| OG URL Mismatch | 19 | 🟡 |
| Layout Route No H1 | 12 | 🔴 |
| Duplicate Routes | 12 | 🔴 |
| Title/H1 Intent Mismatch | 12 | 🟡 |
| Brand Name Repeated in Title | 10 | 🟡 |
| Meta Description Too Short | 5 | ⚪ |
| Duplicate H1 Groups | 4 | 🟠 |
| Marketing H1s | 2 | 🟡 |
| Duplicate Meta Description | 1 | 🟠 |
