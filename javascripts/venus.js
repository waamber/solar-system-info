"use strict";

let venus= {
  discovery: "1761",
  img: "https://upload.wikimedia.org/wikipedia/commons/8/85/Venus_globe.jpg", 
  mass: "4.867 × 10^24 kg",
  size: "3,760 mi" ,
  distance: "67.24 million mi",
  atmosphere: "Carbon dioxide and nitrogen",
  satellites: "None",
  probes: "Venera and Mariner, Vega 1 and 2, Magellan, Venus Express, Akatsuki and IKAROS"
};

let planetString = `<div class="planetCard">
                      <div class="planetHeading">
                        <h1>Venus</h1>
                      </div>
                      <div class="planetContent">
                        <div class="discovery">Year Discovered: ${venus.discovery}</div><br>
                        <img src="${venus.img}"><br>
                        Mass: ${venus.mass}<br>
                        Size: Radius of ${venus.size}<br>
                        Distance from the Sun: ${venus.distance}<br>
                        Atmosphere Composition: ${venus.atomsphere}<br>
                        Satellite(s): ${venus.satellites}<br>
                        Probe, Orbiter or Explorer Landings:<br>
                        ${venus.probes}
                      </div>
                    </div>`;

const outputTo = () => {
 return planetString; 
};

module.exports = outputTo;