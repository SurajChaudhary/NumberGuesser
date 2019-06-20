
//UI elements
const ageCalc = document.querySelector('#ageCalc'),
      dobValue = document.querySelector('#dob'),
      dobBtn = document.querySelector('#dob-btn'),
      dobMessage = document.querySelector('.dob-message');


dobBtn.addEventListener('click',calculateAge);

function calculateAge(e) {
  const dateOfBirth = dobValue.value;
  console.log(dateOfBirth);
  const diff = Date.now() - new Date(dateOfBirth).getTime();
  const ageDate = new Date(diff);
  dobMessage.textContent =  `You are ${Math.abs(ageDate.getUTCFullYear()-1970)} years old!`;
  dobMessage.style.color = 'green';
  e.preventDefault();
}