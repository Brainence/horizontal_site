
window.onresize = function (event) {
    $('#oneperframe').sly('reload');
    $('#portfolio-frame').sly('reload');
    $('#testimonial-frame').sly('reload');
    $('#contacts-frame').sly('reload');
    $('#photo-frame').sly('reload');
    $('#partners-frame').sly('reload');
    $('#portfolio-clearfix').width($('#portfolio-clearfix').width() + $('.portfolio-item').length);
    $('#contacts-clearfix').width($('#contacts-clearfix').width() + 2 * $('.contacts-item').length);
    $('#photo-clearfix').width($('#photo-clearfix').width() + 1);

};
window.onload = function (event) {
    $('#oneperframe').sly('reload');
    $('#portfolio-frame').sly('reload');
    $('#testimonial-frame').sly('reload');
    $('#contacts-frame').sly('reload');
    $('#photo-frame').sly('reload');
    $('#partners-frame').sly('reload');
    $('#portfolio-clearfix').width($('#portfolio-clearfix').width() + $('.portfolio-item').length);
    $('#contacts-clearfix').width($('#contacts-clearfix').width() + 2 * $('.contacts-item').length);
    $('#photo-clearfix').width($('#photo-clearfix').width() + 1);
}

function ChangeImage(id, path) {
    $("#" + id).attr('src', path);
};


function collapseInItem(index) {
    $(".panel-collapse-content-home").each(function (i) {
        if (i != index)
            $(this).removeClass('in');
    });
}
