const loginForm = document.getElementById('loginForm')
loginForm.addEventListener('submit', async (event) => {
  event.preventDefault()
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value

  try {
    const response = await axios.post('http://localhost:3001', {email,password})

    if (response.status === 200) {
      // Handle successful login
      window.location.href = '/dashboard'
    } else {
      document.getElementById('error').textContent = response.data.message
    }
  } catch (error) {
    console.error('Error:', error)
    document.getElementById('error').textContent = 'An error occurred. Please try again.'
  }
})