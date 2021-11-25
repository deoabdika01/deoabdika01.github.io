let prevNumber = '';
let hasil = '';
let currentNumber = '0';


const nomer = document.querySelectorAll(".number,.number-nol");


nomer.forEach((number) =>{
    number.addEventListener("click",(event) =>{
        ambilnomor(event.target.value);
        layarupdate(currentNumber);
        
    })
})

const layar = document.querySelector(".screen");

const layarupdate = (number) =>{
    layar.value = number;
}



const ambilnomor = (number) =>{
    if(currentNumber === '0'){
        currentNumber = number;
    }else{
        currentNumber += number;
    }
}


const operators = document.querySelectorAll(".operator");

operators.forEach((operator) =>{
    operator.addEventListener("click",(event) =>{
        ambiloperator(event.target.value);
        layarupdate(currentNumber);
    })

    
})


const ambiloperator = (operator)=> {
    if (hasil === '') {
        prevNumber = currentNumber;
    }
    prevNumber = currentNumber;
    hasil = operator;
    currentNumber='0';
    
}


const samadengan =  document.querySelector(".samadengan");
samadengan.addEventListener("click",() =>{
    perhitungan();
    layarupdate(currentNumber);
   
})


const perhitungan = () =>{
    let result ='';
    switch (hasil) {
        case '+':
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case '-':
            result = parseFloat(prevNumber) - parseFloat(currentNumber);
            break;
        case '*':
            result = parseFloat(prevNumber) * parseFloat(currentNumber);
            break;
        case '/':
            result = parseFloat(prevNumber) / parseFloat(currentNumber);
            break;    
        default:
            break;
    }
    currentNumber= result;
    hasil='';
}

const tombolbersih = document.querySelector(".all-clear");
tombolbersih.addEventListener("click",() =>{
    bersihkansemua();
    layarupdate(currentNumber);
   
})

const bersihkansemua = ()=> {
    prevNumber = '';
    hasil = '';
    currentNumber='0';
}

const desimal = document.querySelector(".desimal");
desimal.addEventListener("click",(event) =>{
    ambildesimal(event.target.value);
    layarupdate(currentNumber);
   
})

const ambildesimal = (dot)=> {
    if (currentNumber.includes('.')) {
        return
    }
    currentNumber += dot;
}



