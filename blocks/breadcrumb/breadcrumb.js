export default function decorate(block) {
  const nav = document.createElement('nav');
  nav.setAttribute('aria-label', 'Breadcrumb');

  const ol = document.createElement('ol');
  ol.className = 'breadcrumb-list';

  // Process each row in the block
  [...block.children].forEach((row, index) => {
    const link = row.querySelector('a');
    const text = row.textContent.trim();

    if (!text) return;

    const li = document.createElement('li');
    li.className = 'breadcrumb-item';

    // Last item is active (current page)
    const isLast = index === block.children.length - 1;
    if (isLast) {
      li.classList.add('breadcrumb-item--active');
    }

    if (link && !isLast) {
      // Add link for non-active items
      const a = document.createElement('a');
      a.href = link.href;
      a.className = 'breadcrumb-link';
      a.textContent = text;
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
  block.replaceChildren(nav);
}
