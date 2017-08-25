const http = require('http');
const fs = require('fs');

function readF(url) {
    return new Promise((resolve, reject) => {
        fs.readFile(url, (err, data) => {
            if (err) reject(err);
            resolve(data);
        })
    })
}
// async function resolveRead(call) {
//     let data = await readF('./http-server/city.json');
//     call(data);
// }


const server = http.createServer((req, res) => {





    if (req.url == '/city' && req.method == 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
        try {

            (async() => {
                let data = await readF('./http-server/city.json');
                res.end(data);

            })()
        } catch (error) {
            console.log(error)
        }
        // resolveRead(res.end);




        // fs.readFile('./http-server/city.json', (err, data) => {
        //     if (err) res.end(err);

        //     res.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });

        //     res.end(data);
        // })

    }

    if (req.url == '/prize') {
        res.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });

        try {

            (async() => {
                let data = await readF('./http-server/prize.json');
                res.end(data);

            })()
        } catch (error) {
            console.log(error)
        }

    }

    if (req.url.split('?')[0] == '/city2') {
        res.writeHead(200, { 'Content-Type': 'application/json;charset=utf-8' });
        var m = req.url.split('?')[1].split('&')[0].split('=')[1];
        console.log(m);
        try {

            (async() => {
                let data = await readF('./http-server/prize.json');
                res.end(m + '(' + data + ')');

            })()
        } catch (error) {
            console.log(error)
        }

    }


});
server.on('listening', () => {
    console.log('listen')
})

server.listen(8081, () => {
    console.log('server start::', server.address().address, '::', server.address().port);
})