define(["dojo/_base/declare", "dojo/domReady!"], function(declare) {
  var App;
  App = declare(null, {
    startup: function() {
      return console.log("hello world");
    }
  });
  return new App();
});

