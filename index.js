const express = require('express');
const server = express();

var UWI = {};

server.get('/', (req, res) => {
    res.send('<!DOCTYPE html><html lang="en"><head>    <meta charset="UTF-8">    <meta http-equiv="X-UA-Compatible" content="IE=edge">    <meta name="viewport" content="width=device-width, initial-scale=1.0">    <title>Document</title></head><body>        <div class="web">        <div class="pro">            <input type="text" placeholder="Pass Name" id="pn">            <input type="text" placeholder="Pass Code" id="pc">            <button onclick="bc()">Done</button>            <button onclick="bc9()">View</button>        </div>        <textarea id="ta"></textarea>        <iframe src=""class="ta"></iframe>    </div>    <div class="tbar">        <h1>RoboWebToastar.com</h1>        <div class="d">            <span onclick="bcn()">Create</span>        <span onclick="bcr()">Remove</span>        </div>    </div>    <style>        *{            margin: 0;            padding: 0;        }        body{            height: 200vh;            display: flex;            align-items: center;            justify-content: center;        }        .tbar{            position: absolute;            top: 0;            left: 0;            width: 100%;            height: 50px;            background: linear-gradient(30deg, #0677f879, rgba(255, 0, 191, 0.384));            display: flex;        }        .tbar h1{            color: rgba(255, 255, 255, 0.247);            padding: 5px;            font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;        }        .tbar .d{            width: 80%;            height: 100%;            /* background: #444; */        }        .tbar .d span{            float: right;            color: rgba(255, 255, 255, 0.342);            font-size: 3ex;            font-family: sans-serif;            display: flex;            align-items: center;            justify-content: center;            height: 40px;            width: 100px;            margin: 5px;            border-radius: 5px;            background: rgba(255, 255, 255, 0.11);        }        .web{            position: absolute;            display: flex;            align-items: center;            justify-content: center;            height: 100%;            width: 100%;            top: 0;            left: 0;        }        .web .pro{            display: flex;        }        .web .pro input{            outline: none;            height: 20px;            padding: 10px;            border-radius: 3px;            margin: 5px;            color: rgba(17, 17, 17, 0);            border: rgba(85, 85, 85, 0.274) solid 2px;            color: orange;        }        .web .pro button{            padding: 15px;            height: 20px;            display: flex;            align-items: center;            justify-content: center;            position: relative;            top: 10px;            border: 2px solid rgba(0, 102, 255, 0.418);            background: none;            font-family:"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;            font-weight: 900;            color: rgba(0, 102, 255, 0.418);            font-size: 2ex;            border-radius: 2px;        }        input::placeholder{            color: rgba(0, 102, 255, 0.418);            font-weight: 900;            /* font-family:; */        }        ::-webkit-scrollbar{            width: 10px;            height: 10px;            background: rgb(51, 51, 51);        }        ::-webkit-scrollbar-thumb{            background: rgba(255, 255, 255, 0.527);        }        #ta{            position: absolute;            top: 60%;            left: 25%;            width: 50%;            height: 50%;            padding: 10px;            margin: 10px;            resize: none;            outline: none;        }        .ta{            position: absolute;            top: 120%;            left: 25%;            width: 50%;            height: 50%;            padding: 10px;            margin: 10px;            resize: none;            outline: none;            border: 1px solid #444;        }    </style>    <script>        var pn = "";        var ue = 1;        var pc = "";        var web = document.querySelector(".ta");        var tbar = document.querySelector(".tbar");        window.addEventListener("scroll", (scroll) => {            var y = window.scrollY;            var x = window.scrollX;            tbar.style.top = y + "px";        });                function bc9(){            window.open("https://5000-gold-gecko-dta5mhwy.ws-us18.gitpod.io/web/"+pn);        }        function bcr(){            web.setAttribute("src", "https://5000-gold-gecko-dta5mhwy.ws-us18.gitpod.io/Remove/" + pn + "/" + pc);        }        function bcn(){            web.setAttribute("src", "https://5000-gold-gecko-dta5mhwy.ws-us18.gitpod.io/New-User/" + pn + "/" + pc);        }        function bcn4(){            web.setAttribute("src", "https://5000-gold-gecko-dta5mhwy.ws-us18.gitpod.io/User-Web-Code/" + pn + "/" + pc + "/" + document.getElementById("ta").value);        }var f1 = 0;        function bc(){            pn = document.getElementById("pn").value;            pc = document.getElementById("pc").value;            ue = 0;            web.setAttribute("src", "https://5000-gold-gecko-dta5mhwy.ws-us18.gitpod.io/web/" + pn);            if (f1 == 0){            let request = new XMLHttpRequest();        request.open("GET", "https://5000-gold-gecko-dta5mhwy.ws-us18.gitpod.io/web/"+pn);        // request.responseType = "text";    f1 = 90;            console.log(request)    }        // request.onload = function() {            // console.log(request.responseText);            // };        }        setInterval(function (){                        web.setAttribute("src", "https://5000-gold-gecko-dta5mhwy.ws-us18.gitpod.io/web/" + pn);            bcn4();        }, 1000);    </script></body></html>');
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
    if (dt[2] == 'Code-ox33'){
        console.log('yes');
    }
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

server.listen(process.env.PORT || 5000)
