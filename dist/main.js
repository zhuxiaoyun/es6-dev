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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYnV0dG9uLmpzIiwic3JjL2pzL2xhYmVsLmpzIiwic3JjL2pzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQ0FBLElBQU0sYUFBYSxVQUFuQjs7QUFFQSxJQUFNLFNBQVMsU0FBVCxNQUFTLENBQVMsT0FBVCxFQUFrQjtBQUMvQixPQUFLLE9BQUwsR0FBZSxPQUFmO0FBQ0EsT0FBSyxFQUFMLEdBQVUsS0FBSyxRQUFMLEVBQVY7QUFDQSxNQUFJLFFBQVEsRUFBWixFQUFnQjtBQUNkLFNBQUssU0FBTCxHQUFpQixTQUFTLGNBQVQsQ0FBd0IsUUFBUSxFQUFoQyxDQUFqQjtBQUNBLFNBQUssU0FBTCxDQUFlLFdBQWYsQ0FBMkIsS0FBSyxFQUFoQztBQUNEO0FBQ0YsQ0FQRDs7QUFTQSxPQUFPLFNBQVAsQ0FBaUIsUUFBakIsR0FBNEIsWUFBVztBQUFBOztBQUNyQyxNQUFNLEtBQUssU0FBUyxhQUFULENBQXVCLFFBQXZCLENBQVg7QUFDQSxLQUFHLFdBQUgsR0FBaUIsS0FBSyxPQUFMLENBQWEsSUFBYixJQUFxQixLQUF0QztBQUNBLEtBQUcsU0FBSCxHQUFlLFVBQWY7QUFDQSxLQUFHLGdCQUFILENBQW9CLE9BQXBCLEVBQTZCLFlBQU07QUFDakMsVUFBSyxPQUFMLENBQWEsTUFBYixDQUFvQixNQUFwQjtBQUNBO0FBQ0QsR0FIRDtBQUlBLFNBQU8sRUFBUDtBQUNELENBVEQ7O2tCQVdlLE07Ozs7Ozs7OztBQ3RCZjs7Ozs7O0FBRUEsSUFBTSxhQUFhLFNBQW5COztBQUVBLElBQU0sUUFBUSxTQUFSLEtBQVEsQ0FBUyxPQUFULEVBQWtCO0FBQzlCLE9BQUssT0FBTCxHQUFlLE9BQWY7QUFDQSxPQUFLLEVBQUwsR0FBVSxLQUFLLFFBQUwsRUFBVjtBQUNBLE9BQUssU0FBTCxHQUFpQixTQUFTLGNBQVQsQ0FBd0IsUUFBUSxFQUFoQyxDQUFqQjtBQUNBLE9BQUssU0FBTCxDQUFlLFdBQWYsQ0FBMkIsS0FBSyxFQUFoQzs7QUFFQSxNQUFNLFNBQVMscUJBQVc7QUFDeEIsVUFBTSxHQURrQjtBQUV4QixZQUFRLEtBQUs7QUFGVyxHQUFYLENBQWY7QUFJQSxPQUFLLEVBQUwsQ0FBUSxXQUFSLENBQW9CLE9BQU8sUUFBUCxFQUFwQjtBQUNELENBWEQ7O0FBYUEsTUFBTSxTQUFOLENBQWdCLFFBQWhCLEdBQTJCLFlBQVc7QUFDcEMsTUFBTSxLQUFLLFNBQVMsYUFBVCxDQUF1QixNQUF2QixDQUFYO0FBQ0EsS0FBRyxXQUFILEdBQWlCLEtBQUssT0FBTCxDQUFhLElBQWIsSUFBcUIsU0FBdEM7QUFDQSxLQUFHLFNBQUgsR0FBZSxVQUFmO0FBQ0EsU0FBTyxFQUFQO0FBQ0QsQ0FMRDs7a0JBT2UsSzs7Ozs7QUN4QmY7Ozs7OztBQUVBLEtBQUssSUFBSSxJQUFFLEdBQVgsRUFBZ0IsSUFBRSxHQUFsQixFQUF1QixHQUF2QixFQUE0QjtBQUN4QixRQUFJLFFBQVEsb0JBQVU7QUFDbEIsWUFBSSxXQURjO0FBRWxCLGNBQU07QUFGWSxLQUFWLENBQVo7QUFJSCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJjb25zdCBDTEFTU19OQU1FID0gJ0JfQnV0dG9uJztcblxuY29uc3QgQnV0dG9uID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICB0aGlzLmVsID0gdGhpcy5jcmVhdGVFbCgpO1xuICBpZiAob3B0aW9ucy5pZCkge1xuICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob3B0aW9ucy5pZCk7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5lbCk7XG4gIH1cbn1cblxuQnV0dG9uLnByb3RvdHlwZS5jcmVhdGVFbCA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBlbC50ZXh0Q29udGVudCA9IHRoaXMub3B0aW9ucy50ZXh0IHx8ICdidG4nO1xuICBlbC5jbGFzc05hbWUgPSBDTEFTU19OQU1FO1xuICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB0aGlzLm9wdGlvbnMuc3BhbkVsLnJlbW92ZSgpO1xuICAgIC8vICh0aGlzLm9wdGlvbnMuc3BhbkVsKS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMub3B0aW9ucy5zcGFuRWwpO1xuICB9KTtcbiAgcmV0dXJuIGVsO1xufVxuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247IiwiaW1wb3J0IEJ1dHRvbiBmcm9tICcuL2J1dHRvbic7XG5cbmNvbnN0IENMQVNTX05BTUUgPSAnQl9MYWJlbCc7XG5cbmNvbnN0IExhYmVsID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICB0aGlzLmVsID0gdGhpcy5jcmVhdGVFbCgpO1xuICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG9wdGlvbnMuaWQpO1xuICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmVsKTtcblxuICBjb25zdCBidXR0b24gPSBuZXcgQnV0dG9uKHtcbiAgICB0ZXh0OiAneCcsXG4gICAgc3BhbkVsOiB0aGlzLmVsXG4gIH0pO1xuICB0aGlzLmVsLmFwcGVuZENoaWxkKGJ1dHRvbi5jcmVhdGVFbCgpKTtcbn1cblxuTGFiZWwucHJvdG90eXBlLmNyZWF0ZUVsID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBlbC50ZXh0Q29udGVudCA9IHRoaXMub3B0aW9ucy50ZXh0IHx8ICdCX0xhYmVsJztcbiAgZWwuY2xhc3NOYW1lID0gQ0xBU1NfTkFNRTtcbiAgcmV0dXJuIGVsO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMYWJlbDsiLCJpbXBvcnQgTGFiZWwgZnJvbSAnLi9sYWJlbCc7XG5cbmZvciAobGV0IGk9MTAxOyBpPDExMTsgaSsrKSB7XG4gICAgbGV0IGxhYmVsID0gbmV3IExhYmVsKHtcbiAgICAgICAgaWQ6ICdjb250YWluZXInLFxuICAgICAgICB0ZXh0OiBpXG4gICAgfSk7XG59XG4iXX0=
