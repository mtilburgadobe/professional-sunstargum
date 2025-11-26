# Block Variant Analysis

## Related Articles Section Analysis

### Original HTML Structure
Each article card contains:
1. **Image** - Large photo with alt text
2. **Title** - Clickable linked title
3. **Description** - Short summary text

Example structure:
```html
<article>
  <a href="/url">
    <img src="image.jpg" alt="Title">
  </a>
  <a href="/url">
    <span class="title">Article Title</span>
  </a>
  <span class="description">Article description text...</span>
</article>
```

### Existing cards-article Block Structure

**Expected markdown authoring format**:
```markdown
| Cards Article |
|---|
| ![Alt text](image.jpg) |
| *Tag* |
| Date |
| **[Title](url)** |
```

**JavaScript behavior** (cards-article.js):
- Converts rows to `<li>` items in a `<ul>`
- Classifies divs as `.cards-article-card-image` (if contains picture) or `.cards-article-card-body`
- Optimizes images to 750px width
- Creates responsive grid layout

**CSS styling** (cards-article.css):
- Responsive grid: `minmax(280px, 1fr)`
- Card styling: border, border-radius, hover effects
- Image aspect ratio: 16:9
- Tag styling (optional, in first `<em>`)
- Date styling (optional, in second `<p>`)
- Title styling (in last `<p> strong a`)

### Comparison: Related Articles vs. cards-article

| Feature | Related Articles (Original) | cards-article Block | Match? |
|---------|----------------------------|---------------------|--------|
| Layout | Carousel/grid of 4 cards | Responsive grid | ✅ Yes |
| Card structure | Image + Title + Description | Image + body content | ✅ Yes |
| Image | Full-width, 16:9 aspect | aspect-ratio: 16/9 | ✅ Yes |
| Title | Clickable link | Strong link in body | ✅ Yes |
| Description | Plain text | Paragraph in body | ✅ Yes |
| Tag/Category | No tag | Optional tag support | ⚠️ Not needed |
| Date | No date | Optional date support | ⚠️ Not needed |
| Hover effects | Image zoom + card lift | Image scale + shadow | ✅ Yes |
| Responsive | Carousel navigation | Grid with breakpoints | ✅ Similar |

### Similarity Score: ~85%

**Matches**:
- Grid layout ✅
- Card-based design ✅
- Image + text structure ✅
- Hover animations ✅
- Responsive behavior ✅

**Differences**:
- Original has carousel functionality (prev/next buttons, dots)
- cards-article expects tags and dates (not needed here)
- Slight content structure difference (but adaptable)

### Decision: REUSE EXISTING BLOCK

**Verdict**: The existing **cards-article** block can be reused WITHOUT a new variant.

**Rationale**:
1. Core structure is identical (image + title + description)
2. Visual design is very similar (grid, cards, hover effects)
3. The tag and date fields are OPTIONAL - we can simply omit them
4. Carousel functionality can be added later via CSS/JS if needed, but not critical for MVP
5. Meets the 70% similarity threshold for reuse (actually ~85%)

### Authoring Approach for Related Articles

**Markdown structure**:
```markdown
## Related Articles

| Cards Article |
|---|
| ![Educate Patients on Proper Gum Care for Diabetes Control](./images/770f36083c4ad89b2d93eb0e621ca5d3.png) |
| **[Educate Patients on Proper Gum Care for Diabetes Control](/en-en/news-events/advising-patients-on-links-between-diabetes-and-periodontitis.html)** |
| The benefits of oral hygiene go beyond tooth and gum health. Patients need to understand how gum disease can affect conditions like diabetes and vice versa. |
| ![Chlorhexidine, the Gold Standard in Dentistry](./images/9f38a43197a0a6b959bbf40c3bac8441.png) |
| **[Chlorhexidine, the Gold Standard in Dentistry, Mode of Action](/en-en/news-events/chlorhexidine-the-gold-standard-in-dentistry.html)** |
| Chlorhexidine is one of the main antibacterial ingredients in oral care products as GUM® PAROEX®, its antibacterial activity can last for more than twelve hours. |
| ![Chlorhexidine: Side Effects, Therapy Benefits and Interactions](./images/f4b6161f1729f1feecdd20ba9579fd94.png) |
| **[Chlorhexidine: Side Effects, Therapy Benefits and Interactions](/en-en/news-events/chlorhexidine-therapy-side-effects-and-interactions.html)** |
| Chlorhexidine not only inhibits the multiplication of plaque bacteria, but also kills them. Find out more about the therapy, side effects and interactions. |
| ![Interdental Cleaning Compliance](./images/e266b2c4e1ef0d180a8ca736383af645.png) |
| **[Interdental Cleaning Compliance: Leverage the Evidence on Ease of Use](/en-en/news-events/compliance-in-interdental-cleaning.html)** |
| A daily oral hygiene routine is one of the greatest issues in dental care. Discover how to drive interdental cleaning compliance by leveraging 'ease of use'. |
```

**Block structure**: Each row contains 3 cells:
1. Image with alt text
2. Title as bold link
3. Description as plain text

This will render with the existing cards-article block without any modifications needed.

## Variant Management Summary

### Blocks Needed for This Page

1. **header** - Use existing fragment
2. **footer** - Use existing fragment
3. **cards-article** - Use existing block (NO new variant needed)

### No New Variants Required

The existing blocks can handle all requirements for this article page migration.
