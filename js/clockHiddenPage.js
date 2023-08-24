
const h = new Date().getHours();
const dp = [

  {display: "none", text:  " Which \n Password \n Did You Get?", },    // From 04 to 08
  {display: "none", text:  " Which \n Password \n Did You Get?", },    // From 08 to 19
  {display: "block", text: "Í'm so tired", opacity: "0"},   // From 1 to 4
  {display: "none", text:  " Which \n Password \n Did You Get?", },      // All other hours

  ]
  
[

  h >=  4 && h < 8 ? 0 :
  h >= 8 && h < 24 ? 1 :
  h >= 1 && h <  4 ? 2 :
                      3
];


const EL_dayPeriod = document.querySelector("#clock-overlay");
EL_dayPeriod.style.display = dp.display;

const EL_dayPeriod2 = document.querySelector("#clock-overlay-two");
EL_dayPeriod2.style.display = dp.display;

const EL_dayPeriod3 = document.querySelector("#clock-overlay-three");
EL_dayPeriod3.style.display = dp.display;

const EL_dayPeriod4 = document.querySelector("#clock-overlay-four");
EL_dayPeriod4.style.display = dp.display;

const EL_dayPeriod5 = document.querySelector("#clock-overlay-five");
EL_dayPeriod5.style.display = dp.display;

const EL_dayPeriod6 = document.querySelector("#boat-song");
EL_dayPeriod6.style.display = dp.display;


const EL_dayPeriod7 = document.querySelector("#hidden-text");
EL_dayPeriod7.textContent  = dp.text; 

