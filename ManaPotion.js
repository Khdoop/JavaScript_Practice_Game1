function ManaPotion(count) {
	
	Potion.call(this, count);
	
}

ManaPotion.prototype = Object.create(Potion.prototype);
ManaPotion.prototype.constructor = ManaPotion;