const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
    const icon = question.querySelector('img');

    question.addEventListener('click', () => {

        // Close all other questions
        questions.forEach((item) => {
            if (item !== question) {
                item.classList.remove('active');
                item.querySelector('img').src = './assets/images/icon-plus.svg';
            }
        });

        // Toggle current question
        question.classList.toggle('active');

        // Change icon
        if (question.classList.contains('active')) {
            icon.src = './assets/images/icon-minus.svg';
        } else {
            icon.src = './assets/images/icon-plus.svg';
        }
    });
});

