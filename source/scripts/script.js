document.addEventListener('DOMContentLoaded', function() {
    var titulo = document.querySelector('h1');

    titulo.addEventListener('click', function() {
        this.textContent = 'Gulp FUNCIONANDO C#$%!';
    });
});