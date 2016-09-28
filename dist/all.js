"use strict";
var http = require("http");
var HttpServerTest;
(function (HttpServerTest) {
    var App = (function () {
        function App() {
            this.httpServer = http.createServer(this.onRequest).listen(8888);
        }
        App.prototype.onRequest = function (req, res) {
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.write("Hello World!!");
            res.end();
        };
        return App;
    }());
    var mainApp = new App();
})(HttpServerTest || (HttpServerTest = {}));
//# sourceMappingURL=app.js.map