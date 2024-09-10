$(document).ready(function() {
    const pageUrl = window.location.href;
    const pageId = pageUrl.substring(pageUrl.lastIndexOf("?") + 1);
    const currentId = `#${pageId}`;
    console.log(currentId);

    if (currentId) {
        $('html, body').animate({
            scrollTop: $(currentId).offset().top - 20
        });
    }
});