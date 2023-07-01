
var skill = document.querySelector("#add");
      var box = document.querySelector("#mybox");
      skill.addEventListener("click", function (event) {
        var item = document.querySelector("#mine-skills").value;
        var div = document.createElement("div");
        div.className = "skill-container";
        var span = document.createElement("span");
        span.className = "skill-name";
        span.textContent = item;
        var button = document.createElement("button");
        button.className = "remove";
        button.attributes = "button";
        button.textContent = "X";
        button.addEventListener("click", function () {
          box.removeChild(div);
        });
        div.appendChild(span);
        div.appendChild(button);
        box.appendChild(div);
        document.getElementById("mine-skills").value = "";
      });