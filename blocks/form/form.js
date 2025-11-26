export default function decorate(block) {
  const rows = [...block.children];

  // Create form element
  const form = document.createElement('form');
  form.className = 'newsletter-form';

  rows.forEach((row) => {
    const cols = [...row.children];
    if (cols.length === 2) {
      const label = cols[0].textContent.trim();
      const type = cols[1].textContent.trim();

      const fieldWrapper = document.createElement('div');
      fieldWrapper.className = 'form-field';

      if (type === 'submit') {
        const button = document.createElement('button');
        button.type = 'submit';
        button.textContent = label;
        button.className = 'form-submit';
        fieldWrapper.appendChild(button);
      } else {
        const labelElement = document.createElement('label');
        labelElement.textContent = label;
        labelElement.className = 'form-label';

        const input = document.createElement('input');
        input.type = type;
        input.name = label.toLowerCase().replace(/\s+/g, '-');
        input.placeholder = label;
        input.className = 'form-input';

        if (type === 'email') {
          input.required = true;
        }

        fieldWrapper.appendChild(labelElement);
        fieldWrapper.appendChild(input);
      }

      form.appendChild(fieldWrapper);
    }
  });

  // Handle form submission
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Show success message
    const successMessage = document.createElement('div');
    successMessage.className = 'form-success';
    successMessage.textContent = 'Thank you for subscribing to our newsletter!';

    form.replaceWith(successMessage);

    // Here you would typically send the data to your backend
    console.log('Form submitted:', data);
  });

  block.textContent = '';
  block.appendChild(form);
}
