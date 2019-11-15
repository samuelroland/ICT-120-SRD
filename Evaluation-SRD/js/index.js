//Programme: Examen ICT120
//Samuel Roland
//15.11.2019

document.addEventListener("DOMContentLoaded", init)

function init() {
    //après le chargement du formulaire, déclarer les gestionnaires d'évenements et cacher les messages d'erreurs
//Tableau des 4 erreurs possible (1 erreur par champ):
    checkerror = [false, false, false, false]  //Si la valeur est true alors il n'y a pas d'erreur.
    txtFirstName.addEventListener("change", checknaming)
    txtLastName.addEventListener("change", checknaming)

    pwd1.addEventListener("change", firstpwd)
    pwd2.addEventListener("change", secondpwd)
    firstnameshort.classList.add("cache")
    lastnameshort.classList.add("cache")
    pwsshort.classList.add("cache")
    pwdiff.classList.add("cache")

    //Gérer le bouton sumbit: pour le désactiver puisqu'il n'y a pas encore de donnée insérée.
    gerersubmit()
}

function checknaming(event) {   //vérifie le champ prénom et nom pour demander minimum 2 caractères.
    obj = event.target
    //prendre le nom pour avoir le nom de la div erreur.
    nameobj = obj.name.substr(obj.name.indexOf("txt") + 3).toLowerCase() + "short"
    if (obj.value.length < 2) {
        document.getElementById(nameobj).classList.remove("cache")
        if (obj.name.indexOf("FirstName") != -1) {
            checkerror[0] = false
        } else {
            checkerror[1] = false
        }
    } else {
        document.getElementById(nameobj).classList.add("cache")
        if (obj.name.indexOf("FirstName") != -1) {
            checkerror[0] = true
        } else {
            checkerror[1] = true
        }
    }
    gerersubmit()   //actualiser l'état du bouton submit

}

function firstpwd() {   //vérifie si le mot de passe 1 a au minimum 6 caractères. Affiche les messages d'erreurs.
    if (pwd1.value.length < 6) {
        pwsshort.classList.remove("cache")
        //Faire un check du pwd 2.
        secondpwd() //puise que le premier a changé il faut aussi checker le pwd2 voir s'ils sont identiques.
        checkerror[2] = false
    } else {
        pwsshort.classList.add("cache")
        //Faire un check du pwd 2.
        secondpwd()
        checkerror[2] = true
    }
    gerersubmit()   //actualiser l'état du bouton submit
}

function secondpwd() {  //vérifie si le mot de passe 2 a au minimum 6 caractères. Affiche les messages d'erreurs.
    if (pwd2.value == pwd1.value) {
        pwdiff.classList.add("cache")
        checkerror[3] = true
    } else {
        pwdiff.classList.remove("cache")
        checkerror[3] = false
    }
    gerersubmit()   //actualiser l'état du bouton submit
}

function gerersubmit() {
    nbserrors = 0   //initialise le nombre d'erreurs.
    for (i = 0; i < 4; i++) {
        if (checkerror[i] == false) {   //si il y a une erreur sur le champ i
            nbserrors++;    //rajoute une erreur
        }

    }
    if (nbserrors > 0) {    //si il y a des erreurs on le désactive
        submit.disabled = true
    } else {    //si il n'y a pas d'erreurs, le formulaire est correct on active le bouton.
        submit.disabled = false
    }

}