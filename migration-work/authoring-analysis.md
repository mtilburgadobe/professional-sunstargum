# Authoring Analysis

## Step 3a-3b: Content Sequence Decisions

### Section 1 (Light - Hero Area)
- **Sequence 1**: Breadcrumb navigation "Home page > Articles"
  - Decision: **DEFAULT CONTENT**
  - Reason: Breadcrumbs are typically handled by header/navigation components, not main content

- **Sequence 2**: Date "15.09.2025" and reading time "7 minutes read"
  - Decision: **DEFAULT CONTENT**  
  - Reason: Simple metadata text that author can type

- **Sequence 3**: Large heading (H1), intro paragraph with links
  - Decision: **DEFAULT CONTENT**
  - Reason: Author can type heading and paragraph normally. Large styling is CSS concern

- **Sequence 4**: Large hero image (woman smiling with apple)
  - Decision: **DEFAULT CONTENT**
  - Reason: Single inline image in content flow

- **Sequence 5**: Sidebar with "Content" navigation menu
  - Decision: **SKIP** (Table of contents auto-generated or navigation fragment)
  - Reason: This is a table of contents for article sections, typically auto-generated

### Section 2 (Light - Article Content)
- **Sequence 1**: Flowing article text with multiple H2/H3 headings, paragraphs, lists, inline formatting
  - Decision: **DEFAULT CONTENT**
  - Reason: This is exactly what authors type in Word/Google Docs - headings, paragraphs, lists flowing naturally

### Section 3 (Teal - Promotional Banner)
- **Sequence 1**: Two-column layout with large promotional image on left, heading/text/CTA button on right
  - Decision: **COLUMNS block** (2 columns)
  - Reason: Side-by-side layout requires structure. Obvious match with "columns" block in inventory

### Section 4 (Light - Article Content)
- **Sequence 1**: Continued flowing article text with headings and paragraphs
  - Decision: **DEFAULT CONTENT**
  - Reason: Natural prose content that author types normally

### Section 5 (Light - Image + Content)
- **Sequence 1**: Large full-width image (man brushing teeth)
  - Decision: **DEFAULT CONTENT**
  - Reason: Single inline image in content flow

- **Sequence 2**: Article text with headings and paragraphs
  - Decision: **DEFAULT CONTENT**
  - Reason: Flowing prose content

### Section 6 (Light - Article Content)
- **Sequence 1**: Flowing article text with headings and paragraphs
  - Decision: **DEFAULT CONTENT**
  - Reason: Natural prose that author types

### Section 7 (Light - Image + Content)
- **Sequence 1**: Large full-width image (interdental brush close-up)
  - Decision: **DEFAULT CONTENT**
  - Reason: Single inline image in content flow

- **Sequence 2**: Article text content
  - Decision: **DEFAULT CONTENT**
  - Reason: Flowing prose content

### Section 8 (Teal/Green - Related Content)
- **Sequence 1**: Centered heading "Discover more content" or similar
  - Decision: **DEFAULT CONTENT**
  - Reason: Simple heading that author types

- **Sequence 2**: Grid of 3 cards, each with image, title, and "Discover" link
  - Decision: **CARDS-ARTICLE block**
  - Reason: Repeating structured pattern with images and text. Obvious match with "cards-article" block (specialized for article listings) in local inventory

## Step 3c: Block Validation

All blocks used are in local inventory:
- ✅ **columns** - exists locally
- ✅ **cards-article** - exists locally

No need to search Block Collection.

## Step 3d: Get Block HTML Structures

Need to fetch structures for:
- columns
- cards-article


## Block Structure Documentation

### Columns Block
**Structure**: Table with 1 row, N columns (where N = number of columns desired)
**Content Model**:
```
| Column 1 Content | Column 2 Content |
```
**Notes**:
- Each column can contain any content (text, images, etc.)
- Images in their own div get special `.columns-img-col` class

### Cards-Article Block
**Structure**: Table with N rows (one per card)
**Content Model**:
```
| Image | Text Content |
| Image | Text Content |
| Image | Text Content |
```
**Notes**:
- Each row = one card
- First column: image only (gets `.cards-article-card-image` class)
- Second column: text content (gets `.cards-article-card-body` class)
- Renders as `<ul><li>` structure

## Step 3e: Section Styling Validation

Checking sections with exactly one block:

**Section 3 (Teal background):**
- Block: Columns
- Background: Solid teal/turquoise color
- Layout: Content has visible padding, not full-bleed
- Decision: **KEEP section-metadata style="teal"**
- Reason: Section provides container styling, columns block inherits it

**Section 8 (Teal/Green background):**
- Contains 2 sequences (heading + cards-article block)
- Decision: **KEEP section-metadata style="teal"**
- Reason: Multiple sequences mean section styling applies to all content

## Final Section Styling Summary

| Section | Background | Metadata |
|---------|-----------|----------|
| 1 | Light (default) | None |
| 2 | Light (default) | None |
| 3 | Teal | style="teal" |
| 4 | Light (default) | None |
| 5 | Light (default) | None |
| 6 | Light (default) | None |
| 7 | Light (default) | None |
| 8 | Teal/Green | style="teal" |

## Summary of Authoring Decisions

**Blocks to use:**
- columns (Section 3)
- cards-article (Section 8)

**Default content:**
- All other sequences use natural prose/heading/image authoring

**Section styling:**
- Sections 3 and 8 have teal background via section-metadata

