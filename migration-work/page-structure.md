# Page Structure Analysis

## Block Inventory

### Local Blocks (Available in Project)
- **cards** - Grid layout block
- **cards-article** - Article card variant (custom)
- **columns** - Side-by-side content
- **filter-container** - Filter dropdown (custom)
- **footer** - Footer block
- **fragment** - Reusable content
- **header** - Header block
- **hero** - Hero section block

### Block Collection (Available from Adobe)
- **accordion** - Collapsible content panels
- **carousel** - Image/content slider
- **quote** - Highlighted quotations
- **tabs** - Tabbed content organization

## Section Boundaries

Based on visual analysis of screenshot.png and HTML structure in cleaned.html:

### Section 1: Header (lines 4-395)
**Styling**: White background, global header
**Content**:
- Language selector
- Logo
- Main navigation
- Search functionality
**Notes**: Should use header fragment (reusable across site)

### Section 2: Breadcrumb Navigation (lines 404-428)
**Styling**: White background, small text
**Content**: Home > Articles breadcrumb trail with "View more" link
**Notes**: Simple default content, no block needed

### Section 3: Article Header/Hero (lines 437-466)
**Styling**: White background with large hero image
**Content**:
- Publication date: "30.10.2025"
- Reading time: "7 minutes read"
- H1 title: "Dentin Sensitivity in Patients: Facts, Stats, New Research"
- Lead paragraph with definition and citation
- Large hero image (dentist with patient)
**Notes**: Could be hero block OR default content with image

### Section 4: Article Content with Sidebar (lines 469+)
**Styling**: Two-column layout - sidebar (TOC) + main content
**Structure**:
- **Left sidebar** (lines 470-498): Table of Contents with anchor links
  - "Dentin sensitivity symptoms"
  - "Diagnosing dentin hypersensitivity"
  - "Causes of Tooth Sensitivity and Dentin Hypersensitivity"
  - "Treatments for dentin sensitivity"
  - "Tips and scripts for patient education"
- **Main content area** (lines 500-672): Article body text

**Content Sequences in Article Body**:
1. Opening paragraph (lines 510-518)
2. H2: "Dentin sensitivity symptoms" + bullet list (lines 519-529)
3. Separator + Illustration image (tooth diagram) + Separator (lines 531-546)
4. H2: "Diagnosing dentin hypersensitivity" + paragraphs + bullet list (lines 547-561)
5. H2: "Causes of Tooth Sensitivity..." + paragraphs + bullet list (lines 562-578)
6. Separator + Illustration image (gum disease diagram) + Separator (lines 580-594)
7. Continued causes text (lines 595-606)
8. H2: "Treatments for dentin sensitivity" + paragraphs + bullet list (lines 607-622)
9. Separator + Illustration image (3-step routine) + Separator (lines 623-638)
10. H2: "Tips and scripts..." + paragraphs + bullet list + product links (lines 639-669)

**Notes**: Main content is predominantly default content (text, headings, images, lists). The sidebar TOC could be:
- A custom TOC block, OR
- Section metadata (style: sidebar-toc), OR
- Default content with CSS styling

### Section 5: Topics/Tags (lines 676-682)
**Styling**: White background, small tag
**Content**: "#Sensitive Teeth" tag link
**Notes**: Simple default content or custom topics block

### Section 6: Related Articles (lines 685-780)
**Styling**: White background
**Content**:
- H2: "Related Articles"
- Carousel with 4 article cards:
  1. "Educate Patients on Proper Gum Care for Diabetes Control"
  2. "Chlorhexidine, the Gold Standard in Dentistry, Mode of Action"
  3. "Chlorhexidine: Side Effects, Therapy Benefits and Interactions"
  4. "Interdental Cleaning Compliance: Leverage the Evidence on Ease of Use"
- Each card has: image, title, description
**Notes**: This should definitely be a **cards-article** block (already exists locally) or a **carousel** block

### Section 7: Footer (lines 788-923)
**Styling**: Green background, multi-column layout
**Content**:
- Language/country selector
- SUNSTAR logo
- Footer navigation links
- Social media links
- Legal links
**Notes**: Should use footer fragment (reusable across site)

## Key Observations

1. **Header and Footer**: Use existing fragments (reusable)
2. **Article Body**: Mostly default content - text, headings, images, lists, links
3. **Illustrations**: Centered images with separators - could be default content with CSS
4. **Related Articles**: Should use cards-article block (carousel functionality)
5. **Sidebar TOC**: Could be section metadata or custom block
6. **Overall Structure**: Clean article page with minimal block usage needed

## Recommended Approach

Following David's Model ("How would an author create this in Word/Google Docs?"):
- Author would write article body as **default content** (paragraphs, headings, lists, images)
- Related articles section should be a **cards-article block** (or carousel)
- Header/footer as **fragments**
- Table of contents could be auto-generated from H2 tags OR manual section metadata
