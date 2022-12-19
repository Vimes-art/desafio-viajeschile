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









})