// selecting our elements
const openBtns = document.querySelectorAll(".open-Close-Btn");
const collapWraps = document.querySelectorAll(".collap-Wrap");

// our functions
const openHandler = (e) => {
  // getting target button
  const btn = e.currentTarget;
  // getting parrents of button
  const collapWrap = btn.parentElement.parentElement;
  const iEl = btn.querySelector("i");

  // if contains that class or not
  if (!collapWrap.classList.contains("active")) {
    collapWrap.classList.add("active");
    iEl.classList.replace("fa-caret-down", "fa-xmark");
    btn;
  } else {
    collapWrap.classList.remove("active");
    iEl.classList.replace("fa-xmark", "fa-caret-down");
  }
};

// our event listeners
openBtns.forEach((btn) => {
  btn.addEventListener("click", openHandler);
});
