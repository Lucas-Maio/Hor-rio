function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    hora = data.toLocaleTimeString()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora <12) {
        //Bom dia!
        img.src = 'Manhã.png'
        document.body.style.background = '#ffe757'
        msg.innerHTML = `Agora são ${hora} horas da tarde!`
    } else if (hora >= 12 && hora <= 18) {
        // Boa tarde!
        img.src = 'Tarde.png'
        document.body.style.background = '#d25505'
        msg.innerHTML = `Agora são ${hora} horas da tarde!` 
    } else {
        // Boa noite!
        img.src = 'Noite.png'
        document.body.style.background = '#182a49'
        msg.innerHTML = `Agora são ${hora} horas da noite!`
    }
        
}