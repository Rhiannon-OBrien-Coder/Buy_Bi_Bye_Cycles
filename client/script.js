const loginForm = document.getElementById('login-account')
let userAccount = ``
const hide = document.querySelector(`.login-btn`)
const accountBtn = document.getElementById(`myAccount-btn`)
loginForm.addEventListener('click', async (event) => {
  event.preventDefault()
  const email = document.getElementById('email-login').value
  const password = document.getElementById('password-login').value


  try {
    const response = await axios.get(`http://localhost:3001/users/${email}`)
    const data = response.data[0]
  userAccount = data
    if (response.status === 200) {
      // Handle successful login
     // window.location.href = '/dashboard'
     if (data.password===password) {
      console.log(`correct password`)
      hide.style.display = `none`
      accountBtn.style.display = `block`


      } else {
        console.log(`wrong password`)
      }
    } else {
      document.getElementById('error').textContent = response.data.message
    }
  } catch (error) {
    console.error('Error:', error)
    document.getElementById('error').textContent = 'An error occurred. Please try again.'
  }
}) 

