$(document).ready(function(){
    $('#mymusic')[0].play();

    $('.btn .fa-pause').on('click',function(){
        $(this).addClass("d-none");
        $('#mymusic')[0].pause();
        $('.fa-play').removeClass('d-none');
    });
    $('.btn .fa-play').on('click',function(){
        $(this).addClass("d-none");
        $('#mymusic')[0].play();
        $('.fa-pause').removeClass('d-none');
    });
});
