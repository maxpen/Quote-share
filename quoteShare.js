function textSelected() {
    var tooltip = document.getElementById('tooltip'),
    selectedText = getSelectionText(),
    coords = getSelectionCoords();

    if (selectedText != "" && selectedText != " ") {
        setLinks();
        setTimeout(function () {
            tooltip.style.left = coords.x - 53 + 'px';
            tooltip.style.top = coords.y + window.pageYOffset - 46 + 'px';
            tooltip.style.display = 'block';
        }, 500);
    } else {
        tooltip.style.display = 'none';
    }
}

window.addEventListener('load', function () {
    document.getElementById('tooltip').style.display = 'none';
    document.body.addEventListener('mouseup', function (e) {
        if (document.getElementById("tooltip").className == "tooltip1") {
            document.getElementById("tooltip").className = "tooltip2";
        }
        textSelected()
    }, false)
    document.body.addEventListener('touchend', function (e) {
        if (document.getElementById("tooltip").className == "tooltip2") {
            document.getElementById("tooltip").className = "tooltip1";
        }
        textSelected()
    }, false)
}, false)

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

http://www.facebook.com/sharer.php?s=100&p[title]=a title&p[summary]=a description &p[url]=http://www.linkhere.com&p[images][0]=http://www.linkhere.com/image.jpg