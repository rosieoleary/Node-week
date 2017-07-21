var fs = require("fs");

fs.readFile("Text.txt", function(err,data){
	
	if (err){
		console.error("Download Failed",error);
	}
	else{
		console.log(data.toString());
		
	}
});
	console.log("Program has ended");
