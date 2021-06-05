// Activador de jQuery - Función principal de jQuery
$(document).ready(function(){

    // Funciones de Filtrado
    $('#accesorios').click(function(){
        $('main section#sistema-filtrado article img').show();

        $('#accesorios').addClass('filtro-activo');
        $('#accesorios').removeClass('filtro-inactivo');

        $('#pulseras, #collares, #anillos').removeClass('filtro-activo');
        $('#pulseras, #collares, #anillos').addClass('filtro-inactivo');
    });

    $('#pulseras').click(function(){
        $('main section#sistema-filtrado article img').hide();
        $('main section#sistema-filtrado article img.pulseras').show();

        $('#pulseras').addClass('filtro-activo');
        $('#pulseras').removeClass('filtro-inactivo');

        $('#accesorios, #collares, #anillos').removeClass('filtro-activo');
        $('#accesorios, #teclados, #anillos').addClass('filtro-inactivo');
    });

    $('#collares').click(function(){
        $('main section#sistema-filtrado article img').hide();
        $('main section#sistema-filtrado article img.collares').show();

        $('#collares').addClass('filtro-activo');
        $('#collares').removeClass('filtro-inactivo');

        $('#accesorios, #anillos, #pulseras').removeClass('filtro-activo');
        $('#accesorios, #anillos, #pulseras').addClass('filtro-inactivo');
    });

    $('#anillos').click(function(){
        $('main section#sistema-filtrado article img').hide();
        $('main section#sistema-filtrado article img.anillos').show();

        $('#anillos').addClass('filtro-activo');
        $('#anillos').removeClass('filtro-inactivo');

        $('#accesorios, #collares, #pulseras').removeClass('filtro-activo');
        $('#accesorios, #collares, #pulseras').addClass('filtro-inactivo');
    });



    // Función de Posición fija de Filtros al hacer ScrollDown
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('main section#sistema-filtrado nav#filtros').css('position','fixed');
            $('main section#sistema-filtrado nav#filtros').css('left','0');
            $('main section#sistema-filtrado nav#filtros').css('z-index','999');
            $('main section#sistema-filtrado nav#filtros').css('top','80px');
            $('main section#sistema-filtrado nav#filtros').css('border-radius','0 0 5px 5px');
        } else {
            $('main section#sistema-filtrado nav#filtros').css('position','relative');
            $('main section#sistema-filtrado nav#filtros').css('left','0');
            $('main section#sistema-filtrado nav#filtros').css('z-index','1');
            $('main section#sistema-filtrado nav#filtros').css('top','0');
            $('main section#sistema-filtrado nav#filtros').css('border-radius','5px');
        }
    });
});