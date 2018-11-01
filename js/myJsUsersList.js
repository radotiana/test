$(function () {
    //on définit le chemin du dossier contenant le fichier json
    //on utilise le fichier users-list.json
    var url = 'Json/users-list.json';

    //on utilise la fonction $.getJSON qui prend deux paramètres l'url ou le chemin d'accès à notre fichier et une fonction avec un paramètre
    var req = $.getJSON(url, function (user) {
        //on accède à notre objet 
        var usersList = user.users;

        //on fait une boucle pour afficher les propriétés displayName et type de notre objet dans des listes <li>
        for (var i = 0; i < usersList.length; i++) {
            $("#user-list").append('<li' + ' value = ' + usersList[i].id + '>' + usersList[i].displayName + " - " + usersList[i].type + '</li>');
        }
        
        //on gère l'évènement click sur un des utilisateurs dans la liste
        //on fait appel à la fonction getInfoAdmin qui affiche les infos dans un formulaire
        $("#user-list li").click(function () {
            var id = $(this).attr('value');
            getInfoAdmin(id, usersList);
        })

    })

    //initialisation de l'input date dans le formulaire du bloc info-admin
    $("#idNaissance").datepicker({
        altFormat: "yy-mm-dd"
    });

    //programme pour rechercher dans la liste
    //à chaque saisi dans la barre de recherche on trie les listes à afficher
    $("#search-user").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#user-list li").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

})

//on récupère les infos de chaque utilisateur 
//on les affiches dans un formulaire
function getInfoAdmin(val, usersList) {
    for (var b = 0; b < usersList.length; b++) {
        if (usersList[b].id == val) {
            var userSelect = usersList[b];
        }
    }
    var prenom = userSelect.firstName;
    var nom = userSelect.lastName
    var displayName = userSelect.displayName;
    var mail = userSelect.login + "@ac-versaille.fr";
    if (userSelect.classes[0].name != undefined) {
        var classe = userSelect.classes[0].name;
        classe = classe[0] + "ème " + classe[1];
    } else
        classe = 'inconnu';

    var adresse = userSelect.adress;
    var ville = userSelect.city;
    var pays = userSelect.country;
    var cdp = userSelect.postal;
    var birth = userSelect.birthday;

    $(".info-user").empty();
    $(".info-user").append('<h2>' + displayName + ' - ' + classe + '</h2><i class="material-icons">clear</i>');

    $("#idPrenom").val(prenom);
    $("#idNom").val(nom);
    $("#idAffichage").val(displayName);
    $("#idMail").val(mail);

    if (ville == undefined) {
        ville = "inconnu";
    }
    $("#idVille").val(ville);

    if (adresse == undefined) {
        adresse = "inconnu";
    }
    $("#idAdresse").val(adresse);

    if (pays == undefined) {
        pays = "inconnu";
    }
    $("#idPays").val(pays);

    if (birth == undefined) {
        birth = "inconnu";
    }
    $("#idNaissance").val(birth);

    if (cdp == undefined) {
        cdp = '0';
    }
    $("#idCp").val(cdp);
}
