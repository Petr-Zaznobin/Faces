const fs = require('fs');  //Работа с файлами
const gm = require('gm');//библиотеки для работы с изображениями



const express = require("express");
const multer  = require("multer");
const app = express();

app.use(express.static('public'));
app.use(multer({dest:"uploads"}).single("filedata"));


app.post("/upload", function (req, res) {
   
    let filedata = req.file;
    console.log(filedata);
    if(!filedata)
        res.send("Ошибка при загрузке файла");
    else
        res.send("Файл загружен");
        /*(console.log(filedata.filename)
        gm('uploads/'+filedata.filename+'jpeg').identify(function(err, value) {  //Получение информации об изображении
            console.log(value);
        
            if(err) {
                console.log(err);
            }
        });   */
});


console.log("localhost:3000") 
app.listen(3000);

/*
 

*/

/*
https://devacademy.ru/article/izmenenie-razmera-i-upravlenie-izobrazheniyami-s-pomoschyu-javascript-napryamuyu-iz
https://habr.com/ru/post/120562/
https://trends.rbc.ru/trends/industry/6050ac809a794712e5ef39b7
https://github.com/lampaa/imageLib
*/