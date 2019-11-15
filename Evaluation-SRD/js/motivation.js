//Programme: Examen ICT120
//Samuel Roland
//15.11.2019


document.addEventListener("DOMContentLoaded", init)

function init() {
    //après le chargement du formulaire, déclarer les gestionnaires d'évenements et cacher les messages d'erreurs

    //Changer le texte du Bonjour
    data = window.location.search
    //Extraire le nom et le prénom de la chaine.
    firstnamespan.innerHTML = data.substring(data.indexOf("=") + 1, data.indexOf("&"))
    lastnamespan.innerHTML = data.substring(data.lastIndexOf("=") + 1)

    txtarea.addEventListener("keyup", checktxtarea)
    charsrestants.classList.add("cache")
    submit.classList.add("cache")
}

function checktxtarea() {   //vérifie le contenu de la zone de texte
    if (txtarea.value.length < 30) {
        tooshortdesc.classList.remove("cache")
        charsrestants.classList.add("cache")
        submit.classList.add("cache")
    } else {
        tooshortdesc.classList.add("cache")
        charsrestants.classList.remove("cache")
        submit.classList.remove("cache")
        //Afficher le nombre de caractères restants.
        nbchars = 144 - txtarea.value.length
        if (nbchars < 0) {
            nbchars = 0;
        }
        charsrestants.innerHTML = "Il vous reste " + nbchars + " caractères"

    }

}