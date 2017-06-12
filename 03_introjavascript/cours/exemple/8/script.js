
$( document ).ready(function() {

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}


  var cptClickMer = parseInt(getCookie("userclick-mer"));
  var cptClickMontagne = parseInt(getCookie("userclick-montagne"));

  alert("Mer:"+cptClickMer+" Montagne:"+cptClickMontagne );


  if (cptClickMer > cptClickMontagne ){
    $(".background--cover").css("background-image","url('visuels/mer/1.jpg')");
  }else{
    $(".background--cover").css("background-image","url('visuels/montagne/1.jpg')");
  }

  if (cptClickMer === "") {
    setCookie("userclick-mer", 0, 365);
  }

  if (cptClickMontagne === "") {
    setCookie("userclick-montagne", 0, 365);
  }


$('#tracking-click-mer').click(function(){
   var cptClickMer = parseInt(getCookie("userclick-mer"));
   setCookie("userclick-mer",cptClickMer+1, 365);
});

$('#tracking-click-montagne').click(function(){
   var cptClickMontagne = parseInt(getCookie("userclick-montagne"));
   setCookie("userclick-montagne",cptClickMontagne+1, 365);
});


});

