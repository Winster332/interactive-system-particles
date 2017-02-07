class Graphics { 
  constructor(ctx, width, height) {
  	this.width = width;
  	this.height = height;
  	this.ctx = ctx;
  }
  drawCircle(x, y, radius, color) {
  	this.ctx.beginPath();
  	this.ctx.strokeStyle = color;
	  this.ctx.arc(x, y, radius, 0, Math.PI * 2, true);
	  this.ctx.stroke();
  }

  fillCircle(x, y, radius, color) {
  	this.ctx.beginPath();
    this.ctx.lineWidth = 1;
  	this.ctx.fillStyle = color;
	  this.ctx.arc(x, y, radius, 0, Math.PI * 2, true);
	  this.ctx.fill();
  }
  drawLine(x1, y1, x2, y2, color, size) {
  	this.ctx.strokeStyle = color;
    this.ctx.lineWidth = size;
  	this.ctx.moveTo(x1, y1);
  	this.ctx.lineTo(x1, y1);
  	this.ctx.lineTo(x2, y2);
  	this.ctx.stroke();
  }
  clear() {
  	this.ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}
