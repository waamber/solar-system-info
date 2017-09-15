"use strict";

let mercury = {
  discovery: "265 BC",
  img: "http://i.dailymail.co.uk/i/pix/2013/02/15/article-2279059-17997DA7000005DC-879_634x639.jpg", 
  mass: "3.285 × 10^23 kg" ,
  size: "1,516 mi" ,
  distance: "35.98 million mi",
  atmosphere: "Sodium, potassium, calcium, and magnesium",
  satellites: "None",
  probes: "Mariner 10 and MESSENGER"
};

let planetString = `<div class="planetCard">
                      <div class="planetHeading">
                        <h1>Mercury</h1>
                      </div>
                      <div class="planetContent">
                        Year Discovered: ${mercury.discovery}<br>
                        <img src="${mercury.img}"><br>
                        Mass: ${mercury.mass}<br>
                        Size: Radius of ${mercury.size}<br>
                        Distance from the Sun: ${mercury.distance}<br>
                        Atmosphere Composition: ${mercury.atomsphere}<br>
                        Satellite(s): ${mercury.satellites}<br>
                        Probe, Orbiter or Explorer Landings:<br>
                        ${mercury.probes}
                      </div>
                    </div>`;

const outputTo = () => {
 return planetString; 
};

module.exports = outputTo;