const submit = document.querySelector("#submit");
const value = document.querySelector("#inputNumber");

const displayMass = (number, value1, value2) => {
    const mass = document.querySelector("#calculateMass");
    mass.innerHTML = `<p>${number} kilograms = ${value1} pounds </br> ${number} pounds = ${value2} kilograms</p>`;
};
const displayVolume = (number, value1, value2) => {
    const volume = document.querySelector("#calculateVolume");
    volume.innerHTML = `<p>${number} liters = ${value1} gallons </br> ${number} gallons = ${value2} liters</p>`;
};
const displayLength = (number, value1, value2) => {
    const length = document.querySelector("#calculateLength");
    length.innerHTML = `</p>${number} meters = ${value1} feet </br> ${number} feet = ${value2} meters</p>`;
};

const calculateLength = number => {
    const meter = (number / 3.2808).toFixed(3);
    const feet = (number * 3.2808).toFixed(3);
    displayLength(number,feet,meter);
};
const calculateVolume = number => {
    const liters = (number * 3.785).toFixed(3);
    const gallons = (number / 3.785).toFixed(3);
    displayVolume(number,gallons,liters);
};
const calculateMass = number => {
    const pounds = (number * 2.205).toFixed(3);
    const kilos = (number / 2.205).toFixed(3);
    displayMass(number,pounds,kilos);
};

submit.addEventListener('click', () => {
    const inputNumber = value.value;
    if (inputNumber !== "") {
        calculateLength(inputNumber);
        calculateMass(inputNumber);
        calculateVolume(inputNumber);
    }
    else {
        alert("Please enter a number");
    }
});
