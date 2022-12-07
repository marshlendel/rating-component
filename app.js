const form = document.querySelector("form");
const ratingButtons = document.querySelectorAll(".rating-btn");
const submitButton = document.querySelector("#submit");
const ratings = document.querySelector(".ratings");
const star = document.querySelector("#star");
const heading = document.querySelector("h1");
const paragraph = document.querySelector("p");

const rate = (e) => {
  e.preventDefault();
  ratingButtons.forEach((button) =>
    button.classList.contains("active")
      ? button.classList.remove("active")
      : null
  );
  e.target.classList.toggle("active");
};

const submitted = (rating) => {
  ratings.classList.add("remove");
  submitButton.classList.add("remove");
  star.classList.add("remove");
  form.classList.add("rating-width");
  heading.textContent = "Thank you!";
  paragraph.innerText = `We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!`;
  heading.classList.add("center");
  paragraph.classList.add("center");

  const ratingText = document.createElement("p");
  ratingText.innerText = `You selected ${rating} out of 5`;
  ratingText.classList.add("rating");
  form.prepend(ratingText);

  const imageContainer = document.createElement("div");

  const submitImage = document.createElement("img");
  submitImage.src = "./images/illustration-thank-you.svg";
  submitImage.ariaHidden = "true";
  submitImage.classList.add("center");
  imageContainer.appendChild(submitImage);
  imageContainer.classList.add("submit-image");
  imageContainer.classList.add("center");
  form.prepend(imageContainer);
};

const submit = (e) => {
  e.preventDefault();
  ratingButtons.forEach((button, index) => {
    button.classList.contains("active") ? submitted(index + 1) : null;
  });
};

form.addEventListener("submit", submit);

ratingButtons.forEach((button) => {
  button.addEventListener("click", rate);
});
