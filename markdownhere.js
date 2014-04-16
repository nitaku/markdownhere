(function() {
    // initialize showdown.js
    var converter = new Showdown.converter();
    
    // find all elements with class x-mdhere and convert their markdown content into HTML
    var markdown_els = document.getElementsByClassName('x-mdhere');
    for (var i=0; i < markdown_els.length; i++) {
        // find the first text node
        var text = '';
        for (var j=0; j < markdown_els[i].childNodes.length; j++) {
            var child = markdown_els[i].childNodes[j];
            if (child.nodeName === '#text') {
                text = child.nodeValue;
                break;
            }
        }
        
        // replace the content with the converted markdown
        markdown_els[i].innerHTML = converter.makeHtml(text);
    }
})();