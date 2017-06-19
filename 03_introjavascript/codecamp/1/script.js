

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

  

function getUsername() {
    //recupere la valeur du cookie username
    var user = getCookie("username");

    // si le cookie est différent de la chaine de caractére vide
    if (user != "") {
    // alors on affiche le cookie dans la console du navigateur 
        console.log(user);
        // et je retourne la valeur enregistrée dans le cookie pour etre utilisé par une autre fonction
        return user;
    } else {
    // sinon je demande son nom et j'enregistre le cookie
        user = prompt("Veuillez rentrez votre nom:", "");
        if (user != "" && user != null) {
            setCookie("username", user, 365);
        }
    }
}



function welcome() {
    var name= getUsername();
   $("#welcome").html('<h4>Bienvenue '+name+', <br> soyez pret à renouveler de nouveaux défis !</h4>');
};

welcome();

function loadChallenges() {
  $.ajax(
        {url : 'https://s3.eu-central-1.amazonaws.com/spintransfer/challenge.json',
        type: 'GET',
        dataType: 'json'} 
  )
  .done(function(data) {
    showChallenge(data);
  })
  .fail(function() {
    alert( "error" );
  });
}

function showChallenge(liste) {

  var data="";

  for ( var i=0; i < liste.length; i++) {
    data+="<div class='defi'>";
    var challenge=liste[i];

    data+='<h2>'+challenge.nom+'</h2>';
    data+='<p>'+challenge.description+'</p>';
    data+='<iframe width="364" height="204" src="'+challenge.youtube+'" frameborder="0" allowfullscreen></iframe>'
    data+="</div>";
  }
  $("#defis").html(data);

}
//Charge le JSON des challenges
loadChallenges();





