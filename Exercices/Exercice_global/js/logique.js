//Exo 1:
div1.addEventListener("click", makeblue)

function makeblue() {

    div1.classList.add('stdiv1')
}
//Exo 2:
div2.addEventListener("click", deletestyle)

function deletestyle() {
    div1.classList.remove('stdiv1')
}
//Exo 3:
div3.addEventListener("mouseover", makearial)

function makearial() {
    div3.style.fontFamily = "Arial"
}

div3.addEventListener("mouseout", makenormal)

function makenormal() {
    div3.style.fontFamily = body.style.fontFamily
}
//Exo 4:
chk41.addEventListener("click", yesmake)
chk42.addEventListener("click", yesmake)


function yesmake() {
    if (chk41.checked == true && chk42.checked == true) {
        div4.innerHTML = "YES"
        div4.classList.add("stdiv4")
    }
}

//Exo 5:
div50.addEventListener("click", detruirediv)

function detruirediv(){
    div51.style.display = "none"
}

