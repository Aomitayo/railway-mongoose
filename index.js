var fs = require('fs');
var path = require('path');

exports.init = function(root){
	if(!global.railway){return;}
	var configFilePath = path.join(root, 'config', 'database.json');
	var config;
	try{
		config = JSON.parse(fs.readFileSync(configFilePath, 'utf-8'))[app.set('env')];
	}
	catch(e){
		console.log('Could not parse config/database.json');
		throw e;
	}
	if(global.mongoose){
		global.mongoose.disconnect(function(){
			global.mongoose.connect(config.url);
		});
	}
	else{
		var mongoose = require('mongoose');
		mongoose.connect(config.url);
		global['mongoose'] = mongoose;
	}
}