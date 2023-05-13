//funcion de javascript para colorear las preguntas del quiz
function Red(x) {
      x.style.background="Red";
    x.style.color="White";
}
//funcion de javascript para volver a la normalidad las preguntas del quiz
function Black(x) {
    x.style.background="#f1ecec";
    x.style.color="Black";
}
//funcion de jquery para consumir la api
$("#enviar").click(function () {
  let dataPLayers;
  let header = "<tr> <th>Posición</th> <th>Nombre</th> <th>NickName</th> <th>Nacionalidad</th> <th>Foto</th> </tr>"
  $.get("https://wiki-t1-default-rtdb.firebaseio.com/.json",
    function (data) {
      $.each(data.T1, function (i, item) {
        dataPLayers += "<tr><td>" + item.carril + "</td><td>" + item.nombre + "</td><td>" + item.nick + "</td><td>" + item.pais + "</td><td><img src='" + item.foto + "' width='120px' height='100px'></td></tr>"
      });
      $("#jugadoresHeader").empty();
      $("#jugadoresHeader").append(header);
      $("#jugadores").empty();
      $("#jugadores").append(dataPLayers);
    });
});
//funcion de jquery valida las respuestas
$(document).ready(function() {
  $('#quizForm').validate({
    submitHandler: function(form) {
      var totalQuestions = 10; // Número total de preguntas
      var correctAnswers = 0; // Contador de respuestas correctas
      
      // Validar cada pregunta
      for (var i = 1; i <= totalQuestions; i++) {
        var selectedOption = $('input[name="question' + i + '"]:checked').val();
        
        if (selectedOption === 'b' && i === 1) {
          correctAnswers++;
        }
        else if (selectedOption === 'b' && i === 2) {
          correctAnswers++;
        } 
        else if (selectedOption === 'b' && i === 3) {
            correctAnswers++;
          } 
          else if (selectedOption === 'b' && i === 4) {
            correctAnswers++;
          } 
          else if (selectedOption === 'a' && i === 5) {
            correctAnswers++;
          } 
          else if (selectedOption === 'b' && i === 6) {
            correctAnswers++;
          } 
          else if (selectedOption === 'c' && i === 7) {
            correctAnswers++;
          } 
          else if (selectedOption === 'b' && i === 8) {
            correctAnswers++;
          } 
          else if (selectedOption === 'a' && i === 9) {
            correctAnswers++;
          } 
          else if (selectedOption === 'c' && i === 10) {
            correctAnswers++;
          } 

      }
      
      // Mostrar la alerta con el número de respuestas correctas
      Swal.fire('Puntos obtenidos: '+correctAnswers)
      
      form.reset(); // Reiniciar el formulario si es necesario pero obligatorio 
    }
  });
});



$(document).ready(function() {
  $('#quizForm2').validate({
    submitHandler: function(form) {
      var totalQuestions = 10; // Número total de preguntas
      var correctAnswers = 0; // Contador de respuestas correctas
      
      // Validar cada pregunta
      for (var i = 1; i <= totalQuestions; i++) {
        var selectedOption = $('input[name="question' + i + '"]:checked').val();
        
        if (selectedOption === 'c' && i === 1) {
          correctAnswers++;
        }
        else if (selectedOption === 'b' && i === 2) {
          correctAnswers++;
        } 
        else if (selectedOption === 'c' && i === 3) {
            correctAnswers++;
          } 
          else if (selectedOption === 'b' && i === 4) {
            correctAnswers++;
          } 
          else if (selectedOption === 'a' && i === 5) {
            correctAnswers++;
          } 
          else if (selectedOption === 'a' && i === 6) {
            correctAnswers++;
          } 
          else if (selectedOption === 'a' && i === 7) {
            correctAnswers++;
          } 
          else if (selectedOption === 'b' && i === 8) {
            correctAnswers++;
          } 
          else if (selectedOption === 'a' && i === 9) {
            correctAnswers++;
          } 
          else if (selectedOption === 'b' && i === 10) {
            correctAnswers++;
          } 

      }
      
      // Mostrar la alerta con el número de respuestas correctas
      Swal.fire('Puntos obtenidos: '+correctAnswers)
      
      form.reset(); // Reiniciar el formulario si es necesario pero obligatorio 
    }
  });
});


