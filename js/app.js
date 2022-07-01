// Loader

function preloader() {
	$(() => {

		setInterval(() => {

			let preloader = $('#preloader');

			preloader.css('opacity', 0);
			preloader.css('transition', 0.4);
			preloader.css('visibility', 'hidden');
			preloader.css('visibility', 0, 1);

		}, 1500);

	});
}

preloader();

setInterval(() => {
	$('.continue').css({
		'transition': '0.4s',
		'left': '50%',
		'opacity': '1'
	})
}, 1800);

setInterval(() => {
	$('html, body').animate({ scrollTop: $('html, body').get(0).scrollHeight }, 20100);
}, 1300);

$('html, body').on('wheel', function () {
	$('html, body').animate().stop();
});

$('html, body').on('touchmove', function () {
	$('html, body').animate().stop();
});

// 3D Scroll

let zSpacing = -1020,
	lastPos = zSpacing / 2.4,
	$frames = document.getElementsByClassName('frame'),
	frames = Array.from($frames),
	zVals = []

window.onscroll = function () {

	let top = document.documentElement.scrollTop,
		delta = lastPos - top

	lastPos = top

	frames.forEach(function (n, i) {
		zVals.push((i * zSpacing) + zSpacing)
		zVals[i] += delta * - 2.9
		let frame = frames[i],
			transform = `translateZ(${zVals[i]}px)`,
			opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0
		frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`)
	})

}

window.scrollTo(0, 1)

// Audio

/*

Главная(#), Music, Авторы, Labels, Flyte

*/

/*

	include JQuery

*/

$('.mobile div').on('click', () => {
	$('.mobile div').toggleClass('active');
	$('.mobile nav').toggleClass('open');
	$('.mobile nav ul').toggleClass('show');
});
for (let a = 1; a <= $(".mobile ul li").length; a++) {
	$(".mobile ul li:nth-child(" + a + ")").css("animation-delay", "." + (a + 1) + "s");
}