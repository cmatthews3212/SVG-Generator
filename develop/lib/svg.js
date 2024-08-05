const Square = require('./square.js')
const Circle = require('./circle.js')
const Triangle = require('./triangle.js');
// const SVG = require('./questions.js');



function createDocument(shape, svg) {
    const square = new Square().render();
    const triangle = new Triangle().render();
    const circle = new Circle(svg.text, svg.shapeColor, svg.textColor).render();

    if (shape === 'Circle') {
        return circle
    } else if (shape === 'Square') {
        return square;
    } else if (shape === 'Triangle') {
        return triangle;
    }
}


module.exports = {createDocument}