function comprobar() {
    var puntuacion = 0;


    
    if (document.querySelector('input[name="q1"]:checked').value == "b") {
        puntuacion++;
    }

    if (document.querySelector('input[name="q2"]:checked').value == "b") {
        puntuacion++;
    }

    if (document.querySelector('input[name="q3"]:checked').value == "b") {
        puntuacion++;
    }

    if (document.querySelector('input[name="q4"]:checked').value == "b") {
        puntuacion++;
    }

    if (document.querySelector('input[name="q5"]:checked').value == "a") {
        puntuacion++;
    }

    if (document.querySelector('input[name="q6"]:checked').value == "b") {
        puntuacion++;
    }

    if (document.querySelector('input[name="q7"]:checked').value == "c") {
        puntuacion++;
    }

    if (document.querySelector('input[name="q8"]:checked').value == "c") {
        puntuacion++;
    }

    if (document.querySelector('input[name="q9"]:checked').value == "a") {
        puntuacion++;
    }

    if (document.querySelector('input[name="q10"]:checked').value == "b") {
        puntuacion++;
    }
    
    alert("Has obtenido: "+puntuacion+" puntos.")
;

    
}
function Red(x) {
      x.style.background="Red";
    x.style.color="White";
}

function Black(x) {
    x.style.background="#f1ecec";
    x.style.color="Black";
}

$("#enviar").click(function(){
    $.get("https://wiki-t1-default-rtdb.firebaseio.com/.json",
    function(data){
      $.each(data.T1, function(i, item){
        $("#jugadores").append(
        "<tr><td>"+item.carril+"</td><td>"+item.nombre+"</td><td>"+item.nick+"</td><td>"+item.pais+"</td><td><img src='"+item.foto+"' width='120px' height='100px'></td></tr>"
        );
      });
    });
  });