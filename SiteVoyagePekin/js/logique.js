/*
Projet: code Javascript du site du voyage à Pékin page participants uniquement
Auteur: Samuel Roland
Date: octobre-novembre 2019
*/

document.addEventListener("DOMContentLoaded", init)

function init() {

    //Définition de tous les évenements, après le chargement de la page:

    prenom.addEventListener("click", prenomclick)
    nom.addEventListener("click", prenomclick)
    age.addEventListener("click", prenomclick)

    chkPrenom.addEventListener("click", chkclick)
    chkNom.addEventListener("click", chkclick)
    chkAge.addEventListener("click", chkclick)
    chkAcro.addEventListener("click", chkclick)
    chkIntra.addEventListener("click", chkclick)
    chkSelect.addEventListener("click", chkclick)

    bnactiveredition.addEventListener("click", activeedition)

    bnnewrow.addEventListener("click", newrow)
    bnSave.addEventListener("click", save)
    bnDelete.addEventListener("click", deleteline)
    bnEmail.addEventListener("click", sendemail)

    tableau.addEventListener("click", popoveropen)

    //Désactivation des boutons:
    bnDelete.disabled = true
    bnCancel.disabled = true

}

//constantes valeurs chars spéciaux:
const flhautbas = "&varr;"
const flhaut = "&uarr;"
const flbas = "&darr;"
active = false
const nbcolumns = 6
intrapathstudent = "https://intranet.cpnv.ch/etudiants/"

nberrorsofdata = 0

function newrow() {
    zonecols = document.getElementsByTagName("tbody")[0]
    row = document.createElement("tr")

    zonecols.appendChild(row)
    for (i = 0; i < tableau.rows[0].cells.length; i++) {
        cell = document.createElement("td")
        cell.id = i + ":" + tableau.rows.length
        row.appendChild(cell)
        cell.innerText = ""
        cell.style.height = 10

        //si c'est cellule dans la colonne age, on ajoute la classe Age:
        if (i === 0) {
            cell.classList.add("prenom")
        }
        //si c'est cellule dans la colonne age, on ajoute la classe Age:
        if (i === 1) {
            cell.classList.add("nom")
        }
        //si c'est cellule dans la colonne age, on ajoute la classe Age:
        if (i === 2) {
            cell.classList.add("age")
        }
        //si c'est cellule dans la colonne age, on ajoute la classe Age:
        if (i === 3) {
            cell.classList.add("acro")
        }
        //si c'est cellule dans la colonne age, on ajoute la classe Age:
        if (i === 4) {
            cell.classList.add("intra")
        }
        //si c'est cellule dans la colonne age, on ajoute la classe Age:
        if (i === 5) {
            cell.classList.add("select")

            //Ecraser par une checkbox
            cell.innerHTML = ""
            inp = document.createElement("input")
            inp.type = "checkbox"
            cell.appendChild(inp)
        }
    }

    if (active == true) {
        activeedition()
    }

}

function activeedition() {
    active = true
    bnactiveredition.disabled = true
    bnSave.disabled = false
    bnCancel.disabled = false
    tds = tableau.getElementsByTagName("td")
    tableau.classList.remove("table", "table-hover", "table-bordered", "table-striped")
    bnDelete.disabled = false
    infoedit.classList.remove("d-none")

    for (nbline = 0; nbline < cortable.children.length; nbline++) {
        row = cortable.children[nbline]    //prend la colonne row avec chaque enfant.
        for (nbcol = 0; nbcol < nbcolumns; nbcol++) {
            cell = row.children[nbcol]
            //si la colonne est autre Prénom, que Nom ou Age. On ne doit pas pouvoir modifier Acronyme intranet et sélection.
            if (nbcol < tableau.rows[0].cells.length - 3) {
                if (cell.firstElementChild == null) {
                    inp = document.createElement("input")
                    inp.type = "text"
                    inp.value = cell.innerText
                    cell.innerText = ""
                    cell.appendChild(inp)
                }

                //Evenement change pour vérifier le contenu des input:
                inp.addEventListener("change", checkcontent)

                //Bordure verte pour dire que c'est modifiable.
                cell.classList.add("changepossible")
            }
        }
    }
}

