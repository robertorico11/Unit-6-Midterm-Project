$(".start-button").click(function() {
    $(".message-1").text("Kevin Durant shoots the ball with 2.8 seconds left. Double click the first image to see what happens next!");
    $(".secondImage").show();
    $(".thirdImage").show();
    $(".firstImage").hide();
    $(".start-button").hide();
});
$(".secondImage").click(function() {
    $(".message-1").text("And it goes in! The Brooklyn Nets win their first NBA championship!");
    $(".ending-img").show();
    $(".secondImage").hide();
    $(".thirdImage").hide();
});