var fs = require("fs");
var data = "";

var readerStream = fs.createReadStream("input.txt");

readerStream.setEncoding("UTF8");

readerStream.on("data",function(chunk){
	console.log("this is data: "+data);
	data+=chunk;
	console.log("this is data: "+data);
	
});
readerStream.on("end",function(){
	console.log(data);
});

readerStream.on("error",function(err){
	
	console.log(err.stack);
});

var data = "Who cares!!!!";

var writerStream=fs.createWriteStream("output.txt");

writerStream.write(data,"UTF8");

writerStream.end();

writerStream.on("finish", function(){
	
	console.log("Write completed.");
});
writerStream.on("error", function(err){
	console.log(err.stack);
});

