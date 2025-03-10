
console.log("effects.js is loaded!");

/* 
  function imgHover(){
  console.log("imgHover loaded!");
  const img = document.getElementById('titleimg');

  img.addEventListener('mouseover', function(){
    console.log("Mouse over event on: ", this);
    this.src = "images/TitleAlt.png";
  });

  img.addEventListener('mouseout', function(){
    console.log("Mouse out event on:", this);
    this.src = "images/TitleMain.png";
  });
}
  */

function headHover(){
  console.log("headHover loaded!");
  const buttons = document.querySelectorAll('.click');

  if (buttons.length === 0) {
    console.log("No elements with class 'click' found.");
    return;
  }

  // Loop through each button and add event listeners
  buttons.forEach(button => {
    button.addEventListener('mouseover', function() {
      console.log("Mouse over event on:", this);
      this.classList.add("hover-effect"); // ✅ Add hover effect
    });

    button.addEventListener('mouseout', function() {
      console.log("Mouse out event on:", this);
      this.classList.remove("hover-effect"); // ✅ Remove hover effect
    });
  });
}

function headHover2(){
  console.log("headHover loaded!");
  const buttons = document.querySelectorAll('.small');

  if (buttons.length === 0) {
    console.log("No elements with class 'small' found.");
    return;
  }

  // Loop through each button and add event listeners
  buttons.forEach(button => {
    button.addEventListener('mouseover', function() {
      console.log("Mouse over event on:", this);
      this.classList.add("hover-effect"); // ✅ Add hover effect
    });

    button.addEventListener('mouseout', function() {
      console.log("Mouse out event on:", this);
      this.classList.remove("hover-effect"); // ✅ Remove hover effect
    });
  });
}

function applyHover() {
  console.log("applyHover function is running!");

  // Get the divs, then find the buttons inside them
  const divs = document.getElementsByClassName('applybut');

  if (divs.length === 0) {
    console.log("No elements with class 'applybut' found.");
    return;
  }

  for (let i = 0; i < divs.length; i++) {
    const button = divs[i].querySelector("button"); // Find the button inside the div

    if (!button) {
      console.log("No button found inside:", divs[i]);
      continue;
    }

    button.addEventListener('mouseover', function() {
      console.log("Mouse over event on:", this);
      this.classList.add("hover-effect"); // ✅ Add hover effect to button
    });

    button.addEventListener('mouseout', function() {
      console.log("Mouse out event on:", this);
      this.classList.remove("hover-effect"); // ✅ Remove hover effect from button
    });
  }
}

// Run when DOM is fully loaded
//document.addEventListener("DOMContentLoaded", imgHover);
document.addEventListener("DOMContentLoaded", applyHover);
document.addEventListener("DOMContentLoaded", headHover);
document.addEventListener("DOMContentLoaded", headHover2);