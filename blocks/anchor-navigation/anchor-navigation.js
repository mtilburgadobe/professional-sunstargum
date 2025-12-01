export default function decorate(block) {
  // Get all rows (each row contains a heading text)
  const rows = Array.from(block.querySelectorAll(':scope > div'));

  // Create the navigation structure
  const nav = document.createElement('div');
  nav.className = 'cmp-anchor-navigation__content';

  const catalog = document.createElement('div');
  catalog.className = 'cmp-anchor-navigation__catalog';

  const title = document.createElement('div');
  title.className = 'cmp-anchor-navigation__catalog__title';
  title.textContent = 'Content';

  const list = document.createElement('div');
  list.className = 'cmp-anchor-navigation__catalog__list';
  list.setAttribute('data-headline-type', 'h2');

  // Process each row
  rows.forEach((row, index) => {
    const headingText = row.textContent.trim();

    const item = document.createElement('div');
    item.className = 'cmp-anchor-navigation__catalog__list__item';
    item.setAttribute('data-id', `section-${index}`);

    const anchor = document.createElement('a');
    anchor.href = '#';
    anchor.textContent = headingText;

    // Add click handler to scroll to the corresponding h2
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const headings = Array.from(document.querySelectorAll('main h2'));
      if (headings[index]) {
        headings[index].scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });

    item.appendChild(anchor);
    list.appendChild(item);
  });

  catalog.appendChild(title);
  catalog.appendChild(list);
  nav.appendChild(catalog);

  // Clear the block and add the new structure
  block.innerHTML = '';
  block.appendChild(nav);
}
