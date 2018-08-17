// wait to attach handlers until DOM is fully loaded
$(function() {
  $(".create-burger").on("submit", function(event) {
    // preventDefault on a submit event
    event.preventDefault();

    var newBurger = {
      burger_name: $("#ca").val().trim(),  // need to change #ca to match code
      // devoured: $("[name=devoured]:checked").val().trim()
    };

    // send POST request
    $.ajax("/api/burger", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // reload page to update burgers
        location.reload();
      }
    );
  });
}