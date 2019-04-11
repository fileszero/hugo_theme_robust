(function () {
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
})();
