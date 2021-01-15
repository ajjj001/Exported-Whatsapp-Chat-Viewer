document.getElementById("inputfile").addEventListener("change", function () {
  var fr = new FileReader();
  fr.onload = function () {
    document.getElementById("output").innerHTML = "";
    document.getElementById("nameSelect").innerHTML = "";
    $("#myModal").modal("toggle");
    var lines = fr.result.split("[");
    var names = [];
    lines.forEach((line) => {
      if (line.includes(":", line.indexOf("]"))) {
        var username = line
          .substring(line.indexOf("] ") + 1, line.indexOf(": "))
          .trim();
        if (!names.includes(username)) {
          names.push(username);
        }
      }
    });
    names = names.filter((item) => item);
    names.forEach((name) => {
      document.getElementById("nameSelect").add(new Option(name, name));
    });
    document
      .getElementById("confirmSelection")
      .addEventListener("click", function (e) {
        var e = document.getElementById("nameSelect");
        var selected_user = e.options[e.selectedIndex].value;
        document.getElementById("homepage").innerHTML = "";
        document.getElementById("output").innerHTML = "";
        $("#myModal").modal("hide");

        var i = 0;
        lines.forEach((line) => {
          var date = line
            .substring(line.indexOf("[") + 1, line.indexOf("]"))
            .trim();
          var username = line
            .substring(line.indexOf("] ") + 1, line.indexOf(": "))
            .trim();
          var message = line
            .substring(line.indexOf(": ") + 1, line.length)
            .trim();

          if (message.includes("<" && ">")) {
            message = message
              .substring(message.indexOf("<") + 1, message.indexOf(">"))
              .trim();
          }
          if (!line.includes(":", line.indexOf("]"))) {
            message = "";
          }
          if (username == selected_user && message != "") {
            var flexDiv = document.createElement("div");
            var boxDIv = document.createElement("div");
            var strong = document.createElement("strong");
            var paragraph = document.createElement("p");
            var small = document.createElement("small");

            flexDiv.id = "flexDiv" + i;
            boxDIv.id = "boxDIv" + i;
            flexDiv.className = "d-flex flex-row-reverse bd-highlight mb-3";
            boxDIv.className =
              "p-2 bd-highlight w-75 text-right myChatbox shadow-sm";
            strong.innerHTML = username;
            paragraph.innerHTML = message;
            small.innerHTML = date + '<i class="ml-1 fa fa-check-circle"></i>';

            document.getElementById("output").appendChild(flexDiv);
            document.getElementById("flexDiv" + i).appendChild(boxDIv);
            document.getElementById("boxDIv" + i).appendChild(strong);
            document.getElementById("boxDIv" + i).appendChild(paragraph);
            document.getElementById("boxDIv" + i).appendChild(small);
            i++;
          } else if (username != selected_user && message != "") {
            var flexDiv = document.createElement("div");
            var boxDIv = document.createElement("div");
            var strong = document.createElement("strong");
            var paragraph = document.createElement("p");
            var small = document.createElement("small");

            flexDiv.id = "flexDiv" + i;
            boxDIv.id = "boxDIv" + i;
            flexDiv.className = "d-flex flex-row bd-highlight mb-3";
            boxDIv.className =
              "p-2 bd-highlight w-75 text-left otherChatbox shadow-sm";
            strong.innerHTML = username;
            paragraph.innerHTML = message;
            small.innerHTML = date;

            document.getElementById("output").appendChild(flexDiv);
            document.getElementById("flexDiv" + i).appendChild(boxDIv);
            document.getElementById("boxDIv" + i).appendChild(strong);
            document.getElementById("boxDIv" + i).appendChild(paragraph);
            document.getElementById("boxDIv" + i).appendChild(small);
            i++;
          }
        });
      });
  };
  fr.readAsText(this.files[0]);
});
