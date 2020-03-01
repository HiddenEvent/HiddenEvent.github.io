// turn img alt into caption
$('.page__content > p > img[alt]').replaceWith(function () {
    return '<figure>'
        + '<figcaption class="caption" style="font-weight: 600;">▼ ' + $(this).attr('alt') + '</figcaption>'
        + '<a href="' + $(this).attr('src') + '" class="mg-link">'
        + '<img src="' + $(this).attr('src') + '"/></a>'
        + '</figure>';
});
// and connect magnific popup image viewer
$('.mg-link').magnificPopup({
    type: 'image',
    closeOnContentClick: true
});