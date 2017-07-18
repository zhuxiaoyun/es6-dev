const Input = function(options) {
  this.options = options;
  this.el = this.createEl();
  this.container = document.getElementById(options.id);
  this.container.appendChild(this.el);
}

Input.prototype.createEl = function() {
  let el = document.createElement('input');
  let resource = callBack();
  el.addEventListener('change', () => {
    
  });
  return el;
}

let xhr = new XMLHttpRequest();
xhr.onreadystatechange = callBack;
xhr.open("get","../../province.json",true);  
xhr.send(null);

function callBack(){  
  if(xhr.readyState==4){  
    if(xhr.status==200){  
      console.log(xhr.responseText);
      return JSON.parse(xhr.responseText); 
    }     
  }  
}


export default Input;