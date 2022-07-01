// loader

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
	$('#filter').css({
		animation: 'filter 5s',
	})
}, 2000);

// menu for mobile

$('.mobile div').on('click', () => {
	$('.mobile div').toggleClass('active');
	$('.mobile nav').toggleClass('open');
	$('.mobile nav ul').toggleClass('show');
});
for (let a = 1; a <= $(".mobile ul li").length; a++) {
	$(".mobile ul li:nth-child(" + a + ")").css("animation-delay", "." + (a + 1) + "s");
}

if (window.devicePixelRatio !== 1) { // Костыль для определения иных устройств, с коэффициентом отличным от 1		
	var dpt = window.devicePixelRatio;
	var widthM = window.screen.width * dpt;
	var widthH = window.screen.height * dpt;
	document.write('<meta name="viewport" content="width=' + widthM + ', height=' + widthH + '">');
}

// Audio
/* 1 */
jQuery(function ($) {
	$('.soundbutton').on('click', function () {
		$('.audio')[0].play()
	});
	$('.audio').hide();
});
/* 2 */
jQuery(function ($) {
	$('.soundbutton_2').on('click', function () {
		$('.audio_2')[0].play()
	});
	$('.audio_2').hide();
});
/* 3 */
jQuery(function ($) {
	$('.soundbutton_3').on('click', function () {
		$('.audio_3')[0].play()
	});
	$('.audio_3').hide();
});

/* 1 */
$('.soundbutton').on('click', function () {
	$('.card-back__img').css({
		'opacity': '0',
		'z-index': '-100'
	});

	$('.card-back__video').css({
		'opacity': '1',
		'z-index': '100'
	});

	$('.play_video')[0].play();

	$('.flip-card-back').addClass('wave');
});
/* 2 */
$('.soundbutton_2').on('click', function () {
	$('.card-back__img_2').css({
		'opacity': '0',
		'z-index': '-100'
	});

	$('.card-back__video_2').css({
		'opacity': '1',
		'z-index': '100'
	});

	$('.play_video_2')[0].play();

	$('.flip-card-back_2').addClass('wave');
});
/* 3 */
$('.soundbutton_3').on('click', function () {
	$('.card-back__img_3').css({
		'opacity': '0',
		'z-index': '-100'
	});

	$('.card-back__video_3').css({
		'opacity': '1',
		'z-index': '100'
	});

	$('.play_video_3')[0].play();

	$('.flip-card-back_3').addClass('wave');
});

const musicContainer = document.querySelector('#music-container');
const playBtn = document.querySelector('#play');

const audioCard = document.querySelector('#audio');
const progress = document.querySelector('#progress');
const progressContainer = document.querySelector('#progress-container');

// Update song details
function loadSong(song) {
}

// Play song
function playSong() {
	musicContainer.classList.add('play');
	audioCard.play();
}

// Pause song
function pauseSong() {
	musicContainer.classList.remove('play');
	audioCard.pause();
}

// Update progress bar
function updateProgress(e) {
	const { duration, currentTime } = e.srcElement;
	const progressPercent = (currentTime / duration) * 100;
	progress.style.width = `${progressPercent}%`;
}

// Set progress bar
function setProgress(e) {
	const width = this.clientWidth;
	const clickX = e.offsetX;
	const duration = audioCard.duration;

	audioCard.currentTime = (clickX / width) * duration;
}


// Event listeners
playBtn.addEventListener('click', () => {
	const isPlaying = musicContainer.classList.contains('play');

	if (isPlaying) {
		pauseSong();
	} else {
		playSong();
	}
});

// Time/song update
audioCard.addEventListener('timeupdate', updateProgress);

// Click on progress bar
progressContainer.addEventListener('click', setProgress);

/* 2 */

const musicContainer2 = document.querySelector('#music-container_2');
const playBtn2 = document.querySelector('#play_2');

const audioCard2 = document.querySelector('#audio_2');
const progress2 = document.querySelector('#progress_2');
const progressContainer2 = document.querySelector('#progress-container_2');

// Update song details
function loadSong2(song) {
}

// Play song
function playSong2() {
	musicContainer2.classList.add('play');
	audioCard2.play();
}

// Pause song
function pauseSong2() {
	musicContainer2.classList.remove('play');
	audioCard2.pause();
}

// Update progress bar
function updateProgress2(e) {
	const { duration, currentTime } = e.srcElement;
	const progressPercent = (currentTime / duration) * 100;
	progress2.style.width = `${progressPercent}%`;
}

// Set progress bar
function setProgress2(e) {
	const width = this.clientWidth;
	const clickX = e.offsetX;
	const duration = audioCard2.duration;

	audioCard2.currentTime = (clickX / width) * duration;
}


// Event listeners
playBtn2.addEventListener('click', () => {
	const isPlaying = musicContainer2.classList.contains('play');

	if (isPlaying) {
		pauseSong2();
	} else {
		playSong2();
	}
});

// Time/song update
audioCard2.addEventListener('timeupdate', updateProgress2);

// Click on progress bar
progressContainer2.addEventListener('click', setProgress2);

/* 3 */

const musicContainer3 = document.querySelector('#music-container_3');
const playBtn3 = document.querySelector('#play_3');

const audioCard3 = document.querySelector('#audio_3');
const progress3 = document.querySelector('#progress_3');
const progressContainer3 = document.querySelector('#progress-container_3');

// Update song details
function loadSong3(song) {
}

// Play song
function playSong3() {
	musicContainer3.classList.add('play');
	audioCard3.play();
}

// Pause song
function pauseSong3() {
	musicContainer3.classList.remove('play');
	audioCard3.pause();
}

// Update progress bar
function updateProgress3(e) {
	const { duration, currentTime } = e.srcElement;
	const progressPercent = (currentTime / duration) * 100;
	progress3.style.width = `${progressPercent}%`;
}

// Set progress bar
function setProgress3(e) {
	const width = this.clientWidth;
	const clickX = e.offsetX;
	const duration = audioCard3.duration;

	audioCard3.currentTime = (clickX / width) * duration;
}


// Event listeners
playBtn3.addEventListener('click', () => {
	const isPlaying = musicContainer3.classList.contains('play');

	if (isPlaying) {
		pauseSong3();
	} else {
		playSong3();
	}
});

// Time/song update
audioCard3.addEventListener('timeupdate', updateProgress3);

// Click on progress bar
progressContainer3.addEventListener('click', setProgress3);

// link Jquery

$("a.scroll-to").on("click", function (e) {
	e.preventDefault();
	let anchor = $(this).attr('href');
	$('html, body').stop().animate({
		scrollTop: $(anchor).offset().top - 60
	}, 1200);
});

// slick slider

$('.single-item').slick({
	autoplay: true,
	autoplaySpeed: 2500,
	pauseOnHover: false,
	dots: false,
	infinite: true,
	arrows: false,
	fade: true
});
