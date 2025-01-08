document.getElementById('register-form').addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    const response = await fetch('http://localhost:3002/registeration', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
  
    const data = await response.json();
    
    if (response.ok) {
      alert('Registration successful!');
      window.location.href = 'index.html';
    } else {
      alert(data.message || 'Registration failed');
    }
  });
  