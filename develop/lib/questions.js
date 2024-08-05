const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { createDocument } = require('./svg.js');





class SVG {
    constructor() {
        this.text = '';
        this.textColor = '';
        this.shape = '';
        this.shapeColor = '';
    }
    // generate() {
    //     console.error('Child class must implement as generate() method.')
  
    //  }
    questions() {
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
                if (this.text.length > 3) {
                 console.error('Please keep your SVG text three characters or below.')
                 return err
                }
            })
            .then(() => {
                return writeFile(
                    join('test.svg'),  createDocument(this.shape, this.shapeColor, this.text, this.textColor) 
            )
               
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