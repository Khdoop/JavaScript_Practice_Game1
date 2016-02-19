var p1 = new Player(80, 50, [new Weapon(3), new HealthPotion(2), new ManaPotion(5)]);
var p2 = new Player(95, 40, [new Weapon(2), new HealthPotion(2), new ManaPotion(2)]);

var interval = setInterval(function() {
	
	if (p1.getHealth() <= 0 || p2.getHealth() <= 0) window.clearInterval(interval);
	
	if (p1.getHealth() < 15 && p1.getInventory()[1].getCount() > 0) {
		p1.usePotion('health');
	} else if (p1.getMana() < 50 && p1.getInventory()[2].getCount() > 0) {
		p1.usePotion('mana');
	} else {
		p1.attack(p2);
	}

	if (p2.getHealth() < 15 && p2.getInventory()[1].getCount() > 0) {
		p2.usePotion('health');
	} else if (p2.getMana() < 50 && p2.getInventory()[2].getCount() > 0) {
		p2.usePotion('mana');
	} else {
		p2.attack(p1);
	}
	
}, 1000);