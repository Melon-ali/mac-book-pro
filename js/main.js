// -------Memory Area Start--------//

const accessEight = document.getElementById("eight");
const accessSixteen = document.getElementById("sixteen");

const memoryCost = document.getElementById("memory");

accessEight.addEventListener('click', function(){
    memoryCost.innerText = "0";
    updateTotal();
});

accessSixteen.addEventListener('click', function(){
    memoryCost.innerText = "180";
    updateTotal();
});

// -------Memory Area End--------//

//---------Storage Area Start---------//
const fiftyStorage = document.getElementById("fifty");
const twelveStorage = document.getElementById("twelve");
const terabyteStorage = document.getElementById("terabyte");

const storageCost = document.getElementById("storage");

fiftyStorage.addEventListener('click', function(){
    storageCost.innerText = "0";
    updateTotal();
});

twelveStorage.addEventListener('click', function(){
    storageCost.innerText = "100";
    updateTotal();
});

terabyteStorage.addEventListener('click', function(){
    storageCost.innerText = '180';
    updateTotal();
});

//---------Storage Area End---------//

//---------Delivery Area Start-------//

const freePrime = document.getElementById("free");
const deliveryCharge = document.getElementById("charge");

const deliveryCost = document.getElementById("delivery");

freePrime.addEventListener('click', function(){
    deliveryCost.innerText = "0";
    updateTotal();
});

deliveryCharge.addEventListener('click', function(){
    deliveryCost.innerText = "20";
    updateTotal();
});

//---------Delivery Area End-------//

//-------- Update Total Start-------//

const totalPrice = document.getElementById("total");
const priceTotal = totalPrice.innerText
const priceTotalNumber = Number(priceTotal);

function updateTotal(){
    const extraMemory = Number(memoryCost.innerText);
    const extraStorage = Number(storageCost.innerText);
    const ChargeDelivery = Number(deliveryCost.innerText);
    
    const grandTotal = extraMemory + extraStorage + ChargeDelivery + priceTotalNumber;
    totalPrice.innerText = grandTotal;
}
//-------- Update Total End-------//
