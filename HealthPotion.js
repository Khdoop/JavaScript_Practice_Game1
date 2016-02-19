function HealthPotion(count) {
	
	Potion.call(this, count);
	
}

HealthPotion.prototype = Object.create(Potion.prototype);
HealthPotion.prototype.constructor = HealthPotion;