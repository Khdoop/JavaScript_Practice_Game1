Player.Defaults = {
	Health: 100,
	Mana: 100,
	Attack: 100,
	Defense:100
}

function Player(attack, defense, arrayInventory) {
	
	var _health = Player.Defaults.Health;
	
	var _mana = Player.Defaults.Mana;
	
	var _attack = attack;
	
	var _defense = defense;
	
	var _inventory = arrayInventory;
	
	var _isAlive = true;
	
	this.getHealth = function() {
		return _health;
	};
	
	this.setHealth = function(number) {
		_health = number;
	};
	
	this.getMana = function() {
		return _mana;
	};
	
	this.getAttack = function() {
		return _attack;
	};
	
	this.getDefense = function() {
		return _defense;
	};
	
	this.setMana = function(number) {
		_mana = number;
	};
	
	this.getInventory = function() {
		return _inventory;
	};
	
	this.setInventory = function(array) {
		_inventory = array;
	};
	
	this.getIsAlive = function() {
		return _isAlive;
	};
	
	this.setIsAlive = function(boolean) {
		_isAlive = boolean;
	};
	
}

Player.prototype.attack = function(enemy) {
	/*if (enemy.getIsAlive() == false) {
		console.log('enemy is dead');
		return;
	}*/
	
	var damage = 1;
	var inventory = this.getInventory();
	var random = (Math.round(Math.random() * 10)) % 2;
	var totalDmg;
	
	//console.log(random);
	
	for(var i in inventory) {
		if (inventory[i].constructor.name == 'Weapon') damage += inventory[i].getDamage();
	}
	
	if (this.getMana() > 49 && random) {
		this.setMana(this.getMana() - 50);
		
		damage *= 2;
		console.log('crit');
	}
	
	totalDmg = (this.getAttack() - enemy.getDefense()) / 10 + damage;
	
	enemy.setHealth(enemy.getHealth() - totalDmg);
	
	console.log('dmg: ' + totalDmg + ' enemy hp: ' + enemy.getHealth());
	
	if (enemy.getHealth() == 0) enemy.setIsAlive(false);
};

Player.prototype.usePotion = function(type) {
	if (this.getIsAlive() == false) {
		console.log('you are dead');
		return;
	}
	
	var potion = type;
	var inventory = this.getInventory();
	
	for (var i in inventory) {
		if (inventory[i].constructor.name == 'HealthPotion' || inventory[i].constructor.name == 'ManaPotion') {
			inventory[i].use();
			
			switch(potion) {
				case 'health':
					this.setHealth(100);
					console.log('full health');
					break;
				case 'mana':
					this.setMana(100);
					console.log('full mana');
					break;
			}
			
			break;
			
		}
	}
};














