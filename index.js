console.log('hello');

var home = document.getElementById('home-page');
var enrollFormPage = document.getElementById('enrollForm-page');
var enrollPage = document.getElementById('btn-enroll');

enrollPage.addEventListener('click',() => {
    home.style.display = 'none';
    enrollFormPage.style.display = 'block';
});