"use strict";

let jupiter = {
  discovery: "1610",
  img: "http://wwwcdn.skyandtelescope.com/wp-content/uploads/Jupiter-March-14_2017-Damian-Peach-ChileScope-Team.jpg", 
  mass: "1.898 × 10^27 kg",
  size: "43,441 mi" ,
  distance: "483.8 million mi",
  atmosphere: "Hydrogen, helium, methane and ammonia",
  satellites: "69 known - Io, Europa, Ganymede, Callisto, Amalthea, Himalia, Elara, Pasiphae, Sinope, Lysithea, Carme, Ananke, Leda, Thebe, Adrastea, Metis, Callirrhoe, Themisto, Megaclite, Taygete, Chaldene, Harpalyke, Kalyke, Iocaste, Erinome, Isonoe, Praxidike, Autonoe, Thyone, Hermippe, Aitne, Eurydome, Euanthe, Euporie, Orthosie, Sponde, Kale, Pasithee, Hegemone, Mneme, Aoede, Thelxinoe, Arche, Kallichore, Helike, Carpo, Eukelade, Cyllene, Kore, Herse, Dia and 18 more unnamed",
  probes: "Pioneer 10 and 11, Voyager 1 and 2, Ulysses, Galileo, Cassini, New Horizons and Juno"
};

let planetString = `<div class="planetCard">
                      <div class="planetHeading">
                        <h1>Jupiter</h1>
                      </div>
                      <div class="planetContent">
                        Year Discovered: ${jupiter.discovery}<br>
                        <img src="${jupiter.img}"><br>
                        Mass: ${jupiter.mass}<br>
                        Size: Radius of ${jupiter.size}<br>
                        Distance from the Sun: ${jupiter.distance}<br>
                        Atmosphere Composition: ${jupiter.atomsphere}<br>
                        Satellite(s): ${jupiter.satellites}<br>
                        Probe, Orbiter or Explorer Landings:<br>
                        ${jupiter.probes}
                      </div>
                    </div>`;

const outputTo = () => {
 return planetString; 
};

module.exports = outputTo;