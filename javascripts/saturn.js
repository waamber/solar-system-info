"use strict";

let saturn = {
  discovery: "1610",
  img: "https://nssdc.gsfc.nasa.gov/planetary/image/saturn.jpg", 
  mass: "5.683 × 10^26 kg",
  size: "36,184 mi" ,
  distance: "888.2 million mi",
  atmosphere: "Hydrogen and helium",
  satellites: "Mimas, Enceladus, Tethys, Dione, Rhea, Titan, Hyperion, Iapetus, Phoebe, Janus, Epimetheus, Helene, Telesto, Calypso, Atlas, Prometheus, Pandora, Pan, Ymir, Paaliaq, Tarvos, Ijiraq, Suttungr, Kiviuq, Mundilfari, Albiorix, Skathi, Erriapus, Siarnaq, Thrymr, Narvi, Methone, Pallene, Polydeuces, Daphnis, Aegir, Bebhionn, Bergelmir, Bestla, Farbauti, Fenrir, Fornjot, Hati, Hyrrokkin, Kari, Loge, Skoll, Surtur, Anthe, Jarnsaxa, Greip, Tarqeq, Aegaeon and 9 more unnamed",
  probes: "Pioneer 11, Voyager 1 and 2 and Cassini"
};

let planetString = `<div class="planetCard">
                      <div class="planetHeading">
                        <h1>Saturn</h1>
                      </div>
                      <div class="planetContent">
                        Year Discovered: ${saturn.discovery}<br>
                        <img src="${saturn.img}"><br>
                        Mass: ${saturn.mass}<br>
                        Size: Radius of ${saturn.size}<br>
                        Distance from the Sun: ${saturn.distance}<br>
                        Atmosphere Composition: ${saturn.atomsphere}<br>
                        Satellite(s): ${saturn.satellites}<br>
                        Probe, Orbiter or Explorer Landings:<br>
                        ${saturn.probes}
                      </div>
                    </div>`;

const outputTo = () => {
 return planetString; 
};

module.exports = outputTo;