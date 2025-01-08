document.getElementById('login-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    const response = await fetch('http://localhost:3002/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
  
    const data = await response.json();
    console.log(data, response)
    if (response.ok) {
      localStorage.setItem('jwt', data.token);
      window.location.href = 'secure.html';
    } else {ls
      alert(data.message || 'Login failed');
    }
  });
  