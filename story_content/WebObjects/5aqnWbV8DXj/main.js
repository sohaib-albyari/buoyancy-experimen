let container = document.getElementById('container');
let addMassButton = document.getElementById('addMass');
let removeMassButton = document.getElementById('removeMass');
// let massValue = document.getElementById('massValue');
// let objectSizeValue = document.getElementById('objectSize');
// let containerPositionValue = document.getElementById('containerPosition');

let mass = 0;
let containerPosition = 0; // Initial position of the container
let objectSize = 50; // Initial size of the object
let gravity = 20;    // Gravity force per unit mass
let object;

function updateContainerPosition() {
    containerPosition += 20; // Move the container down by 20px
    container.style.top = `${containerPosition}px`;
    container.style.transition = "all 0.5s ease-in-out"

    // containerPositionValue.textContent = containerPosition;
}

function updateObjectSize() {
    let newSize = objectSize + (20 * (mass - 1)); // Increase size by 20px per mass increment
    let left = window.getComputedStyle(object).left;
    console.log(newSize);

    object.style.width = `${newSize}px`;
    object.style.height = `${newSize / 2}px`;
    // object.style.left = `${newSize}px`;
    console.log("left : " + left);
    if (newSize >= 250) {
        addMassButton.style.display = "none";
    } else {
        addMassButton.style.display = "inline-block";

    }
    // objectSizeValue.textContent = newSize;
}

addMassButton.addEventListener('click', () => {
    mass += 1;  // Increment mass by 1 kg
    // massValue.textContent = mass;

    if (mass === 1) {
        // Show the object when mass reaches 1
        removeMassButton.style.display = "block";
        object = document.createElement('div');
        object.classList.add('object');
        container.appendChild(object);
        object.style.display = 'block';
        object.style.width = `${objectSize}px`;
        object.style.height = `${objectSize / 2}px`;
    } else if (mass > 1) {
        // Increase the object's size and move the container down
        updateObjectSize();
        updateContainerPosition();
    }
});

removeMassButton.addEventListener('click', () => {
    if (mass > 0) {
        mass -= 1;
        // massValue.textContent = mass;

        if (mass === 0) {

            // Hide the object and reset the container position when mass is 0
            object.style.display = 'none';
            removeMassButton.style.display = "none";
            containerPosition = 0;
            container.style.top = `${containerPosition}px`;
            // containerPositionValue.textContent = containerPosition;
            // objectSizeValue.textContent = 0;
        } else if (mass >= 1) {
            // Decrease the object's size and move the container up
            updateObjectSize();
            containerPosition -= 20; // Move the container up by 20px
            container.style.top = `${containerPosition}px`;
            // containerPositionValue.textContent = containerPosition;
        }
    }
});
