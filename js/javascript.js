(function(){
  // assign variables to the zoom in and zoom out buttons
  var zoomIn = document.getElementById("btnZoomIn"),
    zoomOut = document.getElementById("btnZoomOut"),
    pictureCanvas = document.getElementById("pix");

    var zoomPicture = function(zoomBy) {
      

      pictureCanvas.style.zoom = zoomBy;
    }

  eventUtility.addEvent(document, "click", zoomPicture(2));
}());