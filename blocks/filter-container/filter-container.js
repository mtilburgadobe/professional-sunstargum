export default function decorate(block) {
  // Extract topics from block content
  const topics = [];
  [...block.children].forEach((row) => {
    const topicName = row.textContent.trim();
    if (topicName) {
      topics.push(topicName);
    }
  });

  // Create filter container structure
  const container = document.createElement('div');
  container.className = 'filter-wrapper';

  const label = document.createElement('label');
  label.setAttribute('for', 'topic-filter');
  label.innerHTML = '<strong>Filter by Topic</strong>';

  const select = document.createElement('select');
  select.id = 'topic-filter';
  select.className = 'topic-select';

  // Add "All" option
  const allOption = document.createElement('option');
  allOption.value = 'all';
  allOption.textContent = 'All';
  select.appendChild(allOption);

  // Add topic options
  topics.forEach((topic) => {
    const option = document.createElement('option');
    option.value = topic.toLowerCase().replace(/\s+/g, '-');
    option.textContent = topic;
    select.appendChild(option);
  });

  // Add filter functionality
  select.addEventListener('change', (e) => {
    const selectedTopic = e.target.value;
    const cards = document.querySelectorAll('.cards-article > ul > li');

    cards.forEach((card) => {
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
    const visibleCount = [...cards].filter((c) => c.style.display !== 'none').length;
    updateResultCount(visibleCount, cards.length);
  });

  container.appendChild(label);
  container.appendChild(select);

  // Replace block content with filter UI
  block.textContent = '';
  block.appendChild(container);
}

function updateResultCount(visible, total) {
  // Create or update result count display
  let countDisplay = document.getElementById('result-count');
  if (!countDisplay) {
    countDisplay = document.createElement('p');
    countDisplay.id = 'result-count';
    countDisplay.className = 'result-count';

    const filterBlock = document.querySelector('.filter-container');
    if (filterBlock) {
      filterBlock.after(countDisplay);
    }
  }

  if (visible === total) {
    countDisplay.textContent = `Showing all ${total} articles`;
  } else {
    countDisplay.textContent = `Showing ${visible} of ${total} articles`;
  }
}
