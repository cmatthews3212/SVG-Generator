const Square = require('../lib/square.js');
// const SVG = require('../lib/questions.js');

describe('Square', () => {
    it('should render square logo text, a text color, and shape color.', function () {
        const expectedHtml = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <rect width="150" height="150" x="10" y="10" style="fill:${this.shapeColor};" />
                <text fill="${this.textColor}" font-size="45" x="40" y="100">${this.text}</text>
                </svg>`
const square = new Square();
expect(square.render()).toEqual(expectedHtml);
    })
})