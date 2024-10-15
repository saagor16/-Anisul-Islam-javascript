for (var i = 0; i < 3; i++) {
  document
    .querySelectorAll(".myButton")[0]
    .addEventListener("click", function () {
      var text = this.innerHTML;

      switch (text) {
        case "a":
          var audio = new Audio("a.mp3");
          audio.play();
        case "b":
          var audio = new Audio("b.mp3");
          audio.play();
        case "c":
          var audio = new Audio("c.mp3");
          audio.play();
      }
    });
}
