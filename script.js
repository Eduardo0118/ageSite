var currentYear = new Date().getFullYear();

var birthYearInput = document.querySelector('input[type="number"]');
var femaleButton = document.querySelector('input#female');
var maleButton = document.querySelector('input#male');

var msgDiv = document.querySelector('div#msg');
var photoDiv = document.querySelector('div#photo')
var img = document.querySelector('img#profile');

var verifyElem = document.querySelector('input[type="button"]');

verifyElem.addEventListener('click', detect)

function detect() {
    var birthYear = birthYearInput.value;
    var femaleCheck = femaleButton.checked;
    var maleCheck = maleButton.checked;

    if (birthYear >= 1900 && birthYear <= currentYear) {
        var age = currentYear - birthYear;
        let text;

        if (!femaleCheck && !maleCheck) {
            alert('Gender undefined!')
        } else {
            if (femaleCheck) {
                if (age >= 60) {
                    person = 'Senhora';
                } else if (age >= 18) {
                    person = 'Mulher';
                } else if (age >= 13) {
                    person = 'Moça'
                } else {
                    person = 'Menina';
                }
            } else {
                if (age >= 60) {
                    person = 'Senhor';
                } else if (age >= 18) {
                    person = 'Homem';
                } else if (age >= 13) {
                    person = 'Moço';
                } else {
                    person = 'Menino';
                }
            }

            msgDiv.innerHTML = `Detectamos ${person} com ${age} anos.`;
            img.src = `${person.toLowerCase()}.png`;

            if (!photoDiv.style.display) {
                photoDiv.style.display = 'block';
            }
        }
    } else {
        alert('Invalid birth year!')
    }

}
