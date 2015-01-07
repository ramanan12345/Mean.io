var 
  MongoClient = require('mongodb').MongoClient,
  format = require('util').format,
  log = console.log;

MongoClient.connect('mongodb://127.0.0.1:27017/testDb',function(err,db){
	if(err) throw err;

	var collection = db.collection('test');

	collection.count(function(err,count){
		if(err) throw err;

		log(format("coount = $s",count));
	});

	collection.find().toArray(function(err,result){
		if(err) throw err;

		log(result,result[3].name);

		db.close();
	});
})
