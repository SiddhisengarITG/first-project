const firstname = document.getElementById("firstName");
const lastname = document.getElementById("LastName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const DateOfBirth = document.getElementById("DateOfBirth");
const massage = document.getElementById("massage");
let submitBtn = document.querySelector(".submitBtn");
let user = {};
function FirstName() {
  let value = firstname.value;
  if (value.length < 2) {
    alert("enter correct name.");
    return false;
  } else {
    return true;
  }
}
function LastName() {
  let value = lastname.value;
  if (value.length < 2) {
    alert("enter correct name.");
    return false;
  } else {
    user.lastName = value;
    return true;
  }
}

function Email() {
  let value = email.value;
  user.Email = value;
}
function PhoneNumber() {
  let value = phone.value;
  if (value.length !== 10) {
    alert("please enter correct number.");
    return false;
  }
  for (let a of value) {
    if (isNaN(a)) {
      alert("please enter correct number.");
      return false;
    } else {
      user.Phone = value;
      return true;
    }
  }
}
function Birth() {
  let value = DateOfBirth.value;
  user.DateOfBirth = value;
  return true;
}
function Gender() {
  const male = document.getElementById("male");
  const female = document.getElementById("female");
  const otherGender = document.getElementById("otherGender");
  // console.log(maleValue)
  if (male.checked) {
    user.Gender = male.value;
    return true;
  } else if (female.checked) {
    user.Gender = female.value;
    return true;
  } else if (otherGender.checked) {
    user.Gender = other.value;
    return true;
  }
}
let hobbie = [];
function Hobbie() {
  hobbies = [];

  const others = document.getElementById("OtherHobbie");
  const bike = document.getElementById("bike");
  const tv = document.getElementById("TV");
  const book = document.getElementById("Books");
  const Cricket = document.getElementById("TV");
  if (bike.checked) {
    hobbie.push(bike.value);
  }
  if (tv.checked) {
    hobbie.push(tv.value);
  }
  if (book.checked) {
    hobbie.push(book.value);
  }
  if (Cricket.checked) {
    hobbie.push(Cricket.value);
  }
  if (others.checked) {
    hobbie.push(others.value);
  }
  if (hobbie.length > 0) {
    user.Hobbies = hobbies;
    return true;
  } else {
    return false;
  }
}
let Condition = [];
function Massage() {
  let value = massage.value;
  user.Massage = value;
  return true;
}

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  FirstName();
  LastName();
  Birth();
  Hobbie();
  Massage();
  Email();
  PhoneNumber();
  Gender();
  console.log(user);
});
