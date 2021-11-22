const express = require('express');
const server = express();

var UWI = {};

server.get('/', (req, res) => {
    res.send('Web');
});
server.get('/New-User/*', (req, res) => {
    var dt = req.url.replace('/New-User/', '').split('/');
    UWI[dt[0]] = ['', dt[1]];
    res.send('Done');
    console.log(UWI);
});
server.get('/Remove/*', (req, res) => {
    var dt = req.url.replace('/Remove/', '').split('/');
    delete UWI[dt[0]];
    res.send('Done');
    console.log(UWI);
});

server.get('/User-Web-Code/*', (req, res) => {
    var dt = req.url.replace('/User-Web-Code/', '').split('/');
    UWI[dt[0]] = [dt[2], dt[1]];
    res.send('Done');
    console.log(UWI);
});

server.get("/web/*", (req, res) => {
    var get_d = UWI[String(req.url).replace('/web/', '')][0];
    if (get_d != undefined){
        res.send(UWI[String(req.url).replace('/web/', '')][0]);
    }
    else{
        res.send('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title></head><body><img src="https://www.areinfotech.com/img/404.gif" class="page"><style>*{margin: 0;padding: 0;}body{height: 100vh;display: flex;align-items: center;justify-content: center;}.page{width: 100%;height: 100%;object-fit: cover;background-size: cover;}</style></body></html>');
    }
});

server.get('/*', (req, res) => {
    res.send('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title></head><body><img src="https://www.areinfotech.com/img/404.gif" class="page"><style>*{margin: 0;padding: 0;}body{height: 100vh;display: flex;align-items: center;justify-content: center;}.page{width: 100%;height: 100%;object-fit: cover;background-size: cover;}</style></body></html>');
});

server.listen(5000)