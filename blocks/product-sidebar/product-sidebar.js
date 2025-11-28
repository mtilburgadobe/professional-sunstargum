export default function decorate(block) {
  // Get the parent section
  const section = block.closest('main > div');
  if (!section) return;

  // Add class to section for layout
  section.classList.add('products-with-nav');
}
