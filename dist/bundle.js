/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/auto-slide-up.js":
/*!*********************************!*\
  !*** ./src/js/auto-slide-up.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("!function () {\n  //添加offset类\n  var specialTags = document.querySelectorAll('[data-x]');\n\n  for (var i = 0; i < specialTags.length; i++) {\n    specialTags[i].classList.add('offset');\n  }\n\n  findClosestAndRemoveOffset(); //这个1s是因为上面loading占时间\n\n  window.addEventListener('scroll', function (x) {\n    findClosestAndRemoveOffset();\n  });\n\n  function findClosestAndRemoveOffset() {\n    var specialTags = document.querySelectorAll('[data-x]');\n    var minIndex = 0;\n\n    for (var _i = 1; _i < specialTags.length; _i++) {\n      if (Math.abs(specialTags[_i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) {\n        minIndex = _i;\n      }\n    } //minIndex 就是窗口顶部最近的元素\n\n\n    specialTags[minIndex].classList.remove('offset');\n\n    for (var _i2 = 0; _i2 < specialTags.length; _i2++) {\n      specialTags[_i2].classList.remove('active');\n    } //specialTags[minIndex].classList.add('active');\n\n\n    var id = specialTags[minIndex].id; //获取id\n\n    var a = document.querySelector('a[href=\"#' + id + '\"]');\n    var li = a.parentNode;\n    var brotherAndMe = li.parentNode.children;\n\n    for (var _i3 = 0; _i3 < brotherAndMe.length; _i3++) {\n      brotherAndMe[_i3].classList.remove('highlight');\n    }\n\n    li.classList.add('highlight');\n  }\n}.call();\n\n//# sourceURL=webpack:///./src/js/auto-slide-up.js?");

/***/ }),

/***/ "./src/js/message.js":
/*!***************************!*\
  !*** ./src/js/message.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("!function () {\n  var view = View('section.messages');\n  var model = Model({\n    resourceName: 'Message'\n  });\n  var controller = Controller({\n    init: function init(view, controller) {\n      this.messageList = view.querySelector('#messageList');\n      this.form = view.querySelector('form');\n      this.loadMessages();\n    },\n    loadMessages: function loadMessages() {\n      var _this = this;\n\n      this.model.fetch().then(function (messages) {\n        // console.log(messages)\n        // console.log(messages[0].attributes)\n        var array = messages.map(function (items) {\n          return items.attributes;\n        });\n        array.forEach(function (items) {\n          var li = document.createElement('li');\n          li.innerText = \"\".concat(items.name, \": \").concat(items.content);\n\n          _this.messageList.appendChild(li);\n        });\n      });\n    },\n    bindEvents: function bindEvents() {\n      var _this2 = this;\n\n      //绑定事件只绑定\n      this.form.addEventListener('submit', function (e) {\n        e.preventDefault();\n\n        _this2.saveMessage();\n      });\n    },\n    saveMessage: function saveMessage() {\n      var myForm = this.form;\n      var content = myForm.querySelector('input[name=content]').value;\n      var name = myForm.querySelector('input[name=name]').value;\n      this.model.save({\n        'name': name,\n        'content': content\n      }).then(function (message) {\n        console.log('保存成功'); //  window.location.reload()//自动刷新页面\n\n        var li = document.createElement('li');\n        li.innerText = \"\".concat(message.attributes.name, \": \").concat(message.attributes.content); // console.log(li.innerText)\n\n        var messagesList = document.querySelector('#messageList');\n        messagesList.appendChild(li);\n        myForm.querySelector('input[name=content]').value = '';\n        myForm.querySelector('input[name=name]').value = '';\n      });\n    }\n  });\n  controller.init(view, model);\n}.call();\n/*//创建 TestObject 表\r\nconst TestObject = AV.Object.extend('TestObject');\r\n// 在表中创建一行数据\r\nconst testObject = new TestObject();\r\ntestObject.set('words', 'Hello world!');\r\n//数据内容事 words : 'Hello World' 保存\r\ntestObject.save().then((testObject) => {\r\n    console.log('保存成功。')\r\n})*/\n\n//# sourceURL=webpack:///./src/js/message.js?");

/***/ }),

/***/ "./src/js/smoothly-navigation.js":
/*!***************************************!*\
  !*** ./src/js/smoothly-navigation.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("!function () {\n  var view = View('nav.menu');\n  var controller = {\n    view: null,\n    init: function init(view) {\n      this.view = view;\n      this.initAnimation();\n      this.bindEvents();\n    },\n    initAnimation: function initAnimation() {\n      function animate(time) {\n        requestAnimationFrame(animate);\n        TWEEN.update(time);\n      }\n\n      requestAnimationFrame(animate);\n    },\n    scrollToElements: function scrollToElements(element) {\n      var top = element.offsetTop;\n      var currentTop = window.scrollY;\n      var targetTop = top - 80;\n      var s = targetTop - currentTop;\n      var coords = {\n        y: currentTop\n      };\n      var t = Math.abs(s / 100) * 300;\n\n      if (t > 500) {\n        t = 500;\n      }\n\n      ;\n      var tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.\n      .to({\n        y: targetTop\n      }, 1000) // Move to (300, 200) in 1 second.\n      .easing(TWEEN.Easing.Quadratic.In) // Use an easing function to make the animation smooth.\n      .onUpdate(function () {\n        window.scrollTo(0, coords.y);\n      }).start(); // Start the tween immediately.\n    },\n    bindEvents: function bindEvents() {\n      var _this = this;\n\n      var aTags = this.view.querySelectorAll('nav.menu > ul>li>a');\n\n      for (var i = 0; i < aTags.length; i++) {\n        aTags[i].onclick = function (x) {\n          x.preventDefault();\n          var a = x.currentTarget; //返回其监听器触发事件的节点\n\n          var href = a.getAttribute('href'); //'#siteAbot'\n\n          var element = document.querySelector(href);\n\n          _this.scrollToElements(element);\n        };\n      }\n    }\n  };\n  controller.init(view);\n}.call();\n\n//# sourceURL=webpack:///./src/js/smoothly-navigation.js?");

/***/ }),

/***/ "./src/js/sticky-topbar.js":
/*!*********************************!*\
  !*** ./src/js/sticky-topbar.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("!function () {\n  var view = View('#topNavBar');\n  var controller = {\n    view: null,\n    init: function init(view) {\n      this.view = view;\n      this.bindEvents(); // this.bindEvents.call(this)\n    },\n    bindEvents: function bindEvents() {\n      var _this = this;\n\n      var view = this.view;\n      window.addEventListener('scroll', function (x) {\n        if (window.scrollY > 0) {\n          _this.active();\n        } else {\n          _this.deactive();\n        }\n      });\n    },\n    active: function active() {\n      this.view.classList.add('sticky');\n    },\n    deactive: function deactive() {\n      this.view.classList.remove('sticky');\n    }\n  };\n  controller.init(view); //controller.init.call(controller,view)\n}.call();\n\n//# sourceURL=webpack:///./src/js/sticky-topbar.js?");

/***/ }),

/***/ 0:
/*!*********************************************************************************************************************!*\
  !*** multi ./src/js/auto-slide-up.js ./src/js/message.js ./src/js/smoothly-navigation.js ./src/js/sticky-topbar.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! D:\\JSworkspace\\03Resume-demo\\src\\js\\auto-slide-up.js */\"./src/js/auto-slide-up.js\");\n__webpack_require__(/*! D:\\JSworkspace\\03Resume-demo\\src\\js\\message.js */\"./src/js/message.js\");\n__webpack_require__(/*! D:\\JSworkspace\\03Resume-demo\\src\\js\\smoothly-navigation.js */\"./src/js/smoothly-navigation.js\");\nmodule.exports = __webpack_require__(/*! D:\\JSworkspace\\03Resume-demo\\src\\js\\sticky-topbar.js */\"./src/js/sticky-topbar.js\");\n\n\n//# sourceURL=webpack:///multi_./src/js/auto-slide-up.js_./src/js/message.js_./src/js/smoothly-navigation.js_./src/js/sticky-topbar.js?");

/***/ })

/******/ });