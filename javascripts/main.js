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


