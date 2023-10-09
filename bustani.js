const bar = document.getElementById("bar")
const close = document.getElementById("close")
const nav = document.getElementById("navbar")
if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    })
}
if (bar) {
    close.addEventListener('click', () => {
        nav.classList.remove('active')
    })
}

var index = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) { // Use < instead of >
        x[i].style.display = "none";
    }
    index++;
    if (index > x.length) {
        index = 1;
    }
    x[index - 1].style.display = "block";
    setTimeout(carousel, 2000);
}