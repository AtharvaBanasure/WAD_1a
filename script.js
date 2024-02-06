function submitForm() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const userData = {
        username: username,
        email: email,
        password: password
    };

    // Send data to server using AJAX (Fetch API)
    fetch('server-endpoint', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(response => response.json())
    .then(data => {
        // Store data locally (you can also store it in an array)
        localStorage.setItem('userData', JSON.stringify(data));

        // Redirect to the new page with the data list
        window.location.href = 'data-list.html';
    })
    .catch(error => console.error('Error:', error));
}
