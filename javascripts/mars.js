"use strict";

let mars = {
  discovery: "1695", 
  img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/1200px-OSIRIS_Mars_true_color.jpg",
  mass: "6.39 × 10^23 kg" ,
  size: "2,106 mi" ,
  distance: "141.6 million mi",
  atmosphere: "CO2, argon, nitrogen, oxygen and CO",
  satellites: "Phobos and Deimos",
  probes: "Various Mariner and Mars probes, Viking 1 and 2, Mars Global Surveyor, Mars Pathfinder, Sojourner, 2001 Mars Odyssey, Mars Express, Spirit, Opportunity, Mars Reconnaissance Orbiter, Phoenix, Dawn, Curiosity, Mars Orbiter Mission, MAVEN, ExoMars TGO and Schiaparelli"
};

let planetString = `<div class="planetCard">
                      <div class="planetHeading">
                        <h1>Mars</h1>
                      </div>
                      <div class="planetContent">
                        <div class="discovery">Year Discovered: ${mars.discovery}</div><br>
                        <img src="${mars.img}"><br>
                        Mass: ${mars.mass}<br>
                        Size: Radius of ${mars.size}<br>
                        Distance from the Sun: ${mars.distance}<br>
                        Atmosphere Composition: ${mars.atomsphere}<br>
                        Satellite(s): ${mars.satellites}<br>
                        Probe, Orbiter or Explorer Landings:<br>
                        ${mars.probes}
                      </div>
                    </div>`;

const outputTo= () => {
 return planetString; 
};

module.exports = outputTo;