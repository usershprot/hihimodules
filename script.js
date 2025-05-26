// Загрузка файла
function loadFile() {
  const fileSelector = document.getElementById('fileSelector');
  const codeDisplay = document.getElementById('codeDisplay');
  const selectedFile = fileSelector.value;

  if (!selectedFile) return;

  fetch(selectedFile)
    .then(response => response.text())
    .then(text => {
      codeDisplay.textContent = text;
      // Подсветка синтаксиса
      hljs.highlightElement(codeDisplay);
    })
    .catch(error => {
      codeDisplay.textContent = `Ошибка загрузки: ${error}`;
    });
}

// Автоподсветка при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
  hljs.highlightAll();
});