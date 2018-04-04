// Word slider
var quotes = [
  "world traveller",
  "dungeon master",
  "movie buff",
  "gadget geek",
  "netflix binger",
  "batman impersonator",
  "arrow to the knee survivor",
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
