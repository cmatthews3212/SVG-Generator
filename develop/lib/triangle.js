const Shapes = require('./shapes.js')

class Triangle extends Shapes {
        constructor(text, shapeColor, textColor) {
                super();
                this.text = text;
                this.shapeColor = shapeColor;
                this.textColor = textColor;
            }
    render() {
        return  `<svg height="300" width="200" xmlns="http://www.w3.org/2000/svg">
                <polygon points="100,10 150,190 50,190" style="fill:${this.shapeColor};" />
                <text fill="${this.textColor}" font-size="30" x="70" y="165">${this.text}</text>
                </svg>`
        
        } 
}

module.exports = Triangle;