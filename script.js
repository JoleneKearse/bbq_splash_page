const emailCollectorForm = document.getElementById('emailCollector')
const congratsMsg = document.getElementById('congratsMsg')
const congratsStatement = document.getElementById('congratsStatement')

emailCollectorForm.addEventListener('submit', (event) => {
    event.preventDefault()
    let myFormData = new FormData(event.target)
    let userName = myFormData.get('name')
    let userEmail = myFormData.get('email')
    const updatedHtmlContent = `
        <h2 class="form-title congrats">Congratulations, ${userName}!</h2>
        <img src="grill.png" alt="" class="gap">
        <p class="form-cta accent-txt uppercase">You're on your way to becoming a BBQ Master!</p>
        <p class="small">We'll send you weekly BBQ tips to ${userEmail}</p>`
    const signUpComplete = document.getElementById('signUpComplete')
    congratsMsg.classList.add('congrats')
    congratsStatement.classList.remove('accent-txt')
    signUpComplete.innerHTML = updatedHtmlContent
})
