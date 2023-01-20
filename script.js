const questionArray = document.querySelectorAll('.question');

questionArray.forEach(question => {
    question.addEventListener("click", () => {
        question.classList.add("open");
        question.nextElementSibling.classList.remove('hidden')
     })
});