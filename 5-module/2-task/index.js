function toggleText() {
  const button = document.querySelector('.toggle-text-button');
  const textBlock = document.getElementById('text');
  button.addEventListener('click', () => textBlock.hidden = !textBlock.hidden);
}
