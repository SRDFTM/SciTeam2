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


var paragraph = document.getElementById('my-paragraph');
var originalText = paragraph.textContent;

paragraph.innerHTML = shuffleString(originalText);

function shuffleString(text) {
    var shuffledText = '';
    var charArray = text.split('');

    while (charArray.length > 0) {
        var randomIndex = Math.floor(Math.random() * charArray.length);
        shuffledText += charArray[randomIndex];
        charArray.splice(randomIndex, 1);
    }

    return shuffledText;
}
paragraph.addEventListener('mouseover', function () {
  paragraph.textContent = originalText;
});

paragraph.addEventListener('mouseout', function () {
  var randomizedText = shuffleString(originalText);
  paragraph.textContent = randomizedText;
});








