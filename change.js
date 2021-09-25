const fs = require('fs');  //Работа с файлами
var imageLib = require('./imageLib.js');


var soursImg = './uploads'
var outImg = './out'

const xSize = 10;
const ySize = 10;




function main() {
    //var data={};
    fs.readdir(soursImg, (err, files) => {
        console.log(files);
        files.forEach(file => {

            console.log('+>>' + soursImg + '/' + file);
            imageLib(soursImg + '/' + file).pngToData(function () {

                this.resize(xSize, ySize, true);
                var data=[]

                for (var i = 0; i < xSize; i++) {
                    for (var j = 0; j < ySize; j++) {
                        var pix = this.getPixel(i, j); // [ 0, 0, 0, 255 ]
                        var gray = Math.round( (pix[0] + pix[1] + pix[2]) / 3);
                        this.setPixel(i, j, gray, gray, gray, 255); // [255, 0, 0, 255] red
                       /*
                        if(!data[file])
                            data[file]=[]*/
                        data.push(gray)
                    }
                }

                this.toJpeg(outImg + '/' + file);
                console.log('"'+file+'":['+data+'],')
            });

        });
    });
}
main();

//{A1:[255,35,645,111,564,.....],A2:[255,35,645,111,564.....],}



