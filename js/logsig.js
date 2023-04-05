$(document).ready(function () {
  var loggedIn = false; // Default value for login status

  $("#login-button").click(function () {
    $("#login-form").toggle("slow");
  });

  $(".message-box").hide();

  // Submit event for the login form
  $("form").submit(function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the username and password from the input fields
    var username = $("#username").val();
    var password = $("#password").val();

    // Send a POST request to the login API endpoint with the credentials
    $.ajax({
      url: "https://www.fulek.com/data/api/user/login",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify({
        username: username,
        password: password,
      }),
      success: function (response) {
        console.log("Success function called");
        console.log(response); // Check the response for error message

        if (response.statusCode === 404) {
          // Display an error message in the message box
          console.log("invalid");
          $(".message-box")
            .html("Invalid credentials!")
            .addClass("error")
            .addClass("show")
            .delay(2000)
            .fadeOut();
          $(".message-box").addClass("unsuccess").css("display", "block");
          $(".message-box")
            .addClass("red-box")
            .css("background-color", "#f55d90");
        } else {
          // Display a success message in the message box and close the login form
          console.log("valid");
          $(".message-box")
            .addClass("blue-box")
            .css("background-color", "#00adb5");
          $(".message-box")
            .html("Login successful!")
            .removeClass("error")
            .removeClass("red-box")
            .addClass("blue-box")
            .addClass("show") // Add the "show" class
            .delay(1000)
            .fadeOut(function () {
              $("form")[0].reset(); // Remove the register button
              $("#login-form").fadeOut("slow"); // Close the login form slowly
            });
          // Clear the input fields
          $(".login-navbar").remove(); // Remove the login button
          $(".signup-navbar").remove();
          // Set the login status to true
          loggedIn = true;
          // Add the logout button to the navbar
          $("#menu").append(
            '<li class="logout-navbar"><a href="#" id="logout-button" >Log out</a></li>'
          );
          $(".message-box")
            .addClass("success")
            .css("display", "block"); // Add the "success" class and set the display to "block"
          // Re-add click event listener to the login button
          $("#login-button").click(function () {
            $("#login-form").toggle("slow");
          });
        }
      },

      error: function (xhr, status, error) {
        console.log("Error function called");
        console.log(xhr);
        console.log(status);
        console.log(error);
        console.log("Invalid credentials");
        // Display an error message in the message box
        $(".message-box")
          .html("Invalid credentials!")
          .addClass("error")
          .addClass("show")
          .delay(2000)
          .fadeOut();
      },
    });
  });

 


  $(document).on("click", "#logout-button", function () {
    // Set the login status to false
    loggedIn = false;
    // Remove the logout button from the navbar
    $("#logout-button").remove();
    // Add the login and register buttons back to the navbar
    $("#menu").append('<li class="nav-item right-nav-item login-navbar"><button id="login-button">Login</button></li>');
    $("#menu").append('<li class="nav-item signup-navbar"><button class="logs">Register</button></li> ');
    // Show the login form
//$("#login-form").show();
})});