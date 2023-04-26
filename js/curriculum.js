$(document).ready(function () {
  var token = sessionStorage.getItem("token");
  console.log(token);

  $.ajax({
    type: "GET",
    url: "https://www.fulek.com/data/api/supit/curriculum-list/en",
    data: "data",
    dataType: "dataType",
    success: function (response) {},
  });
});
