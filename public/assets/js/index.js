// make sure drop down options are selecting correctly
let crust ="";
let sauce ="";
let cheese ="";
let topping1 ="";
let topping2 ="";
let phone ="";


$("#submit").click(()=>{
crust = $("#crust").val()
sauce = $("#sauce").val()
cheese = $("#cheese").val()
topping1 = $("#topping1").val()
topping2 = $("#topping2").val()
phone = $("#phone").val()
console.log(crust,sauce,cheese,topping1,topping2,phone)
let newPizza = {
    crust_type: crust,
    sauce_type: sauce,
    cheese_type: cheese,
    topping1:topping1,
    topping2:topping2,
    phone_number:phone
} 
$.post("/api/pizza", newPizza)

})
// make sure the track and employee portal buttons redirect using our html routes
$("#track").click(()=>{
    $.get("/tracker");
})

// employee portal button
$("#employee").click(()=>{
    $.get("/employee_login");
})