"use strict";

async function load() {
  // return (await fetch("data.json")).json();
  const response = await fetch("data.json");
  const users = await response.json();
  return users;
}
document.addEventListener("DOMContentLoaded", async () => {
  let users = [];
  try {
    users = await load();
  } catch (e) {
    console.log(e);
  }

  // Menu bar
  const daily = document.querySelector(".daily");
  const week = document.querySelector(".week");
  const month = document.querySelector(".month");
  const description = document.querySelectorAll(".description");
  const number = document.querySelectorAll(".number");
  const partition = document.querySelectorAll(".partition");
  const flexy = document.querySelectorAll(".flexy");


  function calculate(ing) {
    let mark;
    let interval, name, num;
    switch (ing) {
      case "daily":
        interval = "Day";
        for (const item of number) {
          let i = 0;

          let time = users[i].timeframes;
          num = time.daily.current;
          item.innerHTML = `${num}hrs`;
          i += 1;
        }
        for (const item of description) {
          let i = 0;
          let time = users[i].timeframes;
          name = time.daily.previous;
          item.innerHTML = `Last ${interval}-${name}hrs`;
          i += 1;
        }

           break;
      case "week":
        interval = "Week";
        for (const item of number) {
          let i = 0;
          let time = users[i].timeframes;
          num = time.weekly.current;
          item.innerHTML = `${num}hrs`;
          i += 1;
        }
        for (const item of description) {
          let i = 0;
          let time = users[i].timeframes;
          name = time.weekly.previous;
          item.innerHTML = `Last ${interval}-${name}hrs`;
          i += 1;
        }
        break;

      case "month":
        interval = "Month";
        for (const item of number) {
          let i = 0;
          let time = users[i].timeframes;
          num = time.monthly.current;
          item.innerHTML = `${num}hrs`;
          i += 1;
        }
        for (const item of description) {
          let i = 0;
          let time = users[i].timeframes;
          name = time.monthly.previous;
          item.innerHTML = `Last ${interval}-${name}hrs`;
          i += 1;
        }
        break;

        }
  }
  daily.addEventListener("click", function (e) {
    // console.log(e.target.classList.value);
    calculate(e.target.classList.value);
  });

  week.addEventListener("click", function (e) {
    calculate(e.target.classList.value);
  });

  month.addEventListener("click", function (e) {
    calculate(e.target.classList.value);
  });
});
