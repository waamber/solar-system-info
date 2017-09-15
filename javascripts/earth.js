"use strict";

let earth = {
  discovery: "Or did Earth discover us?...",
  img: "https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg", 
  mass: "5.972 × 10^24 kg",
  size: "3,959 mi" ,
  distance: "92.96 million mi",
  atmosphere: "Nitrogen, oxygen, water, argon and CO2",
  satellites: "Moon",
  probes: "None"
};

let planetString = `<div class="planetCard">
                      <div class="planetHeading">
                        <h1>Earth</h1>
                      </div>
                      <div class="planetContent">
                        <div class="discovery">Year Discovered: ${earth.discovery}</div><br>
                        <img src="${earth.img}"><br>
                        Mass: ${earth.mass}<br>
                        Size: Radius of ${earth.size}<br>
                        Distance from the Sun: ${earth.distance}<br>
                        Atmosphere Composition: ${earth.atomsphere}<br>
                        Satellite(s): ${earth.satellites}<br>
                        Probe, Orbiter or Explorer Landings:<br>
                        ${earth.probes}
                      </div>
                    </div>`;

const outputTo = () => {
 return planetString; 
};

module.exports = outputTo;