let menu = document.querySelector('.menu')
let menuItems = ["apples", "pretzels", "olives", "salmon and brocolli", "chicken and rice", "cheesecake", "chocolate cake"]

// 1. Use a `forEach` to append each element of the array `menuItems` to the unordered list with class `menu`.
//  - Inside the body of the loop make sure you:
//    - Create a list item.
//    - Update the inner html of the created element.
//    - Append to the menu.
menuItems.forEach((food)=>{
  let blah = document.createElement("li");
  blah.innerHTML = food;
  menu.appendChild(blah);
});