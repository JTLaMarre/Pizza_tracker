//retrieve pizza status 
let status = 0;
const getStatus = ()=>{
    $.get("/api/pizza/:id").then((res)=>{
        status = res.status
    })
}
// make sure all tracker headers and Order complete divs have  is-invisible class
const clearCard = ()=>{$(".card-header-title").addClass("is-invisible");}
// when a pizza status is true remove class is-invisible from the tracker page
const displayStatus = () => {
    // makes sure all the cards display as invisible
clearCard();
// displays status based on status number
    switch(status){
        case (1):
            $("#statedHeader").removeClass("is-invisible")
            break;
        case (2):
            $("#ovenHeader").removeClass("is-invisible")
            break;
        case (2):
            $("#boxingHeader").removeClass("is-invisible")
            break;
        case (4):
            $("#deliveryHeader").removeClass("is-invisible")
        case (5):
            $("#complete").removeClass("is-invisible")
        break;
    }
}
// set a minute timeout to refresh the page and rerun this logic
const refreshTimer = () =>{setTimeout(()=>{location.reload()},60000) }
// function to initialize when page loads
const init = () =>{
    getStatus();
    displayStatus();
    refreshTimer();
}

init();
