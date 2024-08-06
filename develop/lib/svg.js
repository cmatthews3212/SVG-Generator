const Square = require('./square.js')
const Circle = require('./circle.js')
const Triangle = require('./triangle.js');
// const SVG = require('./questions.js');



function createDocument(shape, shapeColor, text, textColor) {
    // const square = new Square().render();
    // const triangle = new Triangle().render();
    // const circle = new Circle().render();
    let svgShape;

    if (shape === 'Circle') {
        svgShape = new Circle(text, shapeColor, textColor).render()
    } else if (shape === 'Square') {
        svgShape = new Square(text, shapeColor, textColor).render()

    } else if (shape === 'Triangle') {
        svgShape = new Triangle(text, shapeColor, textColor).render()

    }

    return svgShape;
}


module.exports = {createDocument}