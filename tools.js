var 
  node_uuid = require('node_uuid');

function uuid(){
	return node_uuid.v4().replace(/-/g, '');
}

exports.tools = {
	uuid : uuid
} 