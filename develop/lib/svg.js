const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');
// const {createDocument } = require('../index.js')

class SVG {
    constructor() {
        this.text = '';
        this.textColor = '';
        this.shape = '';
        this.shapeColor = '';
    }
    generate() {
        return inquirer
            .prompt([
                {
                    type: 'input',
                    message: 'Please input three characters for the text of your logo.',
                    name: 'text'
                },
                {
                    type: 'input',
                    message: 'Please enter a hex code for the color of your text.',
                    name: 'textColor'
                },
                {
                    type: 'list',
                    message: 'Please select a shape for your text.',
                    choices: ['Circle', 'Square', 'Triangle'],
                    name: 'shape'
                },
                {
                    type: 'input',
                    message: 'Please enter a hex code for the color of your shape.',
                    name: 'shapeColor'
                }
            ])
            .then(({text, textColor, shape, shapeColor}) => {
                this.text = text;
                this.textColor = textColor;
                this.shape = shape;
                this.shapeColor = shapeColor;
            })
            .then(() => {

                if(this.shape === 'Circle') {
                    return writeFile(
                        'test.svg', 
                        `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="50" cy="50" r="40" fill="${this.shapeColor}" />
                        </svg>`
                    );
                } else if (this.shape === 'Square') {
                    return writeFile(
                        'test.svg',
                        `<svg width="300" height="170" xmlns="http://www.w3.org/2000/svg">
                        <rect width="150" height="150" x="10" y="10" style="fill:${this.shapeColor};" />
                        </svg>`
                    );
                } else if (this.shape === 'Triangle') {
                    return writeFile(
                        'test.svg',
                        `<svg height="220" width="500" xmlns="http://www.w3.org/2000/svg">
                        <polygon points="100,10 150,190 50,190" style="fill:${this.shapeColor};" />
                        </svg>`
                    );
                }
            })
            .then(() => {
                console.log('Created test file!')
            })
            .catch((err) => {
                console.log(err) 
                console.log('Oops. Something went wrong.')
            })
    }
}


module.exports = SVG