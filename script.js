var clickHandler = document.getElementById('clickHandler');
var imgHandler = document.getElementById('imgContainer');

clickHandler.addEventListener('click', function() { 
    imgHandler.classList.add('upAndDown');
});

imgHandler.addEventListener('click', function() {
    imgHandler.classList.remove('upAndDown');
});