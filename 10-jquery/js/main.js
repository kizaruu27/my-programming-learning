$(document).ready(function() {
    $('#hamburger-toggle').click(() => {
        $('#side-nav').slideToggle(1000);
    })

    // $('.card-header').click(() => {
    //     $('.card-content').slideToggle('fast');
    // })

    // $('.card').click(function() {
    //     $(this).animate({
    //         width: '+=200px',
    //     }, 'fast');

    //     $('.card-content').show().animate({
    //         opacity: 1
    //     }, 3000)
    // })

    $('.card').click(function() {
        $(this)
            .animate({
                width: '+=200px'
            }, 'slow', () => {
                $('.card-header')
                    .animate({
                        fontSize: '+=20px'
                    }, 'slow')

                $('.card-content')
                    .show()
                    .animate({
                        opacity: 1
                    }, 'slow')
            })
            .fadeOut(1000)
            .fadeIn(1000)
            .slideDown('fast')
            .slideUp('slow')
            .slideDown(5000);
    })

    $('.btn-stop').click(() => {
        $('.card').stop(true, true);
    })
})