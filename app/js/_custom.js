document.addEventListener("DOMContentLoaded", function() {
	let body = document.querySelector('body');
	// if (body.clientWidht < 500) {
	// 	$('.lots__lotsblock').slick({
	// 		autoplay: true,
	// 		autoplaySpeed: 2000,
	// 		arrows: false,
	// 		slidesToShow: 1,
	// 	});
	// };
	setTimeout(() => {
		let icon = document.querySelector('.animate-spin');
		// debugger
		icon.classList.add('dnone')
	}, 5000 )
	function ibg(){
		let ibg=document.querySelectorAll(".ibg"); for (var i = 0; i < ibg.length; i++) { if(ibg[i].querySelector('img')){ ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')'; } }	
		}
		ibg();
		$('.header__burger').click(function(event) {
			$('.header__burger,.header__menu').toggleClass('active');
			$('body').toggleClass('lock');
		});
		function close() {
			let width = $('body').outerWidth(true);
			if (width <= 992) { 
				let btns = document.querySelectorAll('.header__menu a');
				for (let one of btns) {
					one.addEventListener('click', function () {
						$('.header__burger,.header__menu').toggleClass('active');
							$('body').toggleClass('lock');
					});
				}
			}
			}
		close();
	let width = $('body').outerWidth(true);
	if (width <= 992) {
		$( ".header__regionblock" ).appendTo( ".header__menu" );
	};
	if (width >= 992) {
		$('.header__regionblock').appendTo('.header__body')
	}
		window.addEventListener('resize', function () {
				let width = $('body').outerWidth(true);
				if (width <= 992) {
					$( ".header__regionblock" ).appendTo( ".header__menu" );
				};
				if (width >= 992) {
					$('.header__regionblock').appendTo('.header__body')
				}
		});


		



	$('.header__link-reg').on('click', function(e) {
		$('.header__profilelist').addClass('dnone');
		$('.header__regionlist').toggleClass('dnone');
	})

	$('.header__profile-link').on('click', function(e) {
		$('.header__regionlist').addClass('dnone');
		$('.header__profilelist').toggleClass('dnone');
	});

	$("body").on('click', '[href*="#"]', function(e){
		var fixed_offset = 0;
		$('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
		e.preventDefault();
	});

	let btns = document.querySelectorAll('.btn.plus');
	for (let one of btns) {
		one.addEventListener('click', function (e) {
			e.preventDefault();
			let price = one.closest('.lots__column').querySelector('.lots__currentprice');
			price.innerHTML = numberWithSpaces(+(price.innerHTML.replace(/\s/g, '')) + 5000)
		});
	}
	function numberWithSpaces(x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
	}
	let time = document.querySelectorAll('.time');
	for (let one of time) {
		setInterval(() => {
			let arr = one.innerHTML.split(':');
			let [d, h, m, s] = arr;
			--s;
			if (s < 1) {
				s = 59;
				--m;
			};
			if (m < 0) {
				m = 59;
				--h;
			};
			if (h < 0) {
				--d;
				h = 23;
			};
			h = +h;
			s = +s;
			m = +m;
			s < 10 ? s = '0' + s : null;
			m < 10 ? m = '0' + m : null;
			h < 10 ? h = '0' + h : null;
			one.innerHTML = `${d}:${h}:${m}:${s}`
		}, 1000)
	}
	let check = document.querySelectorAll('.lots__check');
	let pass = document.querySelectorAll('.lots__pass');
	function addOne(arr) {
		for (let one of arr) {
			one.addEventListener('click', function () {
				let num = one.lastElementChild.innerHTML;
				one.lastElementChild.innerHTML = +num + 1;
			});
		}
	};
	addOne(check);
	addOne(pass);
	let feedback = document.querySelector('.footer__feedback');
	let modal = document.querySelector('.modal-wrap');
	feedback.addEventListener('click', function (e) {
		e.preventDefault();
		modal.classList.remove('dnone');
		body.classList.add('lock');
		let btn = document.querySelector('.modal__close');
		btn.addEventListener('click', function () {
			modal.classList.add('dnone');
			body.classList.remove('lock')
		});
		modal.addEventListener('click', function (e) {
			if (e.target.classList == 'modal-wrap') {
				modal.classList.add('dnone');
				body.classList.remove('lock')
			}	
		});
	});
	window.addEventListener('resize', function (e) {
		let headerMenu = document.querySelector('.header__menu');
		if (body.clientWidth > 992) {
			body.classList.remove('lock');
			headerMenu.classList.remove('active')
		};
	});
});