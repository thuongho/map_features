 var eventUtility = {

  addEvent : function(el, type, fn) {
    if (typeof addEventListener !== "undefined") {
      el.addEventListener(type, fn, false);
    } else if (typeof attachElement !== "undefined") {
      el.attachElement("on" + type, fn);
    } else {
      el["on" + type] = fn;
    }
  },

  removeEvent : function(el, type, fn) {
    if (typeof removeEvent !== "undefined") {
      el.removeEvent(type, fn, false);
    } else if (typeof detachElement !== "undefined") {
      el.detachElement(type, fn);
    } else {
      el["on" + type] = null;
    }
  },

  getTarget : function(event) {
    if (typeof event.target !== "undefined") {
      return event.target;
    } else {
      return event.srcElement;
    }
  },

  preventDefault : function(event) {
    if (typeof event.preventDefault !== "undefined") {
      event.preventDefault();
    } else {
      event.returnValue = false;
    }
  },

  getCharCode : function(event) {
    if (typeof event.charCode === "number") {
      return event.charCode;
    } else {
      return event.keyCode;
    }
  }

 };