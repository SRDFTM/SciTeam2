const letters = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯABCDEFGHIJKLMNOPQRSTUVWXYZ";
const menu = document.querySelector('menu');


Array.from(document.getElementsByClassName("menu-item"))
.forEach((item) => {
  item.onmouseover = event => {  
      let interval = null;
      let iteration = 0;
      
      clearInterval(interval);
      
      interval = setInterval(() => {
        event.target.innerText = event.target.innerText
          .split("")
          .map((letter, index) => {
            if(index < iteration) {
              return event.target.dataset.value[index];
            }
          
            return letters[Math.floor(Math.random() * 26)]
          })
          .join("");
        
        if(iteration >= event.target.dataset.value.length){ 
          clearInterval(interval);
        }
        
        iteration += 1 / 3;
      }, 20);
    }
  });


// Получаем элемент <p> по его id
const paragraph = document.getElementById('my-paragraph');
// Получаем элемент <div> по его id
const lettersDiv = document.getElementById('letters');

// Получаем текст из элемента <p>
const text = paragraph.textContent;

// Разделяем текст на отдельные символы
const characters = text.split('');

// Очищаем содержимое элемента <p>
paragraph.textContent = '';

// Перебираем каждый символ и создаем для него новый <span> элемент
characters.forEach((character) => {
  const span = document.createElement('span');
  span.textContent = character;
  
  // Генерируем случайные значения для позиции символа
  const randomX = Math.random() * 100; // случайное значение от 0 до 100 для оси X
  const randomY = Math.random() * 100; // случайное значение от 0 до 100 для оси Y
  
  // Применяем стили для случайной позиции символа
  span.style.position = 'absolute';
  span.className = 'letter-span';
  span.style.left = `${randomX}%`;
  span.style.top = `${randomY}%`;
  
  // Добавляем созданный <span> элемент внутрь элемента <div>
  lettersDiv.appendChild(span);

  lettersDiv.addEventListener('mouseover', () => {
    // Восстанавливаем исходное положение символа
    span.style.position = 'relative';
    span.style.left = '';
    span.style.top = '';
    Array.from(document.getElementsByClassName("letter-span"))
      .forEach((item) => {

      })
  });
});






