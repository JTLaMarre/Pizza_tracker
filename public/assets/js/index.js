// make sure drop down options are selecting correctly
function myFunction(crust) {
   var x = document.getElementById("crustType").value;
   document.getElementById("crustType").innerHTML = x;
   
    if (crust === "Thin crust") {
        setCrustType("Thin crust");
    }else if (crust === "Pan") {
        setCrustType("Pan");
    }else if (crust === "Traditional") {
        setCrustType("Traditional");
    }else if (crust === "Deep Dish") {
        setCrustType("Deep dish");
    }
  console.log(crust)
}
myFunction()
// make sure special request is working correctly

// make sure submit button takes the info from the dropdowns and special request

// make sure the trach and employee portal buttons redirect using our html routes

