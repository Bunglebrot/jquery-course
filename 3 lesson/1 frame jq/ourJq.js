function $(selector) {
  let elements = document.querySelectorAll(selector);
  return new OurJquery(elements);
};

function OurJquery(elements) {
  this.elements = elements;

  this.on = function(eventName, f) {
     for (let i = 0; i < this.elements.length; i++) {
       this.elements[i].addEventListener(eventName, f);
     }
     return this;
  };

  this.addClass = function(className) {
    for (let i = 0; i < this.elements.length; i++) {
      this.elements[i].classList.add(className);
    }
    return this;
  };

  this.removeClass = function(className) {
    for (let i = 0; i < this.elements.length; i++) {
      this.elements[i].classList.remove(className);
    }
    return this;
  }
};