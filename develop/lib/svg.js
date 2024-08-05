const Square = require('./square.js')
const Circle = require('./circle.js')
const Triangle = require('./triangle.js');

function createDocument(shape) {
    const square = new Square().render();
    const triangle = new Triangle().render();
    const circle = new Circle().render();

    if (shape === 'Circle') {
        return circle;
    } else if (shape === 'Square') {
        return square;
    } else if (shape === 'Triangle') {
        return triangle;
    }
}

module.exports = {createDocument}