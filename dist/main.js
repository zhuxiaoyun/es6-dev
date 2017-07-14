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
  var el = document.createElement('button');
  el.textContent = this.options.text || 'btn';
  el.className = CLASS_NAME;
  el.addEventListener('click', function () {
    console.log('sss');
  });
  return el;
};

exports.default = Button;

},{}],2:[function(require,module,exports){
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
    text: 'x'
  });
  this.el.appendChild(button.createEl());
  console.log(button);
};

Label.prototype.createEl = function () {
  var el = document.createElement('span');
  el.textContent = this.options.text || 'B_Label';
  el.className = CLASS_NAME;
  return el;
};

exports.default = Label;

},{"./button":1}],3:[function(require,module,exports){
'use strict';

var _label = require('./label');

var _label2 = _interopRequireDefault(_label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

for (var i = 101; i < 111; i++) {
    var label = new _label2.default({
        id: 'container',
        text: i
    });
}

},{"./label":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYnV0dG9uLmpzIiwic3JjL2pzL2xhYmVsLmpzIiwic3JjL2pzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQ0FBLElBQU0sYUFBYSxVQUFuQjs7QUFFQSxJQUFNLFNBQVMsU0FBVCxNQUFTLENBQVMsT0FBVCxFQUFrQjtBQUMvQixPQUFLLE9BQUwsR0FBZSxPQUFmO0FBQ0EsT0FBSyxFQUFMLEdBQVUsS0FBSyxRQUFMLEVBQVY7QUFDQSxNQUFJLFFBQVEsRUFBWixFQUFnQjtBQUNkLFNBQUssU0FBTCxHQUFpQixTQUFTLGNBQVQsQ0FBd0IsUUFBUSxFQUFoQyxDQUFqQjtBQUNBLFNBQUssU0FBTCxDQUFlLFdBQWYsQ0FBMkIsS0FBSyxFQUFoQztBQUNEO0FBRUYsQ0FSRDs7QUFVQSxPQUFPLFNBQVAsQ0FBaUIsUUFBakIsR0FBNEIsWUFBVztBQUNyQyxNQUFNLEtBQUssU0FBUyxhQUFULENBQXVCLFFBQXZCLENBQVg7QUFDQSxLQUFHLFdBQUgsR0FBaUIsS0FBSyxPQUFMLENBQWEsSUFBYixJQUFxQixLQUF0QztBQUNBLEtBQUcsU0FBSCxHQUFlLFVBQWY7QUFDQSxLQUFHLGdCQUFILENBQW9CLE9BQXBCLEVBQTZCLFlBQU07QUFDakMsWUFBUSxHQUFSLENBQVksS0FBWjtBQUNELEdBRkQ7QUFHQSxTQUFPLEVBQVA7QUFDRCxDQVJEOztrQkFVZSxNOzs7Ozs7Ozs7QUN0QmY7Ozs7OztBQUVBLElBQU0sYUFBYSxTQUFuQjs7QUFFQSxJQUFNLFFBQVEsU0FBUixLQUFRLENBQVMsT0FBVCxFQUFrQjtBQUM5QixPQUFLLE9BQUwsR0FBZSxPQUFmO0FBQ0EsT0FBSyxFQUFMLEdBQVUsS0FBSyxRQUFMLEVBQVY7QUFDQSxPQUFLLFNBQUwsR0FBaUIsU0FBUyxjQUFULENBQXdCLFFBQVEsRUFBaEMsQ0FBakI7QUFDQSxPQUFLLFNBQUwsQ0FBZSxXQUFmLENBQTJCLEtBQUssRUFBaEM7O0FBRUEsTUFBTSxTQUFTLHFCQUFXO0FBQ3hCLFVBQU07QUFEa0IsR0FBWCxDQUFmO0FBR0EsT0FBSyxFQUFMLENBQVEsV0FBUixDQUFvQixPQUFPLFFBQVAsRUFBcEI7QUFDQSxVQUFRLEdBQVIsQ0FBWSxNQUFaO0FBQ0QsQ0FYRDs7QUFhQSxNQUFNLFNBQU4sQ0FBZ0IsUUFBaEIsR0FBMkIsWUFBVztBQUNwQyxNQUFNLEtBQUssU0FBUyxhQUFULENBQXVCLE1BQXZCLENBQVg7QUFDQSxLQUFHLFdBQUgsR0FBaUIsS0FBSyxPQUFMLENBQWEsSUFBYixJQUFxQixTQUF0QztBQUNBLEtBQUcsU0FBSCxHQUFlLFVBQWY7QUFDQSxTQUFPLEVBQVA7QUFDRCxDQUxEOztrQkFPZSxLOzs7OztBQ3hCZjs7Ozs7O0FBRUEsS0FBSyxJQUFJLElBQUUsR0FBWCxFQUFnQixJQUFFLEdBQWxCLEVBQXVCLEdBQXZCLEVBQTRCO0FBQ3hCLFFBQUksUUFBUSxvQkFBVTtBQUNsQixZQUFJLFdBRGM7QUFFbEIsY0FBTTtBQUZZLEtBQVYsQ0FBWjtBQUlIIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImNvbnN0IENMQVNTX05BTUUgPSAnQl9CdXR0b24nO1xuXG5jb25zdCBCdXR0b24gPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIHRoaXMuZWwgPSB0aGlzLmNyZWF0ZUVsKCk7XG4gIGlmIChvcHRpb25zLmlkKSB7XG4gICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvcHRpb25zLmlkKTtcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmVsKTtcbiAgfVxuXG59XG5cbkJ1dHRvbi5wcm90b3R5cGUuY3JlYXRlRWwgPSBmdW5jdGlvbigpIHtcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgZWwudGV4dENvbnRlbnQgPSB0aGlzLm9wdGlvbnMudGV4dCB8fCAnYnRuJztcbiAgZWwuY2xhc3NOYW1lID0gQ0xBU1NfTkFNRTtcbiAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3NzcycpO1xuICB9KTtcbiAgcmV0dXJuIGVsO1xufVxuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247IiwiaW1wb3J0IEJ1dHRvbiBmcm9tICcuL2J1dHRvbic7XG5cbmNvbnN0IENMQVNTX05BTUUgPSAnQl9MYWJlbCc7XG5cbmNvbnN0IExhYmVsID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICB0aGlzLmVsID0gdGhpcy5jcmVhdGVFbCgpO1xuICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG9wdGlvbnMuaWQpO1xuICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmVsKTtcblxuICBjb25zdCBidXR0b24gPSBuZXcgQnV0dG9uKHtcbiAgICB0ZXh0OiAneCdcbiAgfSk7XG4gIHRoaXMuZWwuYXBwZW5kQ2hpbGQoYnV0dG9uLmNyZWF0ZUVsKCkpO1xuICBjb25zb2xlLmxvZyhidXR0b24pO1xufVxuXG5MYWJlbC5wcm90b3R5cGUuY3JlYXRlRWwgPSBmdW5jdGlvbigpIHtcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGVsLnRleHRDb250ZW50ID0gdGhpcy5vcHRpb25zLnRleHQgfHwgJ0JfTGFiZWwnO1xuICBlbC5jbGFzc05hbWUgPSBDTEFTU19OQU1FO1xuICByZXR1cm4gZWw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExhYmVsOyIsImltcG9ydCBMYWJlbCBmcm9tICcuL2xhYmVsJztcblxuZm9yIChsZXQgaT0xMDE7IGk8MTExOyBpKyspIHtcbiAgICBsZXQgbGFiZWwgPSBuZXcgTGFiZWwoe1xuICAgICAgICBpZDogJ2NvbnRhaW5lcicsXG4gICAgICAgIHRleHQ6IGlcbiAgICB9KTtcbn1cbiJdfQ==
