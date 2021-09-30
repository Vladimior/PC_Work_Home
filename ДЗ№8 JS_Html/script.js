// Task_1
// Для проверки какой либо версии отдельно, можно закоментировать ненужное
// Version_1.0
let num;

while (num != 8) {
    num = +prompt('Введите число: ');
    if (num === 8) {
        console.log('Ура вы угадали, число 8');
    } else {
        console.log('Вы не угадали, попробуйте еще...');
    }
}

// Version_1.1
for (let i = 0; i < 1; i++) {
    const numb = 8;
    const userNumb = +prompt('Введите число: ');
    if (numb === userNumb) {
        console.log('Ура вы угадали, число 8');
    } else {
        console.log('Вы не угадали, попробуйте еще...');
        i--;
    }
}

// Task_2
// Version_2.0
function resize() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    document.getElementById("width_hight").innerHTML = "Ширина: " + w + "<br>Высота: " + h;
}

let size = resize()
window.onresize = resize;

// Version_2.1
window.addEventListener("resize", function () {
    document.getElementById("width_hight").innerHTML = "Width: " + innerWidth + "<br>Height: " + innerHeight;
});

// Task_3
// Version_3.0
function hover() {
    var inptText = document.getElementById("tex");
    var bold = inptText.getElementsByTagName("b");
    for (var i = 0; i < bold.length; i++) {
        var x = bold[i].style.color = '#FF0000';
    }
}

function offHover() {
    var inptText = document.getElementById("tex");
    var bold = inptText.getElementsByTagName("b");
    for (var i = 0; i < bold.length; i++) {
        var x = bold[i].style.color = '#000000';
    }
}

// Task_4
// Version_4.0
function getAttributes() {
    console.log('Значение атрибута href: ' + link.getAttribute('href'));
    console.log('Значение атрибута hreflang: ' + link.getAttribute('hreflang'));
    console.log('Значение атрибута rel: ' + link.getAttribute('rel'));
    console.log('Значение атрибута target: ' + link.getAttribute('target'));
    console.log('Значение атрибута type: ' + link.getAttribute('type'));
}

// Version_4.1
// Версия с выводом на экран
// function getAttributes() {
//     document.getElementById("getAttributes").innerHTML = 'Значение атрибута href: ' + 
//     link.getAttribute('href') + '<br>Значение атрибута hreflang: ' + link.getAttribute('hreflang') + 
//     '<br>Значение атрибута rel: ' + link.getAttribute('rel') + '<br>Значение атрибута target: ' + 
//     link.getAttribute('target') + '<br>Значение атрибута type: ' + link.getAttribute('type');
// }