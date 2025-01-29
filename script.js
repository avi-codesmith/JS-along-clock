"use strict";
const hrHand = document.getElementById("hour");
const minHand = document.getElementById("minute");
const secHand = document.getElementById("second");

setInterval(() => {
  let d = new Date();
  let second = d.getSeconds() * 6;

  let minute = d.getMinutes() * 6 + d.getSeconds() * 0.1;

  let hour = (d.getHours() % 12) * 30 + d.getMinutes() * 0.5;

  secHand.style.transform = `rotate(${second}deg)`;
  minHand.style.transform = `rotate(${minute}deg)`;
  hrHand.style.transform = `rotate(${hour}deg)`;
});
