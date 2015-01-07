var 
  redis = require('redis'),
  // config = require('./config.json'),
  client = redis.createClient(6379, '192.168.7.220', {});
  // tools = require('./tools');

var log = console.log;

client.on('error',function (err) {
	if(err) throw err;
});

// var match = {
// 	Object:Object2redis,
// 	String:String2redis,
// 	Array:Array2redis
// };

client.set('testarr',JSON.stringify([{name:'magic'},2,3,4,5]),function(err){
	if(err) throw err;
});

client.get('testarr',function(err,object){
	if (err) throw err;

	log(object);
});

// function Object2redis(key,object){

// }

// function String2redis(key,str){
	
// }

// function Array2redis(key,array){

// }

// function CheckType(redisKey,o){
// 	var 
// 	  type = tools.GetType(o),
// 	  hander = match[type];
// 	if(hander) hander(redisKey,o);
// }

// exports.redis = CheckType;