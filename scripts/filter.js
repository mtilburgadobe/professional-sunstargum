// Article filter functionality
function initializeFilter() {
  const select = document.getElementById('topic-filter');
  if (!select) return;

  select.addEventListener('change', (e) => {
    const selectedTopic = e.target.value;
    const cards = document.querySelectorAll('.cards-article > ul > li');

    cards.forEach(card => {
      if (selectedTopic === 'all') {
        card.style.display = '';
        return;
      }

      // Get the tags from the first paragraph in card body
      const cardBody = card.querySelector('.cards-article-card-body');
      const tagsElement = cardBody?.querySelector('p:first-child em');
      const tags = tagsElement?.textContent.toLowerCase() || '';

      // Convert selected value to match tag format
      const searchTopic = selectedTopic.replace(/-/g, ' ');

      if (tags.includes(searchTopic)) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });

    // Show count of visible cards
    const visibleCount = [...cards].filter(c => c.style.display !== 'none').length;
    updateResultCount(visibleCount, cards.length);
  });
}

function updateResultCount(visible, total) {
  // Create or update result count display
  let countDisplay = document.getElementById('result-count');
  if (!countDisplay) {
    countDisplay = document.createElement('p');
    countDisplay.id = 'result-count';
    countDisplay.style.cssText = 'color: #666; font-size: 14px; margin-top: -32px; margin-bottom: 24px;';

    const articlesHeading = document.querySelector('h1');
    if (articlesHeading && articlesHeading.nextElementSibling) {
      articlesHeading.nextElementSibling.after(countDisplay);
    }
  }

  if (visible === total) {
    countDisplay.textContent = `Showing all ${total} articles`;
  } else {
    countDisplay.textContent = `Showing ${visible} of ${total} articles`;
  }
}

// Initialize on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeFilter);
} else {
  initializeFilter();
}
