let container = document.getElementById('container');
let addMassButton = document.getElementById('addMass');
let removeMassButton = document.getElementById('removeMass');
let massValue = document.getElementById('massValue');
let objectSizeValue = document.getElementById('objectSize');
let containerPositionValue = document.getElementById('containerPosition');

let mass = 0;
let containerPosition = 0; // Initial position of the container in vh
let objectSize = 5; // Initial size of the object in vw
let gravity = 10;    // Gravity force per unit mass
let object;

function updateContainerPosition() {
    containerPosition += 5; // Move the container down by 5vh
    container.style.top = `${containerPosition}vh`;
    containerPositionValue.textContent = containerPosition;
}

function updateObjectSize() {
    let newSize = objectSize + (2 * (mass - 1)); // Increase size by 2vw per mass increment
    object.style.width = `${newSize}vw`;
    object.style.height = `${newSize}vw`; // Keep it square
    objectSizeValue.textContent = newSize;
}

addMassButton.addEventListener('click', () => {
    mass += 1;  // Increment mass by 1 kg
    massValue.textContent = mass;

    if (mass === 1) {
        // Show the object when mass reaches 1
        object = document.createElement('div');
        object.classList.add('object');
        container.appendChild(object);
        object.style.display = 'block';
        object.style.width = `${objectSize}vw`;
        object.style.height = `${objectSize}vw`;
    } else if (mass > 1) {
        // Increase the object's size and move the container down
        updateObjectSize();
        updateContainerPosition();
    }
});

removeMassButton.addEventListener('click', () => {
    if (mass > 0) {
        mass -= 1;
        massValue.textContent = mass;

        if (mass === 0) {
            // Hide the object and reset the container position when mass is 0
            object.style.display = 'none';
            containerPosition = 0;
            container.style.top = `${containerPosition}vh`;
            containerPositionValue.textContent = containerPosition;
            objectSizeValue.textContent = 0;
        } else if (mass >= 1) {
            // Decrease the object's size and move the container up
            updateObjectSize();
            containerPosition -= 5; // Move the container up by 5vh
            container.style.top = `${containerPosition}vh`;
            containerPositionValue.textContent = containerPosition;
        }
    }
});
