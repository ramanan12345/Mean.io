
function getType(o){
	var toString = Object.prototype.toString;
	var t = toString.call(o);
	var start = t.indexOf(' ');
	var end = t.length - 1;
	return t.substring(start,end);
}

exports.tools = {
	GetType : getType
} 