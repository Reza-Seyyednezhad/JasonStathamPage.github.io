$(document).ready(function () {
    $(".owl-carousel").owlCarousel();
});

$('.aboutMe-collapse').on('click', function (e) {
    $('.aboutMe-body').fadeToggle('slow')
    e.preventDefault()
})

$('.mySpecialties-collapse').on('click', function (e) {
    $('.specialties-parent').fadeToggle('slow')
    e.preventDefault()
})

$('.career-collapse').on('click', function (e) {
    $('.career-parent').fadeToggle('slow')
    e.preventDefault()
})

$('.awards-collapse').on('click', function (e) {
    $('.awards-parent').fadeToggle('slow')
    e.preventDefault()
})

$('.activites-collapse').on('click', function (e) {
    $('.myActivities-parent').fadeToggle('slow')
    e.preventDefault()
})

$('.gallery-collapse').on('click', function (e) {
    $('.gallery-parent').fadeToggle('slow')
    e.preventDefault()
})
// tippy('[data-tippy-content]');
// tippy('#file-person', {
//     content: 'ABOUT ME',
//     placement: 'right',
//     animation: 'fade',
// });
//   tippy('#graph-up-arrow', {
//     content: 'CAREER',
//     placement: 'right',
//     animation: 'fade',
// });

tippy('#TwitHeader', {
    content: 'Twitter',
    placement: 'bottom',
    animation: 'fade',
});
tippy('#InstaHeader', {
    content: 'Instagram',
    placement: 'bottom',
    animation: 'fade',
});
tippy('#FaceHeader', {
    content: 'Facebook',
    placement: 'bottom',
    animation: 'fade',
});
$('#movies-toggle').on('click', function (e) {
    $('.movies-table').toggle('fast', 'swing')
    $('.videoGameTable').hide('fast', 'swing')
    $('.musicVideosTable').hide('fast', 'swing')
    e.preventDefault()
})
$('#video-games-toggle').on('click', function (e) {
    $('.videoGameTable').toggle('fast', 'swing')
    $('.movies-table').hide('fast', 'swing')
    $('.musicVideosTable').hide('fast', 'swing')
    e.preventDefault()
})
$('#music-videos-toggle').on('click', function (e) {
    $('.musicVideosTable').toggle('fast', 'swing')
    $('.videoGameTable').hide('fast', 'swing')
    $('.movies-table').hide('fast', 'swing') 
    e.preventDefault()
})
