// Get the checkbox and container elements
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

// Add an event listener to the checkbox
darkModeToggle.addEventListener('change', () => {
  // Toggle the dark mode class on the body element
  body.classList.toggle('dark-mode');
});
const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

darkModeMediaQuery.addEventListener('change', (event) => {
  if (event.matches) {
    document.body.style.color = '#f2f2f2';
  } else {
    document.body.style.color = '#333';
  }
});