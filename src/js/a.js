// alert(123);

// 1.强制判断非空
// const notEmpty = (argy) => {
//     throw new SyntaxError(`${argy} can not be Empty`);
// }
// const hello = (name = notEmpty('name')) => {
//     console.log('Hello' + name);
// }
// hello();

// 2.
// const person = (person) => {
//     const defaultPerson = {
//         name: 'zhuxiaoyun',
//         age: '12',
//         grade: '90'
//     }
//     console.log(Object.assign({}, defaultPerson, person));
// }
// let shidun = {
//     name: 'shidun',
//     grade: '80'
// }
// person(shidun);

// 3.对象是引用类型
   // 值类型: 数字,
   // Symbol()是es6新加的值类型

// 4.立即调用函数表达式(IIFE)
// (function(name) {
//   console.log(name);
// })('hello');
// (() => {

// })();

// 4.数组是对象的子集
// 数组可以调用所有对象的方法
// 对象不能调用数组的方法

// Array.prototype.isEmpty = function() {
//   return this.length === 0;
// }
// console.log([1].isEmpty());

// js里面所有函数都有一个原型

// 1.声明一个函数
// const Person = function() {
// }
// // 2.给函数原型添加方法
// Person.prototype.sayHello = function() {
//   console.log('hello');
// }
// 这个原型链上的方法是Person的,实例化的person不能调用到
// Function.prototype.say = function() {
//   console.log('say');
// }
// Person.say();
// // 3.new一个实例化对象
// let p1 = new Person();
// // 4.调用方法
// p1.sayHello();

// 任何一个函数都有prototype
// 实例化的对象有__proto__

// Function 构造函数
// function 关键字

// 写一个Button组件,拥有disable(不能被点击) active(亮色)enable()三个方法
class Button {
  constructor(option) {
    this.option = Object.assign({}, this.option, option);
  }
}
Button.prototype.option = {
  id: '',
  disabled: false,
}
Button.prototype.active = function() {
  this.option.class = 'active';
}
Button.prototype.disable = function() {
  this.option.disabled = true;
}
Button.prototype.enable = function() {
  this.option.disabled = false;
}
var button = new Button({id: 'container'});
button.disable();


