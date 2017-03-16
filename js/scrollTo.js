 (function ($) {

        //----------------------------------
        // Elements
        //----------------------------------
        var $scrollTo_control_1 = $('.scrollTo-control:eq(0)'),
            $scrollTo_control   = $('.scrollTo-control'),
            $control_next       = $('#control-next'),
            $window             = $(window);

        //----------------------------------
        // Events
        //----------------------------------
        $scrollTo_control_1.addClass('filled');

        $scrollTo_control.on('click', function(){
            fill_control($(this));
            scroll_to($(this).attr('data-scrollTo-id'));
        });

        $control_next.on('click', function(){
            var $next_sibling = determine_next_sibling($('.scrollTo-control.filled'));
            fill_control($next_sibling);
            scroll_to($next_sibling.attr('data-scrollTo-id'));
        });

        $scrollTo_control.hover(
            function(){
                $(this).find('.control-title').addClass('displayTitle');
            },
            function(){
                $(this).find('.control-title').removeClass('displayTitle');
            }
        );

        $window.scroll(function(){
            if ($window.scrollTop() === 0){
                $scrollTo_control.removeClass('filled');
                $scrollTo_control_1.addClass('filled');
                $control_next.removeClass('inverted');
            }
        });

        //----------------------------------
        // Functions
        //----------------------------------
        function fill_control($this){
            $scrollTo_control.removeClass('filled');
            $this.addClass('filled');
        }

        function scroll_to(scrollToId){
            if (scrollToId === $scrollTo_control_1.attr('data-scrollTo-id')){
                scrollToId = 'html, body';
                $control_next.addClass('inverted');
            }
            else {
                scrollToId = '#' + scrollToId;
            }
            $('html, body').animate({
                scrollTop: $(scrollToId).offset().top
            }, 1000);
        }

        function determine_next_sibling($this){
            if ($this.next().length == 0){
                return $scrollTo_control_1;
            }
            else {
                return $this.next();
            }
        }

    })(jQuery);