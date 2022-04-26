//MAKE THE MAGIC HAPPEN


// The net.png should follow the cursor around in the garden at all times.



$(document).mousemove(function(e){
    $('#net').offset({
        left: e.pageX,
        top: e.pageY + 20
});
});

// Whenever you try to move the mouse cursor over theblue butterfly, it will swiftly move to a random location inside the view of the garden, but always staying inside the view of the garden –i.e. not moving outside the browserwindow.

$(document).ready(function(){
    $('#butterfly').mouseover(function(){
        var x = Math.floor(Math.random() * $(window).width());
        var y = Math.floor(Math.random() * $(window).height());
        $('#butterfly').offset({
            left: x,
            top: y
        });
    });
});