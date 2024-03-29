/**
 * @author jwill
 */
initTTTGame = function () {
	
}

now.drawTTTXSprite = function (x, y) {
		var ctx = $("#board").get(0).getContext("2d");
		
		// Save the canvas state and translate
		ctx.save();
		ctx.translate(x,y);
		
		ctx.lineWidth = 2;
		ctx.beginPath();
		
		ctx.moveTo(10,10);
		ctx.lineTo(190,190);
		ctx.moveTo(190,10);
		ctx.lineTo(10,190);
		ctx.stroke();
		
		// Restore canvas state
		ctx.restore();
}
now.drawTTTOSprite = function(x, y) {
		var ctx = $("#board").get(0).getContext("2d");
		
		// Save the canvas state and translate
		ctx.save();
		ctx.translate(x,y);
		
		ctx.lineWidth = 2;
		ctx.beginPath();
		
		ctx.arc(100,100, 90, 0, 2*Math.PI);
		ctx.stroke();

		// Restore canvas state
		ctx.restore();
}
	
now.drawTTTGameBoard = function() {
		// Remove current game board which may not be a canvas
		$("#playingArea").html(""); 	 
		$("#playingArea").append("<canvas id='board'/>");
		$("#board").attr('width',800).attr('height', 600);
		var ctx = $("#board").get(0).getContext("2d");

		ctx.beginPath();
		ctx.moveTo(200,0);
		ctx.lineTo(200,600);
		
		ctx.moveTo(400,0);
		ctx.lineTo(400,600);
		
		ctx.moveTo(0,200);
		ctx.lineTo(600,200);
		
		ctx.moveTo(0,400);
		ctx.lineTo(600,400);
		
		ctx.stroke();
}

now.receiveGameState = function (state) {
	// Clear the game board
	canvas = $("#board").get(0);
	canvas.width = canvas.width;
	now.drawTTTGameBoard();
	// Draw sprites
	gameboard = state.board;
	for (var i = 0; i<3; i++) {
		for (var j = 0; j<3; j++) {
			cell = gameboard[i][j];
			if (cell != "-") {
				x = i * 200;
				y = j * 200;
				if (cell == "X") 
					now.drawTTTXSprite(x,y);
				else now.drawTTTOSprite(x,y);
			}
		}
	}
	// Show message
	context = canvas.getContext("2d");
	context.fillText(state.message, 700, 400);
}

$().ready(function () {
window.canvas = $("#board").get(0)

handleMouseClick = function(evt) {
		x = evt.clientX - canvas.offsetLeft;
		y = evt.clientY - canvas.offsetTop;
		
		console.log("x,y:"+x+","+y);
}

canvas.addEventListener("click", handleMouseClick, false);
});
	
	


