document.getElementById('cardForm').addEventListener('submit', function (event) {
  event.preventDefault();

  // Fetch form input values
  const name = document.getElementById('name').value;
  const designation = document.getElementById('designation').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const website = document.getElementById('website').value;
  const company = document.getElementById('company').value;
  const address = document.getElementById('address').value;
  const logoFile = document.getElementById('logo-file').files[0];

  // Set the card values
  document.getElementById('card-name').textContent = name;
  document.getElementById('card-designation').textContent = designation;
  document.getElementById('card-phone').textContent = phone;
  document.getElementById('card-email').textContent = email;
  document.getElementById('card-website').textContent = website;
  document.getElementById('card-address').textContent = address;
  document.getElementById('card-second-company').textContent = company;
  document.getElementById('card-second-website').textContent = website;

  // Set the logo
  if (logoFile) {
    const reader = new FileReader();
    reader.onload = function () {
      document.getElementById('card-second-logo').style.backgroundImage = `url(${reader.result})`;
    };
    reader.readAsDataURL(logoFile);
  }

  // Show the cards
  document.getElementById('cards-section').style.display = 'flex';
});
