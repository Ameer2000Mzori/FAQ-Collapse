// selecting our elements
var openBtns = document.querySelectorAll(".open-Close-Btn");
var collapWraps = document.querySelectorAll(".collap-Wrap");
// our functions
var openHandler = function (e) {
    // getting target button
    var btn = e.currentTarget;
    // getting parrents of button
    var collapWrap = btn.parentElement.parentElement;
    var iEl = btn.querySelector("i");
    // if contains that class or not
    if (!collapWrap.classList.contains("active")) {
        collapWrap.classList.add("active");
        iEl.classList.replace("fa-caret-down", "fa-xmark");
        btn;
    }
    else {
        collapWrap.classList.remove("active");
        iEl.classList.replace("fa-xmark", "fa-caret-down");
    }
};
// our event listeners
openBtns.forEach(function (btn) {
    btn.addEventListener("click", openHandler);
});
