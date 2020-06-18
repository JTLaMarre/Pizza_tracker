const submitEmp = $("#submitEmp");
const firstName = $("#first_name").val().trim()
const lastName = $("#last_name").val().trim()
const newPassword = $("newPassword").val().trim()
const confirmPassword = $("confirmPassword").val().trim()

submitEmp.on("submit", function(event) {
    event.preventDefault();
        if (!firstName || !lastName) {
            alert("Please enter your full first and last name.")
            return
        } else if (newPassword !== confirmPassword) {
            alert("Your passwords don't match, please retype your new password.")
            newPassword = "";
            confirmPassword ="";
            return
        }
    let employeeData = {
        first_name: firstName,
        last_name: lastName,
        password: newPassword
    };
    $.post("/api/signup", employeeData)
        .then(data => window.location.replace("/employee/pizza_status"))
})

