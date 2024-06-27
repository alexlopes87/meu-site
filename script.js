window.addEventListener('orientationchange', function() {
    // Execute qualquer lógica específica que você precise ao mudar a orientação
    console.log('Orientation changed to: ' + window.orientation);
    
    // Exemplo: Ajustar alguma propriedade CSS
    if (window.orientation === 0 || window.orientation === 180) {
        // Retrato
        document.body.style.flexDirection = 'column';
    } else {
        // Paisagem
        document.body.style.flexDirection = 'row';
    }
});
