(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var CLASS_NAME = 'B_Button';

var Button = function Button(options) {
  this.options = options;
  this.el = this.createEl();
  if (options.id) {
    this.container = document.getElementById(options.id);
    this.container.appendChild(this.el);
  }
};

Button.prototype.createEl = function () {
  var _this = this;

  var el = document.createElement('button');
  el.textContent = this.options.text || 'btn';
  el.className = CLASS_NAME;
  el.addEventListener('click', function () {
    _this.options.spanEl.remove();
    // (this.options.spanEl).parentNode.removeChild(this.options.spanEl);
  });
  return el;
};

exports.default = Button;

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Input = function Input(options) {
  this.options = options;
  this.el = this.createEl();
  this.container = document.getElementById(options.id);
  this.container.appendChild(this.el);
};

Input.prototype.createEl = function () {
  var el = document.createElement('input');
  var resource = callBack();
  el.addEventListener('change', function () {});
  return el;
};

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = callBack;
xhr.open("get", "../../province.json", true);
xhr.send(null);

function callBack() {
  if (xhr.readyState == 4) {
    if (xhr.status == 200) {
      console.log(xhr.responseText);
      return JSON.parse(xhr.responseText);
    }
  }
}

exports.default = Input;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _button = require('./button');

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CLASS_NAME = 'B_Label';

var Label = function Label(options) {
  this.options = options;
  this.el = this.createEl();
  this.container = document.getElementById(options.id);
  this.container.appendChild(this.el);

  var button = new _button2.default({
    text: 'x',
    spanEl: this.el
  });
  this.el.appendChild(button.createEl());
};

Label.prototype.createEl = function () {
  var el = document.createElement('span');
  el.textContent = this.options.text || 'B_Label';
  el.className = CLASS_NAME;
  return el;
};

exports.default = Label;

// class Label
// {
//   constructor()
//   {

//   }

//   createEl()
//   {

//   }
// }

},{"./button":1}],4:[function(require,module,exports){
'use strict';

var _label = require('./label');

var _label2 = _interopRequireDefault(_label);

var _input = require('./input');

var _input2 = _interopRequireDefault(_input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// for (let i=101; i<111; i++) {
//     let label = new Label({
//         id: 'container',
//         text: i
//     });
// }

var input = new _input2.default({
    id: 'container'
});

},{"./input":2,"./label":3}]},{},[4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYnV0dG9uLmpzIiwic3JjL2pzL2lucHV0LmpzIiwic3JjL2pzL2xhYmVsLmpzIiwic3JjL2pzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQ0FBLElBQU0sYUFBYSxVQUFuQjs7QUFFQSxJQUFNLFNBQVMsU0FBVCxNQUFTLENBQVMsT0FBVCxFQUFrQjtBQUMvQixPQUFLLE9BQUwsR0FBZSxPQUFmO0FBQ0EsT0FBSyxFQUFMLEdBQVUsS0FBSyxRQUFMLEVBQVY7QUFDQSxNQUFJLFFBQVEsRUFBWixFQUFnQjtBQUNkLFNBQUssU0FBTCxHQUFpQixTQUFTLGNBQVQsQ0FBd0IsUUFBUSxFQUFoQyxDQUFqQjtBQUNBLFNBQUssU0FBTCxDQUFlLFdBQWYsQ0FBMkIsS0FBSyxFQUFoQztBQUNEO0FBQ0YsQ0FQRDs7QUFTQSxPQUFPLFNBQVAsQ0FBaUIsUUFBakIsR0FBNEIsWUFBVztBQUFBOztBQUNyQyxNQUFNLEtBQUssU0FBUyxhQUFULENBQXVCLFFBQXZCLENBQVg7QUFDQSxLQUFHLFdBQUgsR0FBaUIsS0FBSyxPQUFMLENBQWEsSUFBYixJQUFxQixLQUF0QztBQUNBLEtBQUcsU0FBSCxHQUFlLFVBQWY7QUFDQSxLQUFHLGdCQUFILENBQW9CLE9BQXBCLEVBQTZCLFlBQU07QUFDakMsVUFBSyxPQUFMLENBQWEsTUFBYixDQUFvQixNQUFwQjtBQUNBO0FBQ0QsR0FIRDtBQUlBLFNBQU8sRUFBUDtBQUNELENBVEQ7O2tCQVdlLE07Ozs7Ozs7O0FDdEJmLElBQU0sUUFBUSxTQUFSLEtBQVEsQ0FBUyxPQUFULEVBQWtCO0FBQzlCLE9BQUssT0FBTCxHQUFlLE9BQWY7QUFDQSxPQUFLLEVBQUwsR0FBVSxLQUFLLFFBQUwsRUFBVjtBQUNBLE9BQUssU0FBTCxHQUFpQixTQUFTLGNBQVQsQ0FBd0IsUUFBUSxFQUFoQyxDQUFqQjtBQUNBLE9BQUssU0FBTCxDQUFlLFdBQWYsQ0FBMkIsS0FBSyxFQUFoQztBQUNELENBTEQ7O0FBT0EsTUFBTSxTQUFOLENBQWdCLFFBQWhCLEdBQTJCLFlBQVc7QUFDcEMsTUFBSSxLQUFLLFNBQVMsYUFBVCxDQUF1QixPQUF2QixDQUFUO0FBQ0EsTUFBSSxXQUFXLFVBQWY7QUFDQSxLQUFHLGdCQUFILENBQW9CLFFBQXBCLEVBQThCLFlBQU0sQ0FFbkMsQ0FGRDtBQUdBLFNBQU8sRUFBUDtBQUNELENBUEQ7O0FBU0EsSUFBSSxNQUFNLElBQUksY0FBSixFQUFWO0FBQ0EsSUFBSSxrQkFBSixHQUF5QixRQUF6QjtBQUNBLElBQUksSUFBSixDQUFTLEtBQVQsRUFBZSxxQkFBZixFQUFxQyxJQUFyQztBQUNBLElBQUksSUFBSixDQUFTLElBQVQ7O0FBRUEsU0FBUyxRQUFULEdBQW1CO0FBQ2pCLE1BQUcsSUFBSSxVQUFKLElBQWdCLENBQW5CLEVBQXFCO0FBQ25CLFFBQUcsSUFBSSxNQUFKLElBQVksR0FBZixFQUFtQjtBQUNqQixjQUFRLEdBQVIsQ0FBWSxJQUFJLFlBQWhCO0FBQ0EsYUFBTyxLQUFLLEtBQUwsQ0FBVyxJQUFJLFlBQWYsQ0FBUDtBQUNEO0FBQ0Y7QUFDRjs7a0JBR2MsSzs7Ozs7Ozs7O0FDL0JmOzs7Ozs7QUFFQSxJQUFNLGFBQWEsU0FBbkI7O0FBRUEsSUFBTSxRQUFRLFNBQVIsS0FBUSxDQUFTLE9BQVQsRUFBa0I7QUFDOUIsT0FBSyxPQUFMLEdBQWUsT0FBZjtBQUNBLE9BQUssRUFBTCxHQUFVLEtBQUssUUFBTCxFQUFWO0FBQ0EsT0FBSyxTQUFMLEdBQWlCLFNBQVMsY0FBVCxDQUF3QixRQUFRLEVBQWhDLENBQWpCO0FBQ0EsT0FBSyxTQUFMLENBQWUsV0FBZixDQUEyQixLQUFLLEVBQWhDOztBQUVBLE1BQU0sU0FBUyxxQkFBVztBQUN4QixVQUFNLEdBRGtCO0FBRXhCLFlBQVEsS0FBSztBQUZXLEdBQVgsQ0FBZjtBQUlBLE9BQUssRUFBTCxDQUFRLFdBQVIsQ0FBb0IsT0FBTyxRQUFQLEVBQXBCO0FBQ0QsQ0FYRDs7QUFhQSxNQUFNLFNBQU4sQ0FBZ0IsUUFBaEIsR0FBMkIsWUFBVztBQUNwQyxNQUFNLEtBQUssU0FBUyxhQUFULENBQXVCLE1BQXZCLENBQVg7QUFDQSxLQUFHLFdBQUgsR0FBaUIsS0FBSyxPQUFMLENBQWEsSUFBYixJQUFxQixTQUF0QztBQUNBLEtBQUcsU0FBSCxHQUFlLFVBQWY7QUFDQSxTQUFPLEVBQVA7QUFDRCxDQUxEOztrQkFPZSxLOztBQUVmO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7QUNyQ0E7Ozs7QUFDQTs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUksUUFBUSxvQkFBVTtBQUNsQixRQUFJO0FBRGMsQ0FBVixDQUFaIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImNvbnN0IENMQVNTX05BTUUgPSAnQl9CdXR0b24nO1xuXG5jb25zdCBCdXR0b24gPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIHRoaXMuZWwgPSB0aGlzLmNyZWF0ZUVsKCk7XG4gIGlmIChvcHRpb25zLmlkKSB7XG4gICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvcHRpb25zLmlkKTtcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmVsKTtcbiAgfVxufVxuXG5CdXR0b24ucHJvdG90eXBlLmNyZWF0ZUVsID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGVsLnRleHRDb250ZW50ID0gdGhpcy5vcHRpb25zLnRleHQgfHwgJ2J0bic7XG4gIGVsLmNsYXNzTmFtZSA9IENMQVNTX05BTUU7XG4gIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHRoaXMub3B0aW9ucy5zcGFuRWwucmVtb3ZlKCk7XG4gICAgLy8gKHRoaXMub3B0aW9ucy5zcGFuRWwpLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5vcHRpb25zLnNwYW5FbCk7XG4gIH0pO1xuICByZXR1cm4gZWw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjsiLCJjb25zdCBJbnB1dCA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgdGhpcy5lbCA9IHRoaXMuY3JlYXRlRWwoKTtcbiAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvcHRpb25zLmlkKTtcbiAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5lbCk7XG59XG5cbklucHV0LnByb3RvdHlwZS5jcmVhdGVFbCA9IGZ1bmN0aW9uKCkge1xuICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBsZXQgcmVzb3VyY2UgPSBjYWxsQmFjaygpO1xuICBlbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgXG4gIH0pO1xuICByZXR1cm4gZWw7XG59XG5cbmxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbnhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBjYWxsQmFjaztcbnhoci5vcGVuKFwiZ2V0XCIsXCIuLi8uLi9wcm92aW5jZS5qc29uXCIsdHJ1ZSk7ICBcbnhoci5zZW5kKG51bGwpO1xuXG5mdW5jdGlvbiBjYWxsQmFjaygpeyAgXG4gIGlmKHhoci5yZWFkeVN0YXRlPT00KXsgIFxuICAgIGlmKHhoci5zdGF0dXM9PTIwMCl7ICBcbiAgICAgIGNvbnNvbGUubG9nKHhoci5yZXNwb25zZVRleHQpO1xuICAgICAgcmV0dXJuIEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7IFxuICAgIH0gICAgIFxuICB9ICBcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBJbnB1dDsiLCJpbXBvcnQgQnV0dG9uIGZyb20gJy4vYnV0dG9uJztcblxuY29uc3QgQ0xBU1NfTkFNRSA9ICdCX0xhYmVsJztcblxuY29uc3QgTGFiZWwgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIHRoaXMuZWwgPSB0aGlzLmNyZWF0ZUVsKCk7XG4gIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob3B0aW9ucy5pZCk7XG4gIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZWwpO1xuXG4gIGNvbnN0IGJ1dHRvbiA9IG5ldyBCdXR0b24oe1xuICAgIHRleHQ6ICd4JyxcbiAgICBzcGFuRWw6IHRoaXMuZWxcbiAgfSk7XG4gIHRoaXMuZWwuYXBwZW5kQ2hpbGQoYnV0dG9uLmNyZWF0ZUVsKCkpO1xufVxuXG5MYWJlbC5wcm90b3R5cGUuY3JlYXRlRWwgPSBmdW5jdGlvbigpIHtcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGVsLnRleHRDb250ZW50ID0gdGhpcy5vcHRpb25zLnRleHQgfHwgJ0JfTGFiZWwnO1xuICBlbC5jbGFzc05hbWUgPSBDTEFTU19OQU1FO1xuICByZXR1cm4gZWw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExhYmVsO1xuXG4vLyBjbGFzcyBMYWJlbFxuLy8ge1xuLy8gICBjb25zdHJ1Y3RvcigpXG4vLyAgIHtcblxuLy8gICB9XG4gIFxuLy8gICBjcmVhdGVFbCgpXG4vLyAgIHtcblxuLy8gICB9XG4vLyB9IiwiaW1wb3J0IExhYmVsIGZyb20gJy4vbGFiZWwnO1xuaW1wb3J0IElucHV0IGZyb20gJy4vaW5wdXQnO1xuXG4vLyBmb3IgKGxldCBpPTEwMTsgaTwxMTE7IGkrKykge1xuLy8gICAgIGxldCBsYWJlbCA9IG5ldyBMYWJlbCh7XG4vLyAgICAgICAgIGlkOiAnY29udGFpbmVyJyxcbi8vICAgICAgICAgdGV4dDogaVxuLy8gICAgIH0pO1xuLy8gfVxuXG5sZXQgaW5wdXQgPSBuZXcgSW5wdXQoe1xuICAgIGlkOiAnY29udGFpbmVyJyxcbn0pO1xuXG4iXX0=
