/*------------------------------------------------
Template Name: Imroz - Html5 Agency & Portfolio Template
All Main Js Here  

Index All JS 
-----------------------
        01. Wow Active
        02. Counter Up
        03. Feature Icon Activation
        04. Youtub Popup 
        05. Slick Activation            
        06. Paralax Window
        07. LightBox
        08. Parallax Activation
        09. Masonry Activation
        10. ScrollUp Activation
        11. Mobile Menu Activation
        12. Smoth Scroll
--------------------------------------------------*/

(function (window, document, $, undefined) {
    'use strict';

    var imJs = {

        m: function (e) {
            imJs.d();
            imJs.methods();
        },
        
        d: function (e) {
            this._window = $(window),
            this._document = $(document),
            this._body = $('body'),
            this._html = $('html')
            
        },

        methods: function (e) {
            imJs.mobileMenuActive();
            imJs.stickyHeader();
            imJs.contactForm();
        },


        contactForm: function () {
            $('.rwt-dynamic-form').on('submit', function (e) {
				e.preventDefault();
				var _self = $(this);
				var __selector = _self.closest('input,textarea');
				_self.closest('div').find('input,textarea').removeAttr('style');
				_self.find('.error-msg').remove();
				_self.closest('div').find('button[type="submit"]').attr('disabled', 'disabled');
				var data = $(this).serialize();
				$.ajax({
					url: 'mail.php',
					type: "post",
					dataType: 'json',
					data: data,
					success: function (data) {
						_self.closest('div').find('button[type="submit"]').removeAttr('disabled');
						if (data.code == false) {
							_self.closest('div').find('[name="' + data.field + '"]');
							_self.find('.btn-primary').after('<div class="error-msg"><p>*' + data.err + '</p></div>');
						} else {
							$('.error-msg').hide();
							$('.form-group').removeClass('focused');
							_self.find('.btn-primary').after('<div class="success-msg"><p>' + data.success + '</p></div>');
							_self.closest('div').find('input,textarea').val('');

							setTimeout(function () {
								$('.success-msg').fadeOut('slow');
							}, 5000);
						}
					}
				});
			});

        },

        mobileMenuActive: function (e) {
            $('.rn-popup-mobile-menu .nav-pills .nav-link').on('click', function (e) {
                $('.rn-popup-mobile-menu').removeClass('menu-open');
                $('html').css({
                    overflow: ""
                })
            })

            $('.rn-popup-mobile-menu .has-droupdown > a').on('click', function (e) {
                e.preventDefault();
                $(this).siblings('.submenu').toggleClass('active').slideToggle('400');
                $(this).toggleClass('open');
                $('html').css({
                    overflow: ""
                })
            });

            $('.humberger-menu').on('click', function (e) {
                e.preventDefault();
                $('.rn-popup-mobile-menu').addClass('menu-open');
                $('html').css({
                    overflow: "hidden"
                })
            });

            $('.close-menu').on('click', function (e) {
                e.preventDefault();
                $('.rn-popup-mobile-menu').removeClass('menu-open');
                $('.rn-popup-mobile-menu .has-droupdown > a').removeClass('open').siblings('.submenu').removeClass('active').slideUp('400');
                $('html').css({
                    overflow: ""
                })
            });
        },

        stickyHeader: function (e) {
            $(window).scroll(function () {
                if ($(this).scrollTop() > 250) {
                    $('.header--sticky').addClass('sticky')
                }else{
                    $('.header--sticky').removeClass('sticky')
                }
            })
        },

    }
    imJs.m();
    
})(window, document, jQuery)







