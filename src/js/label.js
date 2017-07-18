import Button from './button';

const CLASS_NAME = 'B_Label';

const Label = function(options) {
  this.options = options;
  this.el = this.createEl();
  this.container = document.getElementById(options.id);
  this.container.appendChild(this.el);

  const button = new Button({
    text: 'x',
    spanEl: this.el
  });
  this.el.appendChild(button.createEl());
}

Label.prototype.createEl = function() {
  const el = document.createElement('span');
  el.textContent = this.options.text || 'B_Label';
  el.className = CLASS_NAME;
  return el;
}

export default Label;

// class Label
// {
//   constructor()
//   {

//   }
  
//   createEl()
//   {

//   }
// }