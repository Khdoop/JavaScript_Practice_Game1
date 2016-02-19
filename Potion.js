function Potion(count) {
	
	var _count = count;
	
	this.getCount = function() {
		return _count;
	};
	
	this.setCount = function(int) {
		_count = int;
	};
	
}

Potion.prototype.use = function() {
	this.setCount(this.getCount() - 1);
}