document.addEventListener('DOMContentLoaded', () => {
    const questions = document.querySelectorAll('.questions');
    

    questions.forEach(question => {
        question.addEventListener('click', () => {
            const toggleIcon = question.querySelector('.toggle-icon')
            const toggleAnswer = question.nextElementSibling;
            toggleAnswer.classList.toggle('hidden');
    
            if(toggleIcon.src.endsWith('icon-plus.svg')) {
                toggleIcon.src = './assets/images/icon-minus.svg';
                toggleIcon.alt = '-icon';
    
            } else {
                toggleIcon.src = './assets/images/icon-plus.svg';
                toggleIcon.alt = '+icon';
            }
            
        })
        
    })
    
})