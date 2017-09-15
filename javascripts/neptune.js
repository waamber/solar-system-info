"use strict";

let neptune = {
  discovery: "1864",
  img: "https://vignette.wikia.nocookie.net/spore/images/1/15/Neptune.png/revision/latest?cb=20090222230615", 
  mass: "1.024 × 10^26 kg",
  size: "15,299 mi" ,
  distance: "2.795 billion mi",
  atmosphere: "Hydrogen, helium, methane, hydrogen deutride and ethane",
  satellites: "Naiad, Thalassa, Despina, Galatea, Larissa, Proteus, Triton, Nereid, Halimede, Sao, Laomedeia, Psamathe, Neso and 1 unnamed",
  probes: "Voyager 2"
};

let planetString = `<div class="planetCard">
                      <div class="planetHeading">
                        <h1>Neptune</h1>
                      </div>
                      <div class="planetContent">
                        <div class="discovery">Year Discovered: ${neptune.discovery}</div><br>
                        <img src="${neptune.img}"><br>
                        Mass: ${neptune.mass}<br>
                        Size: Radius of ${neptune.size}<br>
                        Distance from the Sun: ${neptune.distance}<br>
                        Atmosphere Composition: ${neptune.atomsphere}<br>
                        Satellite(s): ${neptune.satellites}<br>
                        Probe, Orbiter or Explorer Landings:<br>
                        ${neptune.probes}
                      </div>
                    </div>`;

const outputTo = () => {
 return planetString; 
};

module.exports = outputTo;