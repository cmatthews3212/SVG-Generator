const Triangle = require('../lib/triangle.js');
// const SVG = require('../lib/questions.js');

describe('Triangle', () => {
    it('should render circle logo text, a text color, and shape color.', function () {
        const expectedHtml = `<svg height="220" width="500" xmlns="http://www.w3.org/2000/svg">
                <polygon points="100,10 150,190 50,190" style="fill:${this.shapeColor};" />
                <text fill="${this.textColor}" font-size="30" x="70" y="165">${this.text}</text>
                </svg>`
const triangle = new Triangle();
expect(triangle.render()).toEqual(expectedHtml);
    })
})