HEAD
// Dropdown Menu
c267a0b5b06d21509a37d753ef93973199500795
const toggleHeader = document.querySelector("#toggle-header")
const dropDownMenu = document.querySelector(".nav-menu")
toggleHeader.onclick = function() {
    dropDownMenu.classList.toggle("open")
}