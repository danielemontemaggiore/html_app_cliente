$(document).ready(function() {
  $("#invia_richiesta").click(function(){
    var first_name = $("#first_name").val();
    var second_name = $("#second_name").val();
    var telephone = $("#telephone").val();
    var email = $("#email").val();
    var date = $("#date").val();
    var hour = $("#hour").val();
    var taglio = $("#taglio").val();
    var piega = $("#piega").val();
    var meches = $("#meches").val();
    var manicure = $("#manicure").val();
    var pedicure = $("#pedicure").val();
    var servizi_aggiuntivi = $("#servizi_aggiuntivi").val();
    var note = $("#note").val();
    var id_punto = $("#id_punto").val();
    $.ajax({
      type: "post",
      url: "http://www.i-salon.eu/prenotazione_app.asp",
      data: "first_name=" + first_name + "&last_name=" + second_name + "&telephone=" + telephone + "&email=" + email +
       "&date=" + date + "&hour=" + hour + "&taglio=" + taglio + "&piega=" + piega + "&meches=" + meches + "&manicure=" + manicure
       + "&pedicure=" + pedicure + "&servizi_aggiuntivi=" + servizi_aggiuntivi + "&note=" + note + "&id_punto=" + id_punto
         ,
      dataType: "text",
      success: function(msg)
      {
		  var elem = document.getElementById("scritta");
			elem.parentNode.removeChild(elem);
			var json = msg;
			var jsonData = JSON.parse(json);
			
			var risposta = jsonData.Risposta;

			var messaggio_errore = "Errore";

			if (risposta.localeCompare(messaggio_errore)==0) {
                $("#risultato").append('La prenotazione non è andata a buon fine.<br>La preghiamo di riprovare.');
            }
			else
			{

                $("#risultato").append('<h1>Prenotazione effettuata correttamente</h1>');
			}
      },
      error: function()
      {
		  alert("Errore");
      }
    });
  });
});