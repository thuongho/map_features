// Zoom features using panzoom
$('#imageContainer').panzoom({
  $zoomIn: $(".zoom-in"),
  $zoomOut: $(".zoom-out"),
  $zoomRange: $(".zoom-range")
});

// code to make the active div move to the front
// code from http://www.codingforums.com/javascript-programming/260289-bring-div-element-front-click.html
var moveToFront = function(){
  // create an array to hold the (buildings, streets, landmarks) element's id
  var ids=[],
  // grab all the divs (each icon) and put it into thedivs
  thedivs = document.getElementById("imageContainer").getElementsByTagName("div");

  for (var i = 0; i < thedivs.length; i++) {

    // add the id of each div to the ids array
    ids.push(thedivs[i].id);

    thedivs[i].onclick = function() {

      for (var a = 0; a < ids.length; a++) {
        if (this.id == ids[a]) {
          // take current id that matches the selected id and move it to the end
          ids.push(ids.splice(a,1));
        }
        document.getElementById(ids[a]).style.zIndex=a;     
      }
    }
  }
};

// counter for newly created divs
  var divCounter = 0;


  // cloning divs onto canvas
  // **** streets ****
  // road1
  $('#icons').on("click",".street1", function(){
    divCounter++;
    alert(divCounter);
    $("<div class='house' id='street" + divCounter + "' style='width:40px;height:40px;border:1px solid black;'><img src='images/road1.svg' alt='street1' type='image/svg+xml'/></div>").appendTo('.canvas-area').draggable({ grid: [5,5]});
    moveToFront();
  });

  // road2
  $('#icons').on("click",".street2", function(){
    divCounter++;
    // alert(divCounter);
    $("<div class='house' id='street" + divCounter + "' style='width:40px;height:40px;border:1px solid black;'><img src='images/road2.svg' alt='street2' type='image/svg+xml'/></div>").appendTo('.canvas-area').draggable({ grid: [5,5]});
    moveToFront();
  });

  // road3
  $('#icons').on("click",".street3", function(){
    divCounter++;
    // alert(divCounter);
    $("<div class='house' id='street" + divCounter + "' style='width:40px;height:40px;border:1px solid black;'><img src='images/road_3way.svg' alt='street3' type='image/svg+xml'/></div>").appendTo('.canvas-area').draggable({ grid: [5,5]});
    moveToFront();
  });

  // **** buildings ****
  // apt
  $('#icons').on("click",".building1", function(){
    divCounter++;
    // alert(divCounter);
    $("<div class='house apt' id='building" + divCounter + "' style='width:80px;height:80px;border:1px solid black;'><img src='images/building_apt.svg' alt='house' type='image/svg+xml'/></div>").appendTo('.canvas-area').draggable();
    moveToFront();
  });

  // office
  $('#icons').on("click",".building2", function(){
    divCounter++;
    // alert(divCounter);
    $("<div class='house apt' id='building" + divCounter + "' style='width:80px;height:80px;border:1px solid black;'><img src='images/building_office.svg' alt='house' type='image/svg+xml' /></div>").appendTo('.canvas-area').draggable();
    moveToFront();
  });

  // skyscraper1
  $('#icons').on("click",".building3", function(){
    divCounter++;
    // alert(divCounter);
    $("<div class='house sky' id='skyscraper" + divCounter + "' style='width:100px;height:100px;border:1px solid black;'><img src='images/skyscraper_1.svg' alt='house' type='image/svg+xml' /></div>").appendTo('.canvas-area').draggable();
    moveToFront();
  });

  // skyscraper2
  $('#icons').on("click",".building4", function(){
    divCounter++;
    // alert(divCounter);
    $("<div class='house sky' id='skyscraper" + divCounter + "' style='width:100px;height:100px;border:1px solid black;'><img src='images/skyscraper_2.svg' alt='house' type='image/svg+xml' /></div>").appendTo('.canvas-area').draggable();
    moveToFront();
  });

  // transamerica
  $('#icons').on("click",".building5", function(){
    divCounter++;
    // alert(divCounter);
    $("<div class='house sky' id='building" + divCounter + "' style='width:100px;height:100px;border:1px solid black;'><img src='images/trans_america.svg' alt='house' type='image/svg+xml' /></div>").appendTo('.canvas-area').draggable();
    moveToFront();
  });


  // **** landmarks ****
  // ballpark
  $('#icons').on("click",".redLand", function(){
    divCounter++;
    // alert(divCounter);
    $("<div class='house ball' id='building" + divCounter + "' style='width:120px;height:120px;border:1px solid black;'><img src='images/ballpark.svg' alt='ballpark' type='image/svg+xml' /></div>").appendTo('.canvas-area').draggable();
    moveToFront();
  });
