document.getElementById('sumbits').addEventListener('click', function(e){

    document.getElementById('results').style.display = 'none';

document.getElementById('loading').style.display = 'block';
    setTimeout(addresults, 4000);

    e.preventDefault();

});


function addresults(){

    const amount = document.getElementById('amount');
    const interest = document.getElementById('new-interest');

    const pay = document.getElementById('data');

    const monthly = document.getElementById('monthly-pay');
    const totals = document.getElementById('total');
    const newinterest = document.getElementById('interest');

    const payments = parseFloat(amount.value);
    const calculateinterest = parseFloat(interest.value) / 100 / 12;
    const calculatepayments = parseFloat(pay.value) * 12;

    const principle = Math.pow(1 + calculateinterest, calculatepayments);

    const monthlyinterest = (payments*principle*calculateinterest)/(principle - 1);

    if(isFinite(monthlyinterest)){

monthly.value = monthlyinterest.toFixed(2);
totals.value = (monthlyinterest * calculatepayments).toFixed(2);
newinterest.value = ((monthlyinterest * calculatepayments)- payments).toFixed(2);
document.getElementById('results').style.display = 'block'; 
document.getElementById('loading').style.display = 'none'; 

}else{
    document.getElementById('loading').style.display = 'none'
    showerror("please check the fields, it seems empty");
    }
   
}

function showerror(error){
 const errordiv = document.createElement('div');
 
const card = document.querySelector('.card');
const heading = document.querySelector('.heading');


errordiv.className = 'alert alert-danger';
errordiv.appendChild(document.createTextNode(error));
card.insertBefore(errordiv, heading);
setTimeout(errors, 3000);
}
function errors(){
    document.querySelector(".alert").remove();
}