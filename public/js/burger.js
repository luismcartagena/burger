$(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
        name: $("#burger-input").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/new", {
        type: "POST",
        data: newBurger
    }).then(
        function () {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
        }
    );
});

$(document).on("click", ".devour-btn", function (event) {
    event.preventDefault();
  
    let newId = $(this).attr("data-id");

    $.ajax("/api/burgers/" + newId, {
        type: "PUT",
        data: { devoured: 1}
      }).then(
        function() {
          // Reload the page to get the updated list
          location.reload();
        }
      );
})