//retrieve pizza status 
let id = 0
$("#track").click(() => {
    getStatus()
})
const getStatus = () => {
    id = $("#pId").val()
    $.get("/api/pizza/" + id)
        .then((res) => {
            $(".card-header-title").addClass("is-invisible")
            displayStatus(res.status)
        })
        
        
    }
    // when a pizza status is true remove class is-invisible from the tracker page
    const displayStatus = (status) => {
        console.log(status)
    switch(status){
        case 1 :
        $("#startedHeader").removeClass("is-invisible")
        break;
        case 2 :
        $("#ovenHeader").removeClass("is-invisible")
        break;
        case 3 :
        $("#boxingHeader").removeClass("is-invisible")
        break;
        case 4 :
        $("#deliveryHeader").removeClass("is-invisible")
        break;
        case 5 :
        $("#complete").removeClass("is-invisible")
        break;
    }
}
// refresh status button
$("#check").click(() => {
    getStatus();
    alert("Status up to date")
})


