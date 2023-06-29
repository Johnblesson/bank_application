// Initialize the balance variable
let balance = 0;

// Function to update the balance display
function updateBalance() {
  const balanceElement = document.getElementById('balance');
  balanceElement.textContent = `Balance: $${balance}`;
}

// Function to handle the deposit button click
function deposit() {
  // Get the amount entered by the user
  const amount = parseFloat(document.getElementById('amount').value);
  
  // Check if the amount is valid
  if (isNaN(amount) || amount <= 0) {
    alert('Please enter a valid amount');
    return;
  }

  // Update the balance by adding the deposit amount
  balance += amount;
  
  // Update the balance display
  updateBalance();
}

// Function to handle the withdraw button click
function withdraw() {
  // Get the amount entered by the user
  const amount = parseFloat(document.getElementById('amount').value);
  
  // Check if the amount is valid
  if (isNaN(amount) || amount <= 0) {
    alert('Please enter a valid amount');
    return;
  }

  // Check if there are sufficient funds for the withdrawal
  if (amount > balance) {
    alert('Insufficient funds');
    return;
  }

  // Update the balance by subtracting the withdrawal amount
  balance -= amount;
  
  // Update the balance display
  updateBalance();
}
