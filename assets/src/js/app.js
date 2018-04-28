(function($, window) {
    $(document).ready(function(e) {
        var $mixtapes = $('.collection').flickity({
            draggable: true,
            cellAlign: 'left',
            setGallerySize: false,
            contain: true,
            prevNextButtons: false,
            wrapAround: false,
            percentPosition: false,
        });

        $mixtapes.on('change.flickity', function(event, index) {
            // $('body').toggleClass('toggle');

            // var src = $('.item.is-selected').find('img').attr('src');
            // $('.background').css({
            //     'background-image': 'url(' + src + ')',
            // });
        });

        $('.mixtape-number').each(function(i, item) {
            $(this).html('0' + (i + 1));
        });
    });
})(jQuery, window);
