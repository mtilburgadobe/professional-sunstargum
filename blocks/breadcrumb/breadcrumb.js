export default function decorate(block) {
  // Check if we're on a news-events article page
  const path = window.location.pathname;
  const isNewsEventsArticle = path.includes('/news-events/') && !path.endsWith('/news-events.html');

  // Store original rows before manipulating
  const rows = [...block.children];

  // Create breadcrumb navigation
  const nav = document.createElement('nav');
  nav.setAttribute('aria-label', 'Breadcrumb');

  const ol = document.createElement('ol');
  ol.className = 'breadcrumb-list';

  // Process each row in the block
  rows.forEach((row, index) => {
    const link = row.querySelector('a');
    const text = row.textContent.trim();

    if (!text) return;

    const li = document.createElement('li');
    li.className = 'breadcrumb-item';

    // Last item is active (current page)
    const isLast = index === rows.length - 1;
    if (isLast) {
      li.classList.add('breadcrumb-item--active');
    }

    if (link && !isLast) {
      // Add link for non-active items
      const a = document.createElement('a');
      a.href = link.href;
      a.className = 'breadcrumb-link';
      a.textContent = link.textContent || text;
      li.append(a);
    } else {
      // Just add text for active item
      const span = document.createElement('span');
      span.textContent = text;
      li.append(span);
    }

    ol.append(li);
  });

  nav.append(ol);

  // Clear block and add navigation first
  block.textContent = '';
  block.append(nav);

  // Add "View more" back link for news-events articles (after breadcrumb)
  if (isNewsEventsArticle) {
    const backLink = document.createElement('div');
    backLink.className = 'breadcrumb-back-link';

    const link = document.createElement('a');
    link.href = '/en-en/news-events.html';
    link.className = 'breadcrumb-back-link-anchor';
    link.innerHTML = '&lt; View more';

    backLink.append(link);
    block.append(backLink);
  }
}
