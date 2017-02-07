class SystemParticle {
	constructor() {
		this.particles = Array();
		this.count = 0;
	}

	generate(x, y) {
		for (var i = 0; i < 1; i++) {
			var vel = this.getRandomV2(
				Math.random() * Math.PI/2, 
				Math.random() * Math.PI/2);
			var color = "#444";
			var radius = 2;

			this.addParticle(x, y, color, radius, vel.x, vel.y)
		}
	}

	getRandomV2(angle, length) {
		var dot = {x:0, y:0}
		dot.x = Math.cos(angle) * length;
		dot.y = Math.sin(angle) * length;
		return dot;
	}

	addParticle(x, y, color, radius, vx, vy) {
		this.particles[this.count] = 
			new Particle(x, y, color, radius, vx, vy);

		this.count++;
	}
	render(graphics) {
		for (var i = 0; i < this.particles.length; i++) {
			this.particles[i].update();
			

			for (var j = 0; j < this.particles.length; j++) {
				if (i != j) {
					var distance = Math.sqrt(
						Math.pow(this.particles[i].x - 
							this.particles[j].x,2) + 
						Math.pow(this.particles[i].y - 
							this.particles[j].y,2));
					this.drawLine(
						graphics,
						distance,
						this.particles[i],
						this.particles[j]
					);
				}
			}

			if (this.particles[i].x <= 0)
				this.particles[i].vx *= -1;
			if (this.particles[i].x >= graphics.width)
				this.particles[i].vx *= -1;
			if (this.particles[i].y <= 0)
				this.particles[i].vy *= -1;
			if (this.particles[i].y >= graphics.height)
				this.particles[i].vy *= -1;

			this.particles[i].draw(graphics);
		}
	}
	drawLine(graphics, distance, p1, p2) {
		if (distance != 0)
			if (distance <= 100)
				graphics.drawLine(p1.x, p1.y, p2.x, p2.y,
					"#000", 1/distance);
	}
}