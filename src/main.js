//global
var notIE = false;

var ua = window.navigator.userAgent;

var msie = ua.indexOf('MSIE ');
if (msie > 0) {
    // IE 10 or older => return version number
    notIE = false;
} else {
    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        notIE = false;
    } else {

        var edge = ua.indexOf('Edge/');
        if (edge > 0) {
            // Edge (IE 12+) => return version number
            notIE = true;
        } else {
            notIE = true;
        }
    }
}
//end global

function runslogananimation() {
    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var TextScramble = function () {
        function TextScramble(el) {
            _classCallCheck(this, TextScramble);

            this.el = el;
            this.chars = '!<>-_\\/[]{}—=+*^?#________';
            this.update = this.update.bind(this);
        }

            _createClass(TextScramble, [
                {
                    key: 'setText',
                    value: function setText(newText) {
                        var _this = this;

                        var oldText = this.el.innerText;
                        var length = Math.max(oldText.length, newText.length);
                        var promise = new Promise(function(resolve) {
                            return _this.resolve = resolve;
                        });
                        this.queue = [];
                        for (var i = 0; i < length; i++) {
                            var from = oldText[i] || '';
                            var to = newText[i] || '';
                            var start = Math.floor(Math.random() * 40);
                            var end = start + Math.floor(Math.random() * 40);
                            this.queue.push({ from: from, to: to, start: start, end: end });
                        }
                        cancelAnimationFrame(this.frameRequest);
                        this.frame = 0;
                        this.update();
                        return promise;
                    }
                }, {
                    key: 'update',
                    value: function update() {
                        var output = '';
                        var complete = 0;
                        for (var i = 0, n = this.queue.length; i < n; i++) {
                            var _queue$i = this.queue[i],
                                from = _queue$i.from,
                                to = _queue$i.to,
                                start = _queue$i.start,
                                end = _queue$i.end,
                                char = _queue$i.char;

                            if (this.frame >= end) {
                                complete++;
                                output += to;
                            } else if (this.frame >= start) {
                                if (!char || Math.random() < 0.28) {
                                    char = this.randomChar();
                                    this.queue[i].char = char;
                                }
                                output += '<span class="dud">' + char + '</span>';
                            } else {
                                output += from;
                            }
                        }
                        this.el.innerHTML = output;
                        if (complete === this.queue.length) {
                            this.resolve();
                        } else {
                            this.frameRequest = requestAnimationFrame(this.update);
                            this.frame++;
                        }
                    }
                }, {
                    key: 'randomChar',
                    value: function randomChar() {
                        return this.chars[Math.floor(Math.random() * this.chars.length)];
                    }
                }
            ]);
        return TextScramble;
    }();

    var phrases = ['WE PROVIDE CUSTOM SOFTWARE DEVELOPMENT', 'LEADING EDGE STRATEGIES FOR YOUR BUSINESS', 'BRAINS TO ADVANCE SOFTWARE DEVELOPMENT'];

    var el = document.querySelector('.page-slogan');
    var fx = new TextScramble(el);

    var counter = 0;
    var next = function next() {
        fx.setText(phrases[counter]).then(function () {
            setTimeout(next, 5000);
        });
        counter = (counter + 1) % phrases.length;
    };

    next();
}



window.onresize = function (event) {
    $('#oneperframe').sly('reload');
    $('#portfolio-frame').sly('reload');
    $('#testimonial-frame').sly('reload');
    $('#contacts-frame').sly('reload');
    $('#photo-frame').sly('reload');
    $('#career-frame').sly('reload');
    $('#portfolio-clearfix').width($('#portfolio-clearfix').width() + 2 * $('.portfolio-item').length);
    $('#contacts-clearfix').width($('#contacts-clearfix').width() + 2 * $('.contacts-item').length);
    $('#photo-clearfix').width($('#photo-clearfix').width() + 2 * $('.photo-item').length);
    $('#career-clearfix').width($('#career-clearfix').width() + 100 + 2 * $('.career-item').length);
    $('.scrollbar').css('background-size', $(document).width() % 6 < 3 ? ($(document).width() % 6 === 0 ? ($(document).width() / 6) : ($(document).width() / 6) + 1) : ($(document).width() / 6) + 1);
};
window.onload = function (event) {
    if (history.state != undefined) {
        status = 1;
        $('#oneperframe').sly('activate', state);
        openPage(history.state);
        status = 0;
    }

    $('.scrollbar').css('background-size', $(document).width() % 6 < 3 ? ($(document).width() % 6 === 0 ? ($(document).width() / 6) : ($(document).width() / 6) + 1) : ($(document).width() / 6) + 1);

    $('#oneperframe').sly('reload');
    $('#portfolio-frame').sly('reload');
    $('#testimonial-frame').sly('reload');
    $('#contacts-frame').sly('reload');
    $('#photo-frame').sly('reload');
    $('#career-frame').sly('reload');
    $('#portfolio-clearfix').width($('#portfolio-clearfix').width() + 2 * $('.portfolio-item').length);
    $('#contacts-clearfix').width($('#contacts-clearfix').width() + 2 * $('.contacts-item').length);
    $('#photo-clearfix').width($('#photo-clearfix').width() + 2 * $('.photo-item').length);
    $('#career-clearfix').width($('#career-clearfix').width() + 100 + 2 * $('.career-item').length);

    if (notIE) {
        runslogananimation();
    } else {
        $("#page-slogan").html("WE PROVIDE CUSTOM SOFTWARE DEVELOPMENT");
    }
};

function ChangeImage(id, path) {
    $("#" + id).attr('src', path);
};

window.onpopstate = function (event) {
    state = event.state != null ? event.state : 0;
    status = 1;
    $('#oneperframe').sly('activate', state);
    openPage(state);
    status = 0;
};

function collapseInItem(index) {
    $(".panel-collapse-content-home").each(function (i) {
        if (i != index)
            $(this).removeClass('in');
    });
    if ($('#collapsible-item-' + index).hasClass('collapsible-item-active') === true &&
        $('#collapsible-item-' + (index + (index === 3 ? -1 : 1))).hasClass('collapsible-item-active') !== true) {
        $('.collapsible-item').addClass('collapsible-item-active');
        $('.home-widget-text').removeClass('home-widget-text-active');
        $(".collapsible-heading").css('opacity', 0.8);
    } else {
        $(".collapsible-item").each(function (i) {
            if (i != index)
                $(this).removeClass('collapsible-item-active');
            else
                $(this).addClass('collapsible-item-active');
        });

        $(".home-widget-text").each(function (i) {
            if (i != index) {
                $(this).removeClass('home-widget-text-active');
            } else {
                $(this).addClass('home-widget-text-active');
            }
        });

        $(".collapsible-heading").each(function (i) {
            if (i != index)
                $(this).css('opacity', 0.8);
            else {
                $(this).css('opacity', 1);
            }
        });
    }
}


var runGame = function () {
    $("#game").show();
    SinuousWorld.initialize();
}
var closegame = function () {
    $("#game").hide();
}

