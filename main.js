// Get the container element
// var btnContainer = document.getElementById("myDIV")

// Get all buttons with class="btn" inside the container
// const btns = btnContainer.querySelectorAll("btn")
const btns = document.querySelectorAll(".main-nav__main-list__item__a")

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        const current = document.querySelector("active")
        current[0].className = current[0].className.replace(" active", "")
        this.className += " active"
    })
}