function save() {
    active = false
    bnactiveredition.disabled = false
    bnSave.disabled = true
    bnDelete.disabled = true
    bnCancel.disabled = true
    infoedit.classList.add("d-none")
    tableau.classList.add("table", "table-hover", "table-bordered", "table-striped")
    //enlever la bordure verte car on ne modifie plus.
    cell.classList.remove("changepossible")

    for (nbline = 0; nbline < cortable.children.length; nbline++) {
        row = cortable.children[nbline]    //prend la colonne row avec chaque enfant.
        for (nbcol = 0; nbcol < nbcolumns; nbcol++) {

            if (nbcol < tableau.rows[0].cells.length - 3) {   //seulement si ne fait pas partie des 3 dernières colonnes.
                cell = row.children[nbcol]  //cell devient la cellule en cours.
                cell.innerHTML = cell.firstChild.value  //on remplace son contenu par la value de son enfant input
            }
        }
    }
}

function chkclick(event) {
    obj = event.target
    //prendre le nom de la classe en enlever le chk de l
    colclass = obj.name.substr(obj.name.indexOf("chk") + 3).toLowerCase()
    console.log(colclass)

    if (obj.checked === false) {
        for (nbline = 0; nbline < cortable.children.length; nbline++) {
            row = cortable.children[nbline]    //prend la ligne row avec chaque enfant de tbody = cortable
            for (nbcol = 0; nbcol < nbcolumns; nbcol++) {
                cell = row.children[nbcol]
                if (cell.classList.contains(colclass)) {
                    cell.classList.add("d-none")
                }

            }
        }
        //Recherche dans l'en-tete:
        for (k = 0; k < nbcolumns; k++) {
            th = thead.children[0].children[k]
            console.log(th.innerHTML)
            //si contient la classe de la colonne qu'on veut cacher
            if (th.classList.contains(colclass)) {
                th.classList.add("d-none")  //cache la colonne
            }
        }
    } else {
        for (nbline = 0; nbline < cortable.children.length; nbline++) {
            row = cortable.children[nbline]    //prend la colonne row avec chaque enfant.
            for (nbcol = 0; nbcol < nbcolumns; nbcol++) {
                cell = row.children[nbcol]
                if (cell.classList.contains(colclass)) {

                    cell.classList.remove("d-none")
                } else {

                }
            }
        }
        for (k = 0; k < nbcolumns; k++) {
            //th = th dans l'en-tete.
            th = thead.children[0].children[k]
            //si contient la classe de la colonne qu'on veut montrer
            if (th.classList.contains(colclass)) {
                th.classList.remove("d-none")   //montre la colonne
            }
        }
    }

}

candelete = false

function deleteline() {
    listuser = ""
    for (nbline = 0; nbline < cortable.children.length; nbline++) {
        row = cortable.children[nbline]    //prend la colonne row avec chaque enfant.
        cell = row.children[nbcolumns - 1]
        console.log(cell.id)
        inp = cell.firstChild
        if (inp.type == "checkbox") {
            if (inp.checked == true) {
                td = inp.parentNode
                tr = td.parentNode
                listuser += tr.children[0].firstChild.value + " " + tr.children[1].firstChild.value + "\n"
                tbody = tr.parentNode
                //Supprimer la ligne en prenant le arrière grand parent.

            }
        }

    }
    reponse = prompt("Voulez vous supprimer les personnes suivantes (oui ou non) ?\n" + listuser)
    reponse = reponse.toLowerCase()
    if (reponse == "oui") {
        candelete = true
    } else {
        candelete = false
    }
    for (nbline = 0; nbline < cortable.children.length; nbline++) {
        row = cortable.children[nbline]    //prend la colonne row avec chaque enfant.
        cell = row.children[nbcolumns - 1]
        console.log(cell.id)
        inp = cell.firstChild
        if (inp.type == "checkbox") {
            if (inp.checked == true) {
                //Supprimer la ligne en prenant le arrière grand parent.
                td = inp.parentNode
                tr = td.parentNode
                tbody = tr.parentNode
                if (candelete == true) {
                    tbody.removeChild(tr)
                    nbline -= 1  //il retourne à la ligne d'avant sinon il va louper la ligne qui a remplacé cette qu'il vient de supprimer.
                }
            }
        }


    }
}

function sendemail() {
    adresses = tableau.rows[1].cells[0].value + "." + tableau.rows[1].cells[1].value + "@cpnv.ch"
    //si des cases sont cochées dans le tableau
    window.location.href = "mailto:" + adresses + "?subject=Voyage du CPNV à Pékin"
}

