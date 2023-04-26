$(document).ready(function () {
  var token = sessionStorage.getItem("token");
  var username = sessionStorage.getItem("username");

  // Store token and username in cookies
  document.cookie =
    "token=" + token + "; expires=Thu, 1 Jan 2099 12:00:00 UTC; path=/;";
  document.cookie =
    "username=" + username + "; expires=Thu, 1 Jan 2099 12:00:00 UTC; path=/;";
  console.log(token);

  $.ajax({
    type: "GET",
    url: "https://www.fulek.com/data/api/supit/curriculum-list/en",
    data: "data",
    dataType: "dataType",
    success: function (response) {},
  });
});
