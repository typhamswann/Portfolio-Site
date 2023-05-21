$("#arrow").click(function() {
    $('html, body').animate({
        scrollTop: $("#gallery").offset().top
    }, 1200);
});
