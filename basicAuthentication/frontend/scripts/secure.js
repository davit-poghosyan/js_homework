document.addEventListener('DOMContentLoaded', async () => {
    const token = localStorage.getItem('jwt');
  
    if (!token) {
      alert('Unauthorized. Please log in.');
      window.location.href = 'index.html';
      return;
    }
  
    const response = await fetch('http://localhost:3002/secure', {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` },
    });
  
    if (response.ok) {
      const data = await response.json();
      document.getElementById('content').textContent = data.message;
    } else {
      alert('Unauthorized access.');
      localStorage.removeItem('jwt');
      window.location.href = 'index.html';
    }
  });
  
  document.getElementById('logout').addEventListener('click', () => {
    localStorage.removeItem('jwt');
    window.location.href = 'index.html';
  });
  