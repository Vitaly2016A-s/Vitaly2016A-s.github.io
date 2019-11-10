/*
* @Author: User
* @Date:   2018-06-21 20:58:49
* @Last Modified by:   User
* @Last Modified time: 2018-06-21 21:46:44
*/

class Options {
	constructor(height, width, bg, fontSize, textAlign) {
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
	}

	divCreator() {
		let newDiv = document.createElement("div"); 
		newDiv.innerHTML = prompt("ВВедите текст", "Привет, Мир!");
  	document.body.appendChild(newDiv);
  	newDiv.style.cssText = `height: ${this.height}; width: ${this.width}; background-color: ${this.bg}; font-size: ${this.fontSize}; text-align: ${this.textAlign};`;
	} 
}

let options = new Options("150px", "200px", "red", "25px", "right");
options.divCreator();

console.log("Done!");