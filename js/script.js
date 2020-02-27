// event pada saat link di klik
$('.page-scroll').on('click', function (e) {

	// ambil isi href
	var tujuan = $(this).attr('href');
	// tangkap elemen ybs
	var elemenTujuan = $(tujuan);

	// pindahkan scroll
	$('body').animate({
		scrollTop: elemenTujuan.offset().top - 50
	}, 1250, 'easeInOutExpo');

	e.preventDefault();

});

// parallax
$(window).on('load', function () {
	$('.kiri').addClass('kiri-go');
	$('.kanan').addClass('kanan-go')
});

$(window).scroll(function () {
	var wScroll = $(this).scrollTop();

	$('.jumbotron img').css({
		'transform': 'translate(0px, ' + wScroll / 4 + '%)'
	});

	$('.jumbotron h1').css({
		'transform': 'translate(0px, ' + wScroll / 2 + '%)'
	});

	$('.jumbotron p').css({
		'transform': 'translate(0px, ' + wScroll / 1.2 + '%)'
	});


	// foto2019
	if (wScroll > $('.foto2019').offset().top - 600) {

		$('.foto2019 .thumbnail').each(function (i) {
			setTimeout(function () {
				$('.foto2019 .thumbnail').eq(i).addClass('muncul');
			}, 180 * (i + 1))

		});

	}

	// foto2020
	if (wScroll > $('.foto2020').offset().top - 600) {

		$('.foto2020 .thumbnail').each(function (i) {
			setTimeout(function () {
				$('.foto2020 .thumbnail').eq(i).addClass('muncul');
			}, 180 * (i + 1))

		});

	}

});