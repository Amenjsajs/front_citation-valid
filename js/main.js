var myNs = {
	menuFunction : function () {
		var x_iconmenu = document.getElementById('x-iconmenu');
		var menu_icon = document.getElementById('menu-icon');
		var span_menu = document.getElementById('span-menu');
		x_iconmenu.addEventListener('click', function (e) {
			menu_icon.style.display = "block";
		}, false);
		span_menu.addEventListener('click', function (e) {
			menu_icon.style.display = "none";
		}, false);
	},
	loopFunction: function () {
		var x_iconloop = document.getElementById('x-iconloop');
		var loop_icon = document.getElementById('loop-icon');
		var span_loop = document.getElementById('span-loop');
		x_iconloop.addEventListener('click', function (even) {
			loop_icon.style.display = "block";
		}, false);
		span_loop.addEventListener('click', function (even) {
			loop_icon.style.display = "none";
		}, false);
	}
};
// myNs.menuFunction();
// myNs.loopFunction();
$(function () {
	$('.x-menu').each(function (index, values) {
		var $this = $(this);
		if (index == 0) {
			$this.children().eq(0).on('click', function (event) {
			if ($('#loop-icon').is(':visible')) {
				$('#loop-icon').hide('slow');
			} else {
				$('#loop-icon').show('slow');
			}
		});
		};
		if (index == 0) {
			$this.children().eq(1).on('click', function () {
				if ($('#menu-icon').is(':visible')) {
					$('#menu-icon').hide('slow');
				} else {
					$('#menu-icon').show('slow');
				}
			});
		};
		if (index == 0) {
			$this.children().eq(2).on('click', function (){
				if ($("#member-icon").is(":visible")) {
					$('#member-icon').hide("slow");
				} else{
					$('#member-icon').show("slow");
				}
			});
		};
		$(".ex-sign-up").on('click', function (event){
			if ($("#conexion-icon").is(":visible")) {
				$('#conexion-icon').hide("slow");
			}
			else {
				$("#conexion-icon").show("slow");
				$("#member-icon").hide("slow");
			}
		});
		$('.ex-sign-up-return').on('click', function (event){
			if ($('#member-icon').is(':visible')) {
				$('#member-icon').hide('slow');
			}
			else{
				$('#member-icon').show('slow');
				$('#conexion-icon').hide('slow');
			}
		});
		$('#span-loop').on('click', function (e) {
			$('#loop-icon').hide('slow');
		});
		$('#span-menu').on('click', function (e) {
			$('#menu-icon').hide('slow');
		});
		$('#member-menu').on('click', function (event){
			$('#member-icon').hide('slow');
		});
		$('.bk-connexion').on('click', function (event){
			console.log('click');
			$('#conexion-icon').hide('slow');
		});
		$('body').on('click', function (event) {
			if (!$(event.target).closest('.loup-rech, .sec, .x-menu').length) {
				$('.loup-rech').hide('slow');
			};
		});
	});
    // $('.js').on('click', function (e) {
		// e.preventDefault();
		// var cible = $(this).attr('data'),
		// 	cibleEtat = $('#'+cible+'').css('display');
		// $('.collaspe > .alpabet, .collaspe > .words').css('display','none');
    //     if (cibleEtat === 'none'){
    //         $('#'+cible+'').slideDown('slow').addClass('flex')
		// }else {
    //         $('#'+cible+'').slideUp('slow').removeClass('flex')
		// }
    // });
	$('.js').each(function (index, values) {
		var $this = $(this);
		$this.on('click', function (e) {
			e.preventDefault();
			$('.collaspe').children().each(function () {
				$(this).slideUp('slow');
			});
			var liens = $(this).attr('data');
			if ($('#'+liens+'').is(':visible')) {
				$('#'+liens+'').slideUp('slow');
			} else {
				$('#'+liens+'').slideDown('slow');
			}
		});
	});
	$(".words-mytheme").each(function (index, values) {
		$this = $(this);
		$this.on('click', function (event){
			$('.words-mytheme').each(function (el, val){
				$(this).removeClass('words-color');
				$(this).children('a').css('color','rgb(128,128,128)');
				$(this).children('a').next().css('display','none');
			});
			console.log($this.attr("class"));
			event.preventDefault();
			$(this).addClass('words-color');
			$(this).children('a').next().css({'display':'block'});
			$(this).children('a').css({'color':'white'});
			$(this).children('a').next().on('click', function (event){
				$(this).prev().parent().css('display','none');
			});
		});
	});
	$('.accord').each(function (i, v){
		var $this = $(this);
		$this.on('click', function (event){
			$('.accordion').each(function (){
				$(this).slideUp('slow');
				$('.down').css('transform','rotate('+90+'deg)');
				// $('.voir-plus').html('voir les citations de <span class="orange">winston churchill</span>');
			});
			var href = $this.attr('href');
			var lien = $('#'+href+"");
			if (lien.is(':visible')) {
				lien.slideUp('slow');
				$this.children('.down').css('transform','rotate('+90+'deg)');
				// $this.children('.voir-plus').html('voir les citations de <span class="orange">winston churchill</span>');
			}
			else{
				lien.slideDown('slow');
				$this.children('.down').css('transform','rotate('+270+'deg)');
				// $this.children('.voir-plus').html('refermer');
			}
		});
	});
	function borderRight(){
		var oldBorder = parseInt($('.border-style').css('border-left'));
		if (oldBorder == 0) {
			$('.tag-text').next().addClass('tag-icon-right');
		}else{
			$('.tag-text').next().removeClass('tag-icon-right');
		}
	}
	borderRight();
	$(window).on('resize', function (){
		borderRight();
	});
	function inputView(){
		$('#inline-search-block .btn-mobile').on('click', function (event){
            $('#alpabet, #words').slideUp('slow');
			var $this = $(this),
				blocHide = $('.js-hide'),
				input = $('.js-taille'),
				borderNone = $('#embed-search'),
				etat = input.css('display');
			if (etat == 'none') {
			    $this.removeClass('mobile-left');
				blocHide.addClass('none');
				input.css('display','block');
				input.focus();
				borderNone.css('border-right','none');
			}else{
			   $this.addClass('mobile-left');
				blocHide.removeClass('none');
				input.css('display','none');
				input.blur();
				borderNone.css('border-right','0.0625rem solid rgba(96,96,96,0.25)');
			}
		})
	}
	function executeCode(){
		if (window.matchMedia("(max-width: 721px)").matches) {
	  		inputView();
		}
	}
	executeCode();
	var scroll = {
		scrollDown : function (){
			var form = $('.js-scroll-cilble'),
				scrollHauteur = 0;
			if (form.length != 0) {
				var teste = form.position().top;
			}else{
				return;
			}	
			$('.js-scroll').on('click', function (event){
				event.preventDefault();
				$("html, body").animate({scrollTop: teste},500);
			});
			$(window).on('scroll', function (){
				scrollHauteur = $(window).scrollTop();
				if (scrollHauteur >= teste) {
					$('.btn-scroll-top').css('display','block');
				}else{
					$('.btn-scroll-top').css('display','none');
				}
			})
			$('.btn-scroll-top').on('click', function (event){
				$("html, body").animate({scrollTop: 0},500);
			})
		}
	}
	scroll.scrollDown();
})