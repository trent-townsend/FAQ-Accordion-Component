const questionArray = document.querySelectorAll(".question");

questionArray.forEach((question) => {
  question.addEventListener("click", () => {
    if (question.classList.contains("open")) {
      question.classList.remove("open");
      question.nextElementSibling.classList.add("hidden");
    } else {
      question.classList.add("open");
      question.nextElementSibling.classList.remove("hidden");
    }
  });
});
