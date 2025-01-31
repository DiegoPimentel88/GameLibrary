const userPadrao = 'carloman@gmail.com'
const passwordPadrao = 'diegopimentel88'

const entrar = document.getElementById('botao');



entrar.addEventListener('click',function() {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    if(senha == passwordPadrao && email == userPadrao){
        console.log('Bunda')
        return window.location.replace('/index/mainfiles/index.html')
    }
    else
    {
        return "Nada Aconteceu imbecil"
    }
    console.log(email)
    console.log(senha)
}
)





