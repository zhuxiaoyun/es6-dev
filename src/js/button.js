const CLASS_NAME = 'B_Button';

const Button = function(options) {
  this.options = options;
  this.el = this.createEl();
  if (options.id) {
    this.container = document.getElementById(options.id);
    this.container.appendChild(this.el);
  }
}

Button.prototype.createEl = function() {
  const el = document.createElement('button');
  el.textContent = this.options.text || 'btn';
  el.className = CLASS_NAME;
  el.addEventListener('click', () => {
    this.options.spanEl.remove();
    // (this.options.spanEl).parentNode.removeChild(this.options.spanEl);
  });
  return el;
}

export default Button;