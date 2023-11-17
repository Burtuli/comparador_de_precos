 
var caixaTexto = document.getElementById('texto');


caixaTexto.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
     
        var textoDigitado = caixaTexto.value;
        
      
        window.location.href = 'outra_pagina.html?texto=' + textoDigitado;
    }
});
