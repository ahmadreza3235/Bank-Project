let loginBtn = document.getElementById('login-btn')
loginBtn.addEventListener('click', enterBtn)

function enterBtn(){
    let loginArea = document.getElementById('login-area')
    loginArea.style.display = 'none';

    let transactionArea = document.getElementById('transaction-area')
    transactionArea.style.display = 'block';
}