(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

const outputTo = () => {
 return "EARTH!"; 
};

module.exports = outputTo;
},{}],2:[function(require,module,exports){
"use strict";

const outputTo = () => {
 return "JUPITER"; 
};

module.exports = outputTo;
},{}],3:[function(require,module,exports){
"use strict";

const SolarSystemData = require("./solarSystemData");

const mercuryContainer = document.getElementById("mercury");
const venusContainer = document.getElementById("venus");
const earthContainer = document.getElementById("earth");
const marsContainer = document.getElementById("mars");
const jupiterContainer = document.getElementById("jupiter");
const saturnContainer = document.getElementById("saturn");
const uranusContainer = document.getElementById("uranus");
const neptuneContainer = document.getElementById("neptune");

mercuryContainer.innerHTML = SolarSystemData.mercury();
venusContainer.innerHTML = SolarSystemData.venus();
earthContainer.innerHTML = SolarSystemData.earth();
marsContainer.innerHTML = SolarSystemData.mars();
jupiterContainer.innerHTML = SolarSystemData.jupiter();
saturnContainer.innerHTML = SolarSystemData.saturn();
uranusContainer.innerHTML = SolarSystemData.uranus();
neptuneContainer.innerHTML = SolarSystemData.neptune();



},{"./solarSystemData":8}],4:[function(require,module,exports){
"use strict";

const outputTo= () => {
 return "MARS"; 
};

module.exports = outputTo;
},{}],5:[function(require,module,exports){
"use strict";

const outputTo = () => {
 return "MERCURY"; 
};

module.exports = outputTo;
},{}],6:[function(require,module,exports){
"use strict";

const outputTo = () => {
 return "NEPTUNE"; 
};

module.exports = outputTo;
},{}],7:[function(require,module,exports){
"use strict";

const outputTo = () => {
 return "SATURN"; 
};

module.exports = outputTo;
},{}],8:[function(require,module,exports){
"use strict";

const mercury = require("./mercury");
const venus = require("./venus");
const earth = require("./earth");
const mars = require("./mars");
const jupiter = require("./jupiter");
const saturn = require("./saturn");
const uranus = require("./uranus");
const neptune = require("./neptune");


const solarSystemData = {
  mercury, venus, earth, mars, jupiter, saturn, uranus, neptune
};

module.exports = solarSystemData;
},{"./earth":1,"./jupiter":2,"./mars":4,"./mercury":5,"./neptune":6,"./saturn":7,"./uranus":9,"./venus":10}],9:[function(require,module,exports){
"use strict";

const outputTo = () => {
 return "URANUS"; 
};

module.exports = outputTo;
},{}],10:[function(require,module,exports){
"use strict";

const outputTo = () => {
 return "VENUS"; 
};

module.exports = outputTo;
},{}]},{},[3]);
