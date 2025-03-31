import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  // set up the excuses, surely they will believe these!!
  let who = ['Doomsday', 'Thanos', 'Bane', 'The Dalek','Loki', 'Apocalypse','Kingpin'];
  let action = ['ate', 'destroyed', 'crushed', 'broke', 'set fire to', 'threw away', 'gave to charity', 'lost', 'dropped in water'];
  let what = ['my homework', 'my phone', 'the car', 'my computer', 'my keyboard', 'my glasses', 'my password book', 'hacked my computer'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was partying', 'when I was doing my chores'];

  //set up the random generators
  let whoRandom = Math.floor(Math.random() * who.length);
  let actionRandom = Math.floor(Math.random() * action.length);
  let whatRandom = Math.floor(Math.random() * what.length);
  let whenRandom = Math.floor(Math.random() * when.length);

  //insert the code as html into the page
  document.querySelector("#excuse").innerHTML =  who[whoRandom] + " " + action[actionRandom] + " " + what[whatRandom] + " " + when[whenRandom] + "!";
  console.log("Hello Clay Beach! Nice to see you again");
};
