"use strict";

let uranus = {
  discovery: "1781",
  img: "http://vignette2.wikia.nocookie.net/spore/images/7/73/Spore_2012-10-18_15-18-33.png/revision/latest?cb=20121018123055", 
  mass: "8.681 × 10^25 kg",
  size: "15,759 mi" ,
  distance: "1.784 billion mi",
  atmosphere: "Hydrogen, helium and methane",
  satellites: "27 known - Ariel, Umbriel, Titania, Oberon, Miranda, Cordelia, Ophelia, Bianca, Cressida, Desdemona, Juliet, Portia, Rosalind, Belinda, Puck, Caliban, Sycorax, Prospero, Setebos, Stephano, Trinculo, Francisco, Margaret, Ferdinand, Perdita, Mab and Cupid",
  probes: "Voyager 2"
};

let planetString = `<div class="planetCard">
                      <div class="planetHeading">
                        <h1>Uranus</h1>
                      </div>
                      <div class="planetContent">
                        Year Discovered: ${uranus.discovery}<br>
                        <img src="${uranus.img}"><br>
                        Mass: ${uranus.mass}<br>
                        Size: Radius of ${uranus.size}<br>
                        Distance from the Sun: ${uranus.distance}<br>
                        Atmosphere Composition: ${uranus.atomsphere}<br>
                        Satellite(s): ${uranus.satellites}<br>
                        Probe, Orbiter or Explorer Landings:<br>
                        ${uranus.probes}
                      </div>
                    </div>`;

const outputTo = () => {
 return planetString; 
};

module.exports = outputTo;