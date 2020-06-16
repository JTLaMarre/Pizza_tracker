//retrieve pizza status 

// make sure all tracker headers and Order complete divs have  is-invisible class
$(".card-header-title").addClass("is-invisible");
// when a pizza status is true remove class is-invisible from the tracker page

// set a minute timeout to refresh the page and rerun this logic
setTimeout(()=>{location.reload()},60000)