// const submitEmp = $("#submitEmp");

$("#submitEmp").on("click", function (event) {
    let firstName = $("#first_name").val().trim();
    let lastName = $("#last_name").val().trim();
    let newPassword = $("#newPassword").val().trim();
    let confirmPassword = $("#confirmPassword").val().trim();
    event.preventDefault();
    if (!firstName || !lastName) {
        alert("Please enter your full first and last name.");
        return;
    } else if (newPassword !== confirmPassword) {
        alert("Your passwords don't match, please retype your new password.");
        $("#newPassword").val("");
        $("#confirmPassword").val("");
        return;
    } else {
        let employeeData = {
            first_name: firstName,
            last_name: lastName,
            password: newPassword,
        };
        $.post("/api/signup", employeeData)
            .then((data) => {
                // console.log(data)
                alert("Your Employee Id is: " + data.employee_id);
                window.location.replace("/employee/login")
            })
    }
});
// make sure the employee fields are selected
// firstname,lastname
// make sure the password matches confirmed password if not alert and don't submit

// make sure submit button submits the form data to the data base and creates a new Employee
