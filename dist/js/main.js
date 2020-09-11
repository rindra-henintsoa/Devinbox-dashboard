
$(document).ready(function() {
    //popup deleting
    $( "#dialog-confirm" ).dialog({
        resizable: false,
        height: 550,
        width:725,
        autoOpen: false,
        modal: true,
        buttons: {
            "back to list": {
                click: function() {
                    $(this).dialog('close');
                        },
                        text: 'back to list',
                        class: 'back-btn' 
            },
            "delete": {
                    click: function () {
                        $('.remove button:selected').parent().parent().remove();
                        $(this).dialog("close");
                    },
                    text: 'delete',
                    class: 'delete-btn'
                }
          }
    });

     $(".remove").click(function() {
        $("#dialog-confirm").dialog("open");
    });

     //popup adding
    $( ".form" ).dialog({
        resizable: false,
        height:620,
        width:750,
        autoOpen: false,
        modal: true,
        buttons: {
            "soumettre": {
                click: function() {
                     //adding formular values                
                $("#dataTable>tbody:last").append("<tr><td>" + $("#Numero_client").val() + "</td><td>" 
                                                                + $("#Nom_client").val() + "</td><td>" 
                                                                + $("#Coordonnees").val() + "</td><td>"
                                                                + $("#Offres").val() + "</td><td>"
                                                                + $("#Debut").val() + "</td><td>"
                                                                + $("#fin").val() + "</td><td>"
                                                                + $("#Montant").val() + "</td><td>"
                                                                + $("#facture").val() + "</td><td>"
                                                                + $("#Note").val() +"</td></tr>");
                    $(this).dialog('close');
                        },
                        text: 'soumettre',
                        class: 'soumettre-btn',
                        type: "submit" 
            },
            "annuler": {
                    click: function () {
                        $(this).dialog("close");
                    },
                    text: 'annuler',
                    class: 'annuler-btn'
                }
          }
    }); 

    $(".add").click(function() {
        $(".form").dialog("open");
    });

    //datepicker
    $ ( "#Debut").datepicker ();

    $ ( "#fin").datepicker ();

});
