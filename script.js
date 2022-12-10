const ratingPage = document.querySelector(".rating");
const thanksPage = document.querySelector(".thanks");
const errorMessage = document.querySelector(".error");
const ratingBox = document.querySelector(".number");
const ratings = document.querySelectorAll("button");
const submit = document.querySelector('input[type="submit"]');
const submittedRating = document.querySelector(".submittedRating");

for (let i = 0; i < ratings.length; i++) {
  ratings[i].addEventListener("focus", keyEvents);
  function keyEvents(e) {
    console.log(e.target.innerText);
    const givenRating = e.target.innerText;
    console.log(givenRating);
    submittedRating.innerText = givenRating;
  }
}

submit.addEventListener("click", runEvent);

function runEvent() {
  const num = submittedRating.innerHTML.length;
  if (num < 1) {
    errorMessage.innerText = 'Please give us a rating'
    // ratingBox.style.border = "1px solid red";
  } else {
    ratingPage.style.display = "none";
    thanksPage.style.display = "block";
  }
}
