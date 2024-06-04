window.onscroll = function() {
    var header = document.querySelector('.header-center-container');
    var navbar = document.getElementById('navbar');
    var sticky = header.offsetHeight;

    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
        document.querySelector('.container').style.marginTop = navbar.offsetHeight + "px";
    } else {
        navbar.classList.remove("sticky");
        document.querySelector('.container').style.marginTop = "0";
    }
};

//처음 로드될 때 한번 실행
window.onload = function() {
    var header = document.querySelector('.header-center-container');
    var navbar = document.getElementById('navbar');
    var sticky = header.offsetHeight;

    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
        document.querySelector('.container').style.marginTop = navbar.offsetHeight + "px";
    } else {
        navbar.classList.remove("sticky");
        document.querySelector('.container').style.marginTop = "0";
    }
};