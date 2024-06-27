window.addEventListener('orientationchange', function() {
    console.log('Orientation changed to: ' + window.orientation);
    
    if (window.orientation === 0 || window.orientation === 180) {
        // Retrato
        document.body.style.flexDirection = 'column';
    } else {
        // Paisagem
        document.body.style.flexDirection = 'row';
    }
});
