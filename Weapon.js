function Weapon(damage) {
	
	var _damage = damage;
	
	this.getDamage = function() {
		return _damage;
	};
}