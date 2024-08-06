const Shapes = require('./shapes.js');

class Square extends Shapes {
        constructor(text, shapeColor, textColor) {
                super();
                this.text = text;
                this.shapeColor = shapeColor;
                this.textColor = textColor;
            }
    render() {
        
         return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <rect width="150" height="150" x="10" y="10" style="fill:${this.shapeColor};" />
                <text fill="${this.textColor}" font-size="45" x="40" y="100">${this.text}</text>
                </svg>`
        }
}

module.exports = Square;