// use a pizza dropdown to select a pizza from database
var originalStatus= "";

$(".pizza").on("click", function(event){
    event.preventDefault();
    // set the current pizza selected for the page
    // display current pizza's id and status
    $("#pizza").text("Pizza ID: "+ $(this).last().attr("data-id"))
$.get("/api/pizza/" + $(this).last().attr("data-id"))
.then((res)=>{
    $("#pizzaId").text("Pizza ID: " + $(this).last().attr("data-id")).val($(this).last().attr("data-id"));
    switch(res.status){
        case (1):
            $("#pizzaStatus").text("Pizza Status: started");
        break;
        case (2):
            $("#pizzaStatus").text("Pizza Status: baking");
        break;
        case(3):
        $("#pizzaStatus").text("Pizza Status: boxing");
        break;
        case (4):
            $("#pizzaStatus").text("Pizza Status: delivering");
        break;
        case(5):
        $("#pizzaStatus").text("Pizza Status: completed");
            break;
        default:
            $("#pizzaStatus").text("Pizza Status: not started");

    }    
})
})

// allow the status dropdown menu to submit a status, which will update on the page
$(".status").click(function(){
    originalStatus = parseInt($(this).attr("data-stat"));
    
    switch(originalStatus){
        case (1):
            $("#pizzaStatus").text("Pizza Status: started");
        break;
        case (2):
            $("#pizzaStatus").text("Pizza Status: baking");
        break;
        case(3):
        $("#pizzaStatus").text("Pizza Status: boxing");
        break;
        case (4):
            $("#pizzaStatus").text("Pizza Status: delivering");
        break;
        case(5):
        $("#pizzaStatus").text("Pizza Status: completed");
            break;
        default:
            $("#pizzaStatus").text("Pizza Status: not started");

    }
    // update the current pizza's status in the database
    $.ajax( {
        url: "/api/pizza",
        type: "PUT",
        data: {id: $("#pizzaId").val(), status: originalStatus }
    })

})
