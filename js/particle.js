class Particle {
	constructor(x, y, color, radius, vx, vy) {
		this.x = x;
		this.y = y;
		this.color = color;
		this.radius = radius;
		this.vx = vx;
		this.vy = vy;
	}

	update() {
		this.x += this.vx;
		this.y += this.vy;
	}
	draw(graphics) {
		graphics.fillCircle(this.x, this.y, 
			this.radius, this.color);
	}
}