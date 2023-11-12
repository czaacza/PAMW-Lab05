document.addEventListener('DOMContentLoaded', function () {
  // Event listener for the 'View Cats' button
  var viewCatsButton = document.getElementById('viewCatsButton');
  if (viewCatsButton) {
    viewCatsButton.addEventListener('click', function () {
      window.location.href = '/api/v1/cats';
    });
  }

  // Event listener for the 'View Users' button
  var viewUsersButton = document.getElementById('viewUsersButton');
  if (viewUsersButton) {
    viewUsersButton.addEventListener('click', function () {
      window.location.href = '/api/v1/users';
    });
  }

  // Event listener for the 'Back' button
  var backButton = document.getElementById('backButton');
  if (backButton) {
    backButton.addEventListener('click', function () {
      window.location.href = '/';
    });
  }
});

document.addEventListener('DOMContentLoaded', function () {
  var newCatForm = document.getElementById('newCatForm');
  if (newCatForm) {
    newCatForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var catData = {
        cat_name: document.getElementById('catName').value,
        weight: parseFloat(document.getElementById('catWeight').value),
        birthdate: document.getElementById('catBirthdate').value,
        owner: document.getElementById('catOwner').value,
      };

      // Send POST request to your API
      fetch('http://localhost:3000/api/v1/cats', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(catData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Success:', data);
          // Optionally, reload the page or update the cat list dynamically
          window.location.reload();
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    });
  }
});

document.addEventListener('DOMContentLoaded', function () {
  var newUserForm = document.getElementById('newUserForm');
  if (newUserForm) {
    newUserForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var userData = {
        user_name: document.getElementById('userName').value,
        email: document.getElementById('userEmail').value,
        password: document.getElementById('userPassword').value,
        role: document.getElementById('userRole').value,
      };

      // Send POST request to your API
      fetch('http://localhost:3000/api/v1/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Success:', data);
          // Optionally, reload the page or update the user list dynamically
          window.location.reload();
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    });
  }
});
