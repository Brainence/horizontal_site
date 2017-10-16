$('.square').mouseover(function () {
    var index = $(this).text();
    if ($('.square-background').eq(index).hasClass('square-background-active-1')) {
        $('.square-background').eq(index).removeClass('square-background-active-1');
        $('.square-background').eq(index).addClass('square-background-active-2');
    } else if ($('.square-background').eq(index).hasClass('square-background-active-2')) {
        $('.square-background').eq(index).removeClass('square-background-active-2');
        $('.square-background').eq(index).addClass('square-background-active-3');
    } else if ($('.square-background').eq(index).hasClass('square-background-active-3')) {
        $('.square-background').eq(index).removeClass('square-background-active-3');
        $('.square-background').eq(index).addClass('square-background-active-1');
    } else {
        var rand = randomInteger(1, 3);
        $('.square-background').eq(index).addClass('square-background-active-' + rand);
    }
})
function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
}

$('#tbt-description-1>summary').click(function (event) {
    if ($('#tbt-description-1').attr('open') == 'open') { event.preventDefault(); }
    $('#tbt-description-2').removeAttr('open');
    $('#tbt-description-3').removeAttr('open');
    $('#tbt-description-4').removeAttr('open');
});

$('#tbt-description-2>summary').click(function (event) {
    if ($('#tbt-description-2').attr('open') == 'open') { event.preventDefault(); }
    $('#tbt-description-1').removeAttr('open');
    $('#tbt-description-3').removeAttr('open');
    $('#tbt-description-4').removeAttr('open');
});

$('#tbt-description-3>summary').click(function (event) {
    if ($('#tbt-description-3').attr('open') == 'open') { event.preventDefault(); }
    $('#tbt-description-1').removeAttr('open');
    $('#tbt-description-2').removeAttr('open');
    $('#tbt-description-4').removeAttr('open');
});

$('#tbt-description-4>summary').click(function (event) {
    if ($('#tbt-description-4').attr('open') == 'open') { event.preventDefault(); }
    $('#tbt-description-1').removeAttr('open');
    $('#tbt-description-2').removeAttr('open');
    $('#tbt-description-3').removeAttr('open');
});