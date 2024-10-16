const loginForm = document.getElementById('login-account')
loginForm.addEventListener('click', async (event) => {
  event.preventDefault()
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value
console.log(`ive been pressed`)
  try {
    const response = await axios.get(`http://localhost:3001/users/${email}`)
console.log(response,password)
    if (response.status === 200) {
      // Handle successful login
     // window.location.href = '/dashboard'
    } else {
      document.getElementById('error').textContent = response.data.message
    }
  } catch (error) {
    console.error('Error:', error)
    document.getElementById('error').textContent = 'An error occurred. Please try again.'
  }
})