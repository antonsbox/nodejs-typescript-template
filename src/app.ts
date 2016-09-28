import * as http from "http";
module HttpServerTest {

    class App {
        httpServer: any;

        constructor() {
            this.httpServer = http.createServer(this.onRequest).listen(8888);

        }


        onRequest(req, res) {
            res.writeHead(200, {"Content-Type": "text/plain"});
            res.write("Hello World!!");
            res.end();
        }
    }
    var mainApp = new App();
}