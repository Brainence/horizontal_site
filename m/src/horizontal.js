function changePage(eventName) {
    activatePageNr(this.rel.activeItem);
}


var activatePageNr = function (index) {
    clearmenuclass();
    $("#menu-button-" + index).addClass('menu-active');
    $("#bullet-" + index).addClass('bullet-active');
}

var clearmenuclass = function() {
    for (i = 0; i < 6; i++) {
        $("#menu-button-" + i).removeClass('menu-active');
        $("#bullet-" + i).removeClass('bullet-active');
    }
}