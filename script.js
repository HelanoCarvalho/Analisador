numero = []
var lista = document.getElementById('lista')
var res = document.getElementById('res')
function adicionar(){
    var num = document.getElementById('num')
    lista.style.display = 'block'
    if (num.value.length == 0){
        window.alert('Digite um valor')
    }else{
        n = Number(num.value)
        var teste = numero.indexOf(n)
        if(n < 1 || n > 100){
            window.alert('Digite o valor corretamente')
        } else if(teste >= 0){
            window.alert('Valor já existe')
        }else{
            numero.push(n)
            res.innerHTML = ''
            var item = document.createElement('option')
            item.text = `Valor ${n} adicionado`
            lista.appendChild(item)
        }

    }
}

function finalizar(){
    
    var s = 0
    var c = 0
    if(lista.length == 0){
        window.alert('Adicione números primeiro')
    }else{
        res.innerHTML += `Ao todo, temos ${numero.length} números <br/>`
        res.innerHTML += `O maior valor informado foi ${Math.max.apply(null, numero)} <br/>`
        res.innerHTML += `O menor valor informado foi ${Math.min.apply(null, numero)} <br/>`
        for(var i = 0; i < numero.length; i++){
            s += numero[i]
        }
        res.innerHTML += `A soma dos valores é ${s} <br/>`
        res.innerHTML += `A média dos valores é ${s/numero.length}`
    }
}