// api
const API = "https://randomuser.me/api/?results=9";
const overlay = document.getElementById("overlay");

const getUsers = (callback, resuars) => {
  const request = new XMLHttpRequest();
  request.addEventListener("readystatechange", () => {
    if (request.readyState != 4) {
      overlay.classList.remove("hidden");
    } else if (request.readyState == 4 && request.status == 200) {
      overlay.classList.add("hidden");
      callback(JSON.parse(request.responseText).results);
    } else if (request.readyState == 4) {
      console.log("Something wrong");
    }
  });
  request.open("GET", resuars);
  request.send();
};

// for leader
