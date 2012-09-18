var fs = require('fs');
var path = require('path');

exports.init = function(root){
	if(!global.railway){return;}
	var configFilePath = path.join(root, 'config', 'database.json');
	try{
		var config = JSON.parse(fs.readFileSync(configFilePath, 'utf-8'))[app.set('env')];
	}
	catch(e){
		console.log('Could not parse config/database.json');
		throw e
	}
	var mongoose = require('mongoose');
	mongoose.connect(config.url);
	global['mongoose'] = mongoose;
}