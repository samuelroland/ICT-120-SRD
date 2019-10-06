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

function detruirediv() {
    div51.style.display = "none"
}

//Exo 6:

//ajouter levenement keyup (quand une touche remonte):
inpName.addEventListener("keyup", createinitials)

function createinitials() {
    //Permet de générer les initiales au format CPNV = Première lettre du prénom + Première lettre du nom + Dernière lettre du nom.

    //prendre le premier caractère pour la première lettre des initiales.
    initials = inpName.value.substring(0, 1)
    if (inpName.value.indexOf(" ") != -1) {    //si il y a un espace alors on peut calculer la suite des lettres:
        //prendre la première lettre après l'espace pour avoir la deuxieme lettre des initiales
        initials += inpName.value.substring(inpName.value.indexOf(" ") + 1, inpName.value.indexOf(" ") + 2)

        if (inpName.value.indexOf(" ") + 2 < inpName.value.length) { //si il y a deux caractères après l'espace:
            initials += inpName.value.substring(inpName.value.length - 1, inpName.value.length)   //ajouter 3eme lettre.
        }
    }
    initials = initials.toUpperCase()   //Mettre la chaine en majuscule
    inpInitials.value = initials    //afficher dans la textbox.
}