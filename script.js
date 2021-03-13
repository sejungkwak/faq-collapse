var opens = document.querySelectorAll('.fa-chevron-up');
var closes = document.querySelectorAll('.fa-times-circle');

document.querySelectorAll('.collapse').forEach(answer => {
    answer.style.display = 'none';
})

closes.forEach(close => {
    close.style.display = 'none';
})

opens.forEach(open => {
    open.addEventListener('click', () => {
        var number = open.id.slice(4, 5);
        var answer = document.getElementById(`collapse${number}`);
        var close = document.getElementById(`close${number}`);
        var question = document.getElementById(`question${number}`)

        answer.style.display = 'block';
        open.style.display = 'none';
        close.style.display = 'block';
        question.style.backgroundColor = '#f8f9fa';
        document.querySelectorAll('.container-question')[`${number - 1}`].classList.add('active');
    })
})

closes.forEach(close => {
    close.addEventListener('click', () => {
        var number = close.id.slice(5, 6);
        var answer = document.getElementById(`collapse${number}`);
        var open = document.getElementById(`open${number}`);
        var question = document.getElementById(`question${number}`)

        answer.style.display = 'none';
        close.style.display = 'none';
        open.style.display = 'block';
        question.style.backgroundColor = '#ced4da';
        document.querySelectorAll('.container-question')[`${number - 1}`].classList.remove('active');
    })
})