const Shapes = require('./shapes.js')
const SVG = require('./questions.js');


class Circle extends Shapes {
    constructor(text, shapeColor, textColor) {
        super();
        this.text = text;
        this.shapeColor = shapeColor;
        this.textColor = textColor;
    }

   
    render() {
            return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="40" fill="${this.shapeColor}" />
  <text fill="${this.textColor}" font-size="30" x="21" y="60">${this.text}</text>
</svg>`
            
            }
        
        
}

module.exports = Circle;

