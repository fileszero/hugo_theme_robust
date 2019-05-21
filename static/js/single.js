(function () {
    // generate header link
    function createLink(aId) {
        var t = document.createElement("a");
        t.className = "fa fa-link header-link ";
        t.href = "#" + aId;
        return t;
    };

    function appendHeaderLink(e) {
        for (var headers = document.getElementsByTagName("h" + e), i = 0; i < headers.length; i++) {
            var header = headers[i];
            if (0 !== header.id && "" !== header.id) {
                header.appendChild(createLink(header.id));
            }
        }
    }

    for (var t = 2; t <= 4; t++) {
        appendHeaderLink(t)
    }

    // code block filename
    var codeBlocks = document.body.getElementsByClassName("highlight");

    for (i = 0; i <= codeBlocks.length - 1; i++) {
        var code = codeBlocks[i].getElementsByTagName("code");
        if (code) {
            var codeName = code[0].className.split(":")[1];
            if (codeName) {
                var div = document.createElement('div');
                div.textContent = codeName;
                div.classList.add('code-name');
                //codeBlocks[i].insertBefore(div, codeBlocks[i].firstElementChild);
                codeBlocks[i].insertBefore(div, codeBlocks[i].firstElementChild);
            }
        }
    }
})();
