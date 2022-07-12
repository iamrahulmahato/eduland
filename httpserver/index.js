const http = require("http");
const port = 8000;
const fs = require("fs")



function openfirst(req, res) {
    console.log(req.url)

    fs.readFile('../index.html', function(err, data) {
        if (err) {
            console.log('error', err)

        }
        return res.end(data);
    })

}

const server = http.createServer(openfirst);

server.listen(port, function(err) {
    if (err) {
        console.log(err);
        return;
    }

    console.log("Server is running", port);

})