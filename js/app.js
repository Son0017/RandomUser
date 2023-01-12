const form = document.getElementById("form");
const formButton = document.getElementById("form__button");
const user = document.getElementById("user");
const clearBtn = document.getElementById("clear__button");
let locatins;
let names;
let array = [];
getUsers((el) => {
  el.forEach((element) => {
    // console.log(element);
    names = `${element.name.title} ${element.name.first} ${element.name.last} `;
    locatins = `${element.location.city} ${element.location.country}`;
    array.push(element);
    creatList(
      element.picture.large,
      names,
      element.dob.age,
      locatins,
      element.gender
    );
  });
}, API);

function creatList(userImg, username, useryear, userlocation, usergender) {
  let liEL = document.createElement("li");
  let deletebtn = document.createElement("button");
  deletebtn.innerHTML = `
    <i class="fas fa-trash"></i>
  `;
  deletebtn.classList.add("user__delete--btn");
  liEL.innerHTML = `
  <img
      class="user__img"
      alt="User photo"
      src="${userImg}"
      width="100"
      height="100"
  />
  <div class="user__name">
      <span class="material-symbols-outlined">badge</span>
      <span>- ${username}</span>
  </div>
  <div class="user__year">
      <span class="material-symbols-outlined">cake</span>
      <span>- ${useryear} years old</span>
  </div>
  <div class="user__location">
      <span class="material-symbols-outlined">person_pin_circle</span>
      <span>- ${userlocation}</span>
  </div>
  <div class="user__gender">
      <span class="material-symbols-outlined">man</span>
      <span>- ${usergender}</span>
  </div>
  `;
  liEL.appendChild(deletebtn);
  deletebtn.addEventListener("click", () => {
    liEL.remove();
    // console.log(user.textContent.includes("li"));
    if (user.textContent.length == 0) {
      //   console.log(1);
      clearBtn.classList.add("hidden");
    }
  });

  liEL.classList.add("user__item");
  user.appendChild(liEL);
}
clearBtn.addEventListener("click", (el) => {
  el.preventDefault();
  user.innerHTML = ``;
  clearBtn.classList.add("hidden");
});

form.form__input.addEventListener("input", (el) => {
  el.preventDefault();
  let valueEL = form.form__input.value.trim();
  user.innerHTML = ``;

  array.forEach((element, i) => {
    console.log(i);
    names = `${element.name.title} ${element.name.first} ${element.name.last}`;
    let nameses = `${element.name.first} ${element.name.last}`;
    locatins = `${element.location.city} ${element.location.country}`;
    console.log(names.includes(valueEL));
    console.log(names);
    console.log(valueEL);
    if (
      nameses.toLocaleLowerCase().includes(valueEL) ||
      element.dob.age == valueEL ||
      locatins.toLocaleLowerCase().includes(valueEL)
    ) {
      creatList(
        element.picture.large,
        names,
        element.dob.age,
        locatins,
        element.gender
      );
    }
  });
});
