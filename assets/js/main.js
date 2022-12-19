$(function(){


    /* alerta de correo enviado correctamente */
    $('#enviarCorreo').click(function(){
        alert('El correo fue enviado correctamente')

    })

    /* tooltip en banner y en contacto */

    $('[data-bs-toggle="tooltip"]').tooltip()


    /* toggle en card, al clickear img se esconde el texto*/


    $('.card-img-top').click(function(){

    $('.card-text').toggle()


    })

    /* al hacer doble click en los titulos de quienes somos, destacados y contacto, cambia el css */

    $('#scrollspyHeading1').on ("dblclick", function(){
        $(this).css("color","#04B4AE")


    })

    $('#scrollspyHeading2').on ("dblclick", function(){
        $(this).css("color","#04B4AE")


    })

    $('#scrollspyHeading3').on ("dblclick", function(){
        $(this).css("color","#04B4AE")


    })





})