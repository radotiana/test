$(function () {
    //on définit le chemin du dossier contenant le fichier json
    //on utilise le fichier user.json
    var url = 'Json/user.json';

    //on utilise la fonction $.getJSON qui prend deux paramètres l'url ou le chemin d'accès à notre fichier et une fonction avec un paramètre
    var req = $.getJSON(url, function (user) {
        
        //on fait appel aux fonctions définies ci-dessous
        getInfoConnexion(user);
        getResponsable(user);
        getEtablissement(user);
        getClasse(user);
        getGroupEnseignement(user);
        
        $("#list-parent li i, #list-fonction li i, #list-etablissement li i, #list-classe li i, #list-groupEnseign li i, #list-groupEnt li i").click(function(){
            $(this).closest('li').remove();
        })
    })
})

//on récupère les infos de connexions de l'user 
//on les affiche dans le bloc avec id "info-connexion" sous forme de tableau
function getInfoConnexion(user) {

    var profil = user.type;
    var login = user.login;
    var code = user.activationCode;
    var source = user.source;
    var id = user.id;

    $("#info-connexion").append('<table><tr><td>Profil</td><td>' + profil + '</td><td class="align-right"><button id="modify-profil" class="bouton-connexion">Modifier le profil</button></td></tr><tr><td>Login</td><td>' + login + '</td><td class="align-right"><button id="change-login" class="bouton-connexion">Changer le login</button></td></tr><tr><td>Code d\'activation</td><td>' + code + '</td><td class="align-right"><button id="change-code" class="bouton-connexion">Changer le code d\'activation</button></td></tr><tr><td>Identifiant</td><td>' + id + '</td></tr><tr><td>Source</td><td>' + source + '</td></tr><tr><td>Administration</td><td>ADML (LGT Paul Martin-Amiens)</td><td class="align-right"><button id="admin" class="bouton-connexion">Retirer droit d\'ADML pour cet établissement </button></td></tr><tr><td colspan="3"><button id="send-mail" class="bouton-connexion">Envoyer un mail de réinitialisation de mot de passe <i class="material-icons">mail</i></button><input type="text" value="' + login + '@ac-versaille.fr" style="width:200px;height:30px;margin-left:15px;"></td></tr></table>')
}

//on récupère la liste des parents et on les affiches sous forme de liste
function getResponsable(user) {
    for (var i = 0; i < user.parents.length; i++) {
        if (user.parents[i] != null) {
            $("#list-parent").append('<li><span>' + user.parents[i].displayName + '</span><i class="material-icons">clear</i></li>');
        }
    }
}

//on récupère la liste des fonctions / matières et on les affiches sous forme de liste
function getFonction(user) {
    for (var i = 0; i < user.functions.length; i++) {
        if (user.functions[i] != null) {
            $("#list-fonction").append('<li><span>' + user.functions[i].name + '</span><i class="material-icons">clear</i></li>');
        }
    }
}

//on récupère la liste des établissements et on les affiches sous forme de liste
function getEtablissement(user) {
    for (var i = 0; i < user.structureNodes.length; i++) {
        if (user.structureNodes[i] != null) {
            $("#list-etablissement").append('<li><span>' + user.structureNodes[i].name + '</span><i class="material-icons">clear</i></li>');
        }
    }
}

//on récupère la liste des classes et on les affiches sous forme de liste
function getClasse(user) {

    $("#list-classe").append('<li><span>' + user.sector + '</span><i class="material-icons">clear</i></li>');
}

//on récupère la liste des groupes enseignements et on les affiches sous forme de liste
function getGroupEnseignement(user){
    for (var i = 0; i < user.functionalGroups.length; i++) {
        if (user.functionalGroups[i] != null) {
            $("#list-groupEnseign").append('<li><span>' + user.functionalGroups[i].name + '</span><i class="material-icons">clear</i></li>');
        }
    }
}

//on récupère la liste des groupes ENT et on les affiches sous forme de liste
function getGroupEnt(user){
    for (var i = 0; i < user.manualGroups.length; i++) {
        if (user.manualGroups[i].name != null) {
            $("#list-groupEnt").append('<li><span>' + user.manualGroups[i].name + '</span><i class="material-icons">clear</i></li>');
        }
    }
}
