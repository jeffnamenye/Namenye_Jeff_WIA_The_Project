
window.onload = function(){

  $(".lightbox_trigger").click(function(e){

    e.preventDefault();

    var  image_href = $(this).attr("href");

    if($("#lightbox").length > 0){

        $("#content").html('<img src="' +image_href+'"/>');
        $("#lightbox").fadeIn(1000);


    }else{

        var lightbox=
            '<div id="lightbox">' +
                '<p>Click To Close</p>' +
                '<div id="content">' +
                '<img src="' + image_href + '"/>'+
                '</div> '  +
                '</div> ';


        $("body").append(lightbox);

        $("lightbox").hide();
        $("#lightbox").fadeIn(1000);
    }


  });

  $("#lightbox").live('click', function(){

      $("#lightbox").fadeOut(1000);
  })

}