function prenomclick(event) {

    obj = event.target //prendre l'objet qui a déclenché l'évenement.
    //obj.innerHTML = obj.innerHTML.substring(0, obj.innerHTML.indexOf(" ") + 1)
    //Ajouter flèche hautbas, haut, bas.

    if (obj.innerHTML.includes(flbas)) {
        obj.innerHTML = obj.innerHTML.substring(0, obj.innerHTML.indexOf(" ") + 1)
        obj.innerHTML += flhautbas

    }
    if (obj.innerHTML.includes(flhaut)) {
        obj.innerHTML = obj.innerHTML.substring(0, obj.innerHTML.indexOf(" ") + 1)
        obj.innerHTML += flbas
    }
    if (obj.innerHTML.includes(flhautbas)) {
        obj.innerHTML = obj.innerHTML.substring(0, obj.innerHTML.indexOf(" ") + 1)
        obj.innerHTML += flhaut
    }

}

function checkcontent(event) {  //Vérifier le contenu des champs input + générer acronyme et page intranet.
    inpsource = event.target

    //Enlever les espaces au début et à la fin et aussi si il y a un espace seul. sera donc vide.
    inpsource.value = inpsource.value.trim()
    row = inpsource.parentNode.parentNode
    listeclasses = inpsource.classList.toString()

    if (inpsource.parentNode.classList.toString().indexOf("age") != -1) { //si c'est le champ input age
        if (inpsource.value != "") {  //regarder sa valeur seulement si il y a une valeur:
            if (isNaN(inpsource.value.toString()) == true) {    //vérifier si c'est un nombre
                if (listeclasses.indexOf("notaninteger") == -1) {//si il n'y a pas déjà la classe
                    inpsource.classList.add("notaninteger")
                    console.log("mis sur not an integer")
                    nberrorsofdata++
                }

            } else {
                if (listeclasses.indexOf("notaninteger") != -1) {  //si il a la classe donc que c'était faux juste avant.
                    inpsource.classList.remove("notaninteger")
                    nberrorsofdata--
                    console.log("enlevé sur not an integer")
                }
                //il faut encore mettre un age positif, alors on remplace par sa valeur absolue
                inpsource.value = Math.abs(inpsource.value)
            }
        }

    }
    //Si c'est vide, on ajoute la classe qui met en jaune emptycell:
    if (inpsource.value == "") {    //si c'est vide afficher comme manquant.

        if (listeclasses.indexOf("emptycell") == -1) {//si il n'y a pas déjà la classe
            inpsource.classList.add("emptycell")
            nberrorsofdata++
        }

    } else {

        if (listeclasses.indexOf("emptycell") != -1) {
            inpsource.classList.remove("emptycell")
            nberrorsofdata--
            console.log("enlevé emptycell")
        }

    }

    //Générer l'acronyme sur cette ligne.
    //Prendre les deux input prénom et nom
    inpprenom = row.children[0].firstChild
    inpnom = row.children[1].firstChild

    //Afficher le nombre d'erreurs restantes:
    if (nberrorsofdata != 0) {
        infoerreurdata.innerText = nberrorsofdata + " erreur(s) à corriger"

    } else {
        infoerreurdata.innerText = ""
    }

    if (inpprenom.value != "" && inpnom.value != "") {    //si nom est prénom sont remplis
        //Prendre les 3 lettres pour former les initiales. première du prénom + première et dernière du nom
        initials = inpprenom.value.substr(0, 1) + inpnom.value.substr(0, 1) + inpnom.value.substr(inpnom.value.length - 1, 1)
        initials = initials.toUpperCase()   //mettre les lettres en majuscules


        //Générer la page intranet de l'éleve:
        linkstring = intrapathstudent + inpprenom.value + "_" + inpnom.value
        link = document.createElement("a")
        link.innerText = "Lien"
        link.href = linkstring
        row.children[4].innerHTML = ""
        row.children[4].appendChild(link)

    } else {
        //Sinon si il manque un champ, alors on vide initials.
        initials = ""

        //Supprimer le lien de la page intranet:
        row.children[4].innerHTML = ""

    }
    //On met initials dans la case 3 acronyme
    row.children[3].innerHTML = initials


}

function popoveropen() {

}

var nbslinetbl
var nbscolstbl

function updateinfostable() {
    nbslinetbl = tableau.rows.length
    nbscolstbl = tableau.rows[0].cells.length
}