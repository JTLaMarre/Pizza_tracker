// use a pizza dropdown to select a pizza from database
var currentPizza="";
var currentStatus= "";
$(".pizza").click(()=>{
    currentPizza = this.data-id
    // set the current pizza selected for the page
    // display current pizza's id and status
    $("#pizzaId").text("Pizza ID: "+currentPizza)
console.log(currentPizza)
$.ajax(
{
    url: "/api/pizza/"+currentPizza,
    method: GET
}
).then((res)=>{
    switch(res.status){
        case (1):
            currentStatus === "started"
        break;
        case (2):
            currentStatus === "baking"
        break;
        case(3):
            currentStatus === "boxing"
        break;
        case (4):
            currentStatus === "delivering"
        break;
        case(5):
            currentStatus === "complete"
            break;
    }
    console.log("status")
    $("pizzaStatus").text("Pizza Status: "+currentStatus)
})
})

// allow the status dropdown menu to submit a status
$(".status").click(()=>{
console.log(this.data-stat)
})
// update the current pizza's status in the database and display on this page as well
