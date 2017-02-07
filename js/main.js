(function() {
	console.log('run');

	var canvas = document.getElementById("canvas");
	var graphics = new Graphics(canvas.getContext('2d'),
		canvas.width, canvas.height);

	var systemParticles = new SystemParticle();

	var createParticles = function(count, x, y) {
		for (var i = 0; i < count; i++) {
			systemParticles.generate(x, y);
		}
	}

	createParticles(10, graphics.width/2, graphics.height/2);
	
	var xxx = 0;
	setInterval(function() {
		graphics.clear();
		systemParticles.render(graphics);	
	}, 30);
})();

