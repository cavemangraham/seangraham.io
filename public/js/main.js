console.log("hello!");
// Word slider
var quotes = [
  "world traveler",
  "dungeon master",
  "movie buff",
  "gadget geek",
  "netflix binger",
  "rails fanboy",
  ];

  var i = 0;

  setInterval(function() {
    $("#textslide").html(quotes[i]);
      if (i == quotes.length)
         i=0;
      else
          i++;
      }, 1 * 2000);
