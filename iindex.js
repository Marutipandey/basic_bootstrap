const box = document.getElementById('box');

const btn = document.getElementById('btn');

btn.addEventListener('click', function handleClick() {
  if (box.style.display === 'none') {
    box.style.display = 'block';

    btn.textContent = 'Hide details';
  } else {
    box.style.display = 'none';

    btn.textContent = 'Show details';
  }
});
