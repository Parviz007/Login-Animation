const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".logoin-link");
const registerLink = document.querySelector(".register-link");
const iconClose = document.querySelector(".icon-close");
const btnPopup = document.querySelector(".navigation-poput");



registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

btnPopup.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
});


iconClose.addEventListener("click", () => {
    wrapper.classList.remove("active-popup");
  });