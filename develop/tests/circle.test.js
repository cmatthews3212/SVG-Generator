const Circle = require('../lib/circle.js');
// const SVG = require('../lib/questions.js');

describe('Circle', () => {
    it('should render circle logo text, a text color, and shape color.', function () {
        const expectedHtml = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="40" fill="${this.shapeColor}" />
  <text fill="${this.textColor}" font-size="30" x="21" y="60">${this.text}</text>
</svg>`
const circle = new Circle();
expect(circle.render()).toEqual(expectedHtml);
    })
})