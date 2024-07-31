const otherAmountInput = document.getElementById('other-amount-input');
const donateAmountStep2 = document.getElementById('donate-amount');
const donateAmountStep3 = document.getElementById('donate-amount-step3');

const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');
const step3 = document.getElementById('step3');
const paymentPage = document.getElementById('payment-page');

const nextStep1Btn = document.getElementById('next-step1');
const nextStep2Btn = document.getElementById('next-step2');
const paymentOptions = document.querySelectorAll('.payment-option');
const payNowBtn = document.getElementById('pay-now');
const easypaisaInput = document.getElementById('easypaisa-account');

let donationAmount = null;
let donorInfo = {};

nextStep1Btn.addEventListener('click', () => {
  const selectedAmount = document.querySelector('.amount-btn.active');
  const otherAmount = parseInt(otherAmountInput.value);

  if (selectedAmount) {
    donationAmount = parseInt(selectedAmount.dataset.amount);
  } else if (otherAmount > 0) {
    donationAmount = otherAmount;
  } else {
    alert('Please select a donation amount or enter an other amount.');
    return;
  }

  updateDonateAmount(donationAmount);
  showStep(step2);
});

nextStep2Btn.addEventListener('click', () => {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const country = document.getElementById('country').value;
  const city = document.getElementById('city').value;

  if (name && email && country && city) {
    donorInfo = { name, email, country, city };
    showStep(step3);
  } else {
    alert('Please fill in all the required information.');
  }
});

// ... (rest of the code remains the same)

function showStep(step) {
  step1.classList.remove('active');
  step2.classList.remove('active');
  step3.classList.remove('active');
  paymentPage.classList.remove('active');
  step.classList.add('active');
}

function updateDonateAmount(amount) {
  if (donateAmountStep2) {
    donateAmountStep2.textContent = `$${amount}`;
  }
  if (donateAmountStep3) {
    donateAmountStep3.textContent = `$${amount}`;
  }
}

// Add event listeners for amount buttons
const amountBtns = document.querySelectorAll('.amount-btn');
amountBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    amountBtns.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// ... (previous code remains the same)

// const paymentoptions = document.querySelectorAll('.payment-option');

// paymentOptions.forEach((option) => {
//   option.addEventListener('click', (event) => {
//     event.preventDefault();
//     const paymentUrl = event.target.getAttribute('href');
//     window.open(paymentUrl, '_blank');
//   });
// });

