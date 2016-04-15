function textSelected() {
    var selectedText = getSelectionText();

    changeVisability(selectedText != "" && selectedText != " ");
}

window.addEventListener('load', function () {
    changeVisability(false);
    // desktop
    document.body.addEventListener('mouseup', function (e) {
        if (document.getElementById("tooltip").className == "tooltip1") {
            document.getElementById("tooltip").className = "tooltip2";
        }
        textSelected()
    }, false)
    // mobile
    document.body.addEventListener('touchend', function (e) {
        if (document.getElementById("tooltip").className == "tooltip2") {
            document.getElementById("tooltip").className = "tooltip1";
        }
        textSelected()
    }, false)

    document.getElementById("svgMark").addEventListener('mouseover', function () {
        markText("1");
    }, false)
    document.getElementById("svgMark").addEventListener('mousedown', function () {
        markText("2");
    }, false)
}, false)

// from http://stackoverflow.com/a/5379408/5044231
function getSelectionText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text;
}

function getSelectionCoords() {
    var selection = document.getSelection(),
    range = selection.getRangeAt(0),
    clientRects = range.getClientRects()
    var rect = clientRects[0];

    var x = rect.left,
        y = rect.top;
    if (rect.width > 1) {
        x = x + (rect.width / 2);
    }

    return {
        x: x,
        y: y
    };
}

function changeVisability(visible) {
    var tooltip = document.getElementById('tooltip');
    if (visible == true) {
        var coords = getSelectionCoords();
        setLinks();
        setTimeout(function () {
            tooltip.style.left = coords.x - 53 + 'px';
            tooltip.style.top = coords.y + window.pageYOffset - 46 + 'px';
            tooltip.style.display = 'block';
            fadeIn(tooltip);
        }, 50);
    } else {
        tooltip.style.display = 'none';
    }
}

function setLinks() {
    var text = getSelectionText(),
    url = document.URL;

    document.getElementById("svgFacebook").href = getLink("facebook", text, url);
    // make twitter img https://jsfiddle.net/w4b2xko2/
    document.getElementById("svgTwitter").href = getLink("twitter", text, url);
    document.getElementById("svgWhatsapp").href = getLink("whatsapp", text, url);
}

function getLink(network, text, url) {
    if (network == "facebook") {
        return "String";
    }
    else if (network == "twitter") {
        var canvas = document.getElementById('twitterCanvas');
        var context = canvas.getContext('2d');
        var maxWidth = 400;
        var lineHeight = 25;
        var x = (canvas.width - maxWidth) / 2;
        var y = 40;

        context.font = '16pt Calibri';
        context.fillStyle = '#333';
        context.background = '#fbfbfb';

        wrapText(context, text, x, y, maxWidth, lineHeight);

        var canvas = document.getElementById("twitterCanvas");
        var img = canvas.toDataURL("image/png");

        return "String";
    } else if (network == "whatsapp") {
        return "whatsapp://send?text=\"" + encodeURI(text) + "\" - " + encodeURI(url);
    }
}


var selection;
function markText(type) {
    if (type == "1") {
        selection = window.getSelection().getRangeAt(0);
    }
    if (type == "2") {
        var selectedText = selection.extractContents();
        var span = document.createElement("span");
        span.style.backgroundColor = "yellow";
        span.appendChild(selectedText);
        selection.insertNode(span);
    }
}

// from http://youmightnotneedjquery.com/#fade_in
function fadeIn(el) {
    el.style.opacity = 0;
    var last = +new Date();
    var tick = function () {
        el.style.opacity = +el.style.opacity + (new Date() - last) / 150;
        last = +new Date();
        if (+el.style.opacity < 1) {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
        }
    };
    tick();
}

function wrapText(context, text, x, y, maxWidth, lineHeight) {
    var words = text.split(' ');
    var line = '';

    for (var n = 0; n < words.length; n++) {
        var testLine = line + words[n] + ' ';
        var metrics = context.measureText(testLine);
        var testWidth = metrics.width;
        if (testWidth > maxWidth && n > 0) {
            context.fillText(line, x, y);
            line = words[n] + ' ';
            y += lineHeight;
        }
        else {
            line = testLine;
        }
    }
    context.fillText(line, x, y);
}
