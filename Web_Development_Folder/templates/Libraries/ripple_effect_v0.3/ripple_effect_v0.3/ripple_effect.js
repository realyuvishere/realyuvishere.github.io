// Get all the elements that requiere the effect
var rippleButton = document.querySelectorAll('[data-ripple-effect]'),
  i;

// The animation function
function rippleEffect(event) {
  // Getting the div that the effect is relative to
  var box = this.lastElementChild,
    x,

    // Creating the effect's div
    create = document.createElement('div'),

    // Getting the button's size, distance to top and left
    boxWidth = box.offsetWidth,
    boxHeight = box.offsetHeight,
    boxY = box.getBoundingClientRect().top,
    boxX = box.getBoundingClientRect().left,

    // Getting the mouse position
    mouseX = event.clientX,
    mouseY = event.clientY,

    // Mouse position relative to the box
    rippleX = mouseX - boxX,
    rippleY = mouseY - boxY,

    // Calculate distance to farest corner
    rippleWidth = boxWidth / 2 < rippleX ? rippleX : boxWidth - rippleX,
    rippleHeight = boxHeight / 2 < rippleY ? rippleY : boxHeight - rippleY,

      // Distance to the farest corner
    boxSize = Math.sqrt(Math.pow(rippleWidth, 2) +
                        Math.pow(rippleHeight, 2)),

    // Getting the type value for multiple ripples at the same time
    multi = this.getAttribute('data-multi-ripple'),

    // Getting the button computed style
    thisStyle = window.getComputedStyle(this);

  // Allowing multiple ripples at same time or not
  if (multi === 'no' || multi === 'false' || multi === '0') {
    this.removeEventListener('mousedown', rippleEffect);
  }

  // Creating and moving the effect div inside the button
  box.appendChild(create);

  // Ripple style (size, position, color and border-radius)
  create.classList.add('ripple-effect');
  create.style.height = 2 * boxSize + 'px';
  create.style.width = 2 * boxSize + 'px';
  create.style.top = mouseY - boxY - boxSize + 'px';
  create.style.left = mouseX - boxX - boxSize + 'px';
  box.style.borderTopLeftRadius =
    thisStyle.getPropertyValue('border-top-left-radius');
  box.style.borderTopRightRadius =
    thisStyle.getPropertyValue('border-top-right-radius');
  box.style.borderBottomLeftRadius =
    thisStyle.getPropertyValue('border-bottom-left-radius');
  box.style.borderBottomRightRadius =
    thisStyle.getPropertyValue('border-bottom-right-radius');
  setTimeout(function () {
    create.classList.add('ripple-effect-start');
  }, 0);

  // Delete animation function
  function removeChild() {
    create.classList.remove('ripple-effect-start');
    create.classList.add('ripple-effect-end');
    setTimeout(function () {
      box.removeChild(create);
    }, 500);
    window.removeEventListener('mouseup', removeChild);
    window.removeEventListener('dragend', removeChild);
    if (multi === 'no' || multi === 'false' || multi === '0') {
      box.parentElement.addEventListener('mousedown', rippleEffect);
    }
  }

  // Delete  div after animation finished
  window.addEventListener('mousedown', function () {
    x = false;
  });
  window.addEventListener('mouseup', function () {
    x = true;
  });
  window.addEventListener('dragend', function () {
    x = true;
  });
  setTimeout(function () {
    if (x) {
      removeChild();
    } else {
      window.addEventListener('mouseup', removeChild);
      window.addEventListener('dragend', removeChild);
    }
  }, 600);
}

window.onload = function () {
  // Adding to all the elements the necesary div and the event listener to run
  // the animation
  for (i = 0; i < rippleButton.length; i += 1) {
    var create = document.createElement('div'),
      button = rippleButton[i];

    // Adding the listener to run the effect
    button.addEventListener('mousedown', rippleEffect);

    // Creating a div inside the mask-div to be the reference for the ripple
    // position
    rippleButton[i].appendChild(create);
    create.classList.add('ripple-effect-box');
  }
};
