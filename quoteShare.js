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
        setLinks;
        setTimeout(function () {
            tooltip.style.left = coords.x - 53 + 'px';
            tooltip.style.top = coords.y + window.pageYOffset - 46 + 'px';
            tooltip.style.display = 'block';
        }, 200);
    } else {
        tooltip.style.display = 'none';
    }
}

function setLinks()
{
    var text = getSelectionText(),
        twitterUrl = text,
        url = document.URL;

    if(twitterUrl.length > 125)
    {

    }

    document.getElementById("svgFacebook").href = "www.facebook.com";
    document.getElementById("svgTwitter").href = "www.twitter.com";
    document.getElementById("svgWhatsapp").href = "www.whatsapp.com";
}
