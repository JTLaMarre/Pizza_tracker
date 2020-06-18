//  uses the info from inside the employee id and password input areas

// the submit buttton submits the form data and then redirects to the pizzaManage page 
// this should use the passport auth routes in the api routes
$(document).ready(function() {
    var loginForm = $("form.login");
    var empIDInput = $("input#id-input");
    var passwordInput = $("input#password-input");

    loginForm.on("submit", function(event) {
        event.preventDefault();

        var employeeData = {
            employee_id: empIDInput.val().trim(),
            password: passwordInput.val().trim()
        };

        if (!employeeData.employee_id || !employeeData.password)
            return;

        loginEmployee(employeeData.employee_id, employeeData.password);
        empIDInput.val("");
        passwordInput.val("");
    });

    function loginEmployee(employee_id, password) {
        $.post("/api/login", {
            employee_id: employee_id,
            password: password
        }).then(function() {
            window.location.replace("/employee/pizza_status");
        }).catch(function(err) {
            console.log(err);
        });
    }
});