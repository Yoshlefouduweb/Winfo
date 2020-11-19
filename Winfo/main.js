// send mail ajax
$('#send_email').click(function(e){
    e.preventDefault();
    var data = {
        email: $('#email').val(),
        name: $('#name').val(),
        commentaire: $('#commentaire').val(),
        message: $('#message').val(),
        prenom: $('#prenom').val()

    };
    $.ajax({
        url: "mail.php",
        type: 'POST',
        data: data,
        success: function(data) {
            $('#js_alert_success').css({'display' : 'block'});
            setTimeout(function(){
                $('#js_alert_success').css({'display' : 'none'});
                $('#email').val("");
                $('#name').val("");
                $('commentaire').val("");
                $('#message').val("");
                $('#prenom').val("")
            }, 3000);
        },
        error: function(data) {
            $('#js_alert_danger').css({'display' : 'block'});
            setTimeout(function(){
                $('#js_alert_danger').css({'display' : 'none'});
                $('#email').val("");
                $('#name').val("");
                $('#commentaire').val("");
                $('#prenom').val("");
                $('#message').val("")
            }, 3000);
        }
    });
});