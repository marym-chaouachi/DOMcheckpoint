
//heart function
function changeColor(col){
    let heart = Array.form(document.getElementsByClassName('heart'))
    if(col.target.style.color !== 'red'){
        col.target.style.color = 'red'
    }
    else{
        col.target.style.color ='black'
    }
}

for(let i=0; i<7; i++) {

    //add function
    let tnbr = Array.from(document.getElementsByClassName('tnbr'))
    let plus = Array.from(document.getElementsByClassName('plus'))
    plus[i].addEventListener('click', function(){
        tnbr[i].innerText++;

        calculsum()
    })

    //substract function
    let minus = Array.from(document.getElementsByClassName('minus'))
    minus[i].addEventListener('click', function(){
        if(tnbr[i].innerHTML>0){
            tnbr[i].innerText--;
        }

        calculsum()
    })

    //remove cart
    let xbttn = Array.from(document.getElementsByClassName('xbttn'))
    xbttn = remove[i]
    xbttn.addEventListener('click', function(){
        let buttonclick = event.target
        buttonclick.parentElement.remove()
        tnbr[i].innerHTML = 0

        calculsum()
    })

    //sum function
    function calculsum(){
        let pric = Array.form(document.getElementByClassName('pric'))
        let tprice = Array.from(document.getElementsByClassName('tprice'))
        let finalp = Arrat.form(document.getElementsByClassName('finalp'))
        let somme =0
        for(let i=0; i<7; i++){
            tprice[i].value = Number(pric[i].innerText) * Number(tnbr[i].innerText);
            somme += Number(pric[i].innerText) * Number(tnbr[i].innerText);
            finalp.value = somme
        }
    }
    
    heart[i].addEventListener('click', changeColor)

    //alert to confirm order
    function alert(){
        confirm('are you sure to buy')
    }
}
