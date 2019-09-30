//Exo 1:
div1.addEventListener("click", makeblue)

function makeblue() {

    div1.classList.add('stdiv1')
}

div2.addEventListener("click", deletestyle)

function deletestyle() {
    div1.classList.remove('stdiv1')
}

div3.addEventListener("mouseover", makearial)

function makearial() {
    div3.style.fontFamily = "Arial"
}

div3.addEventListener("mouseout", makenormal)

function makenormal() {
    div3.style.fontFamily = body.style.fontFamily

}