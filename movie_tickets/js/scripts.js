function Ticket(movieName, movieTime) {
  this.movieName = movieName;
  this.movieTime = movieTime;
}

Ticket.prototype.cost = function() {
  var inputtedMovieTime = $("select#movie-time").val();
  var inputtedCustomerAge = parseInt($("input#customer-age").val());
  var baseCost = 10;
  var finalCost = 0;
  if (inputtedMovieTime === "matinee") {
    finalCost = baseCost - 3;
  } else {
    finalCost = baseCost + 3;
  }
  if (inputtedCustomerAge > 55) {
    finalCost -= 3;
    return finalCost;
  } else if (inputtedCustomerAge < 18) {
    finalCost -= 4;
    return finalCost;
  } else {
    finalCost +=1;
    return finalCost;
  }
}

$(document).ready(function() {
  $("form#movies-form").submit(function(event){
  event.preventDefault();
  var inputtedMovieName = $(this).find("select#movie-name").val();
  var inputtedMovieTime = $(this).find("select#movie-time").val();
  var inputtedCustomerAge = $(this).find("input#customer-age").val();
  var newTicket = new Ticket(inputtedMovieName, inputtedMovieTime);
  newTicket.price = newTicket.cost();
  $("div#ticket").remove();
  $("div.container").append("<div id='ticket'>" + "<p>Movie Name:  " +
                            newTicket.movieName + "</p>" +
                            "<p>Movie Time:  " + newTicket.movieTime + "</p>" +
                            "<p>Movie Price:  $" + newTicket.price + "</p>" +
                            "</div>");
  });

});
