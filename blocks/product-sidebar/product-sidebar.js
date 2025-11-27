export default function decorate(block) {
  // Get the parent section
  const section = block.closest('.section');
  if (!section) return;

  // Add class to section for grid layout
  section.classList.add('products-with-nav');

  // Create wrapper for all content except the sidebar
  const contentWrapper = document.createElement('div');
  contentWrapper.className = 'product-content-wrapper';

  // Move all siblings after the sidebar into the content wrapper
  let sibling = block.nextElementSibling;
  while (sibling) {
    const next = sibling.nextElementSibling;
    contentWrapper.appendChild(sibling);
    sibling = next;
  }

  // Add the content wrapper after the sidebar
  block.parentElement.appendChild(contentWrapper);
}
