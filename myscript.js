function play_se(){
    var voice = new Audio("waddledee_angryvoice_volume_200.mp3");
    voice.play();
    navigator.vibrate([200, 100, 200, 100, 200, 100, 200]);
}

$(function(){

    history.pushState(null, null, null)
    $(window).on("popstate", function(e){
        if(!e.originalEvent.state){
            play_se();
            history.pushState(null, null, null)
            return;
        }
    })

    $(".modal").modal({dismissible: false});
    $("#alert").modal("open");
    $("#close").click(function(){
        $("#alert").modal("close");
        play_se();
    });


    var time = 200;
    setInterval(function(){
        if (time > 0) {
             time--;
            $("#timer").text(time);
        }else {
            $("#timer")
            play_se();
        }
       
    }, 1000);
});