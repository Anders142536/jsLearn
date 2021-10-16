(function() {
    'use strict'
    paper.install(window)
    paper.setup(document.getElementById('mainCanvas'))

    /* drawing a grid of circles
    for(var x = 25; x < 400; x += 50) {
        for(var y = 25; y < 400; y += 50) {
            Shape.Circle(x, y, 20).fillColor = 'green';
        }
    }*/

	Shape.Circle(200, 200, 80).fillColor = 'black'

	var text = new PointText(200, 200)
	text.justification = 'center'
	text.fillColor = 'white'
	text.fontSize = 20
	text.content = 'bitch'


    var tool = new Tool()
    tool.onMouseDown = function(event) {
        Shape.Circle(event.point.x, event.point.y, 20).fillColor = 'green';
    }

    
    paper.view.draw()
}())