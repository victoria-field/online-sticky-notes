$(document).ready(function() {
  var id = 1;
  var currentElement = "";
  $("#btnNew").click(function() {

    var newNote = $("<div class='sticky green' id='sticky" + id + "'><textarea>Add Your Note</textarea><span class='ui-icon ui-icon-close'></div>").resizable().draggable({stack: ".sticky"});
    currentElement = "sticky" + id;
    id++;
    $("#container").append(newNote);
    var left =$(this).position().left;
    var top =$(this).position().top + 50;
    $(".sticky").each(function(){
      $(this).css({left:left + "px", top:top + "px", position:"absolute"});
      left += 235;
    })
  });

  $("#container").on("click", ".sticky", function() {
    currentElement = $(this).attr("id");
  });

  $("#container").on("click", "textarea", function(){
    var maximum = getMax(".sticky");
    $(this).parent().css("z-index", (maximum+1));
  });

  $("#container").on("click", "span.ui-icon-close", function(){
    $(this).parent().remove();
  });

  $(".box").click(function() {
    if (currentElement != "") {
      var color = $(this).attr("class").split(" ")[0];
      $("#" + currentElement).removeClass();
      $("#" + currentElement).addClass("sticky " + color);
    }
  })

});

function getMax(items){
  var max = 0;
  $(items).each(function(){
    var zIndex = $(this).css("z-index");
    if(zIndex == "auto"){
      zIndex = 1;
    }
    max = Math.max(max, zIndex);
  console.log(zIndex + " : " + max);
  });
  return max;
};
