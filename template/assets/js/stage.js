/*
            Stage Section: Drag & Drop
*/
var STAGE_DEFAULT_POSITION = null;

function allow_drop(element) {
    element.setAttribute("ondrop", "drop(event)");
    element.setAttribute("ondragover", "allowDrop(event)");
}

function allowDrop(event) {
    event.preventDefault();
  }

function drag(event) {
    if (!STAGE_DEFAULT_POSITION) {
        STAGE_DEFAULT_POSITION = {
            x: event.clientX,
            y: event.clientY
        }
    }
    var data = event.target.id + "," + STAGE_DEFAULT_POSITION.x + "," + STAGE_DEFAULT_POSITION.y;
    event.dataTransfer.setData("text/plain", data);
  }

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text/plain");
    var data = data.split(",");
    var element = document.getElementById(data[0]);
    var move_x = event.clientX - data[1];
    var move_y = event.clientY - data[2];
    element.style.transform = "translate(" + move_x + "px," + move_y + "px)";
}