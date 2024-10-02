
document.getElementById('blog-new-html-page1').addEventListener('click',function(event)
{
    event.preventDefault();
    window.location.href='challenge.html';



     
})







document.getElementById('first_button_id').addEventListener('click',function(event)
{
    event.preventDefault();
   
     
   const firstInputId= DonationForFloodVictims('first_input_id');
   const mainBalance= getTextFieldValueById('main_balance');
   const firstDonationCard= getTextFieldValueById('first_account_balance');

   if(firstInputId>=0 && firstInputId<=firstDonationCard && !isNaN(firstInputId) && firstInputId.length!=0)
   {
    const outBalance=mainBalance-firstInputId;
    const addMoney=firstDonationCard+firstInputId;

   

    document.getElementById('main_balance').innerText=outBalance;
    document.getElementById('first_account_balance').innerText=addMoney;

    const RemoveElement=document.getElementById('first_input_id');
    RemoveElement.value='';
    const conCard=document.getElementById('con-card');
    conCard.classList.remove('hidden');

    document.getElementById('btn-con-card').addEventListener('click',function()
{
    const conCard=document.getElementById('con-card');
    conCard.classList.add('hidden');
})

const QuotaReason=document.getElementById('Quota-reason').innerText;

historyDetails(firstInputId,QuotaReason);

 
   }
   else
   {
    alert('your input is not valid');
   }

})


document.getElementById('second_button_id').addEventListener('click',function(event)
{
    event.preventDefault();
   
     
   const firstInputId= DonationForFloodVictims('second_input_id');
   const mainBalance= getTextFieldValueById('main_balance');
   const firstDonationCard= getTextFieldValueById('second_account_balance');

   if(firstInputId>=0 && firstInputId<=firstDonationCard && !isNaN(firstInputId) && firstInputId.length!=0)
   {
    const outBalance=mainBalance-firstInputId;
    const addMoney=firstDonationCard+firstInputId;

   

    document.getElementById('main_balance').innerText=outBalance;
    document.getElementById('second_account_balance').innerText=addMoney;
    const RemoveElement=document.getElementById('second_input_id');
    RemoveElement.value='';


    const conCard=document.getElementById('con-card2');
    conCard.classList.remove('hidden');

    document.getElementById('btn-con-card2').addEventListener('click',function()
{
    const conCard=document.getElementById('con-card2');
    conCard.classList.add('hidden');
})



  const floodReason=document.getElementById('flood_reason').innerText;

  

  historyDetails(firstInputId,floodReason)


      
   }
   else
   {
    alert('your input is not valid');
   }

})




document.getElementById('third_button_id').addEventListener('click',function(event)
{
    event.preventDefault();
   
     
   const firstInputId= DonationForFloodVictims('third_input_id');
   const mainBalance= getTextFieldValueById('main_balance');
   const firstDonationCard= getTextFieldValueById('third_account_balance');

   if(firstInputId>=0 && firstInputId<=firstDonationCard && !isNaN(firstInputId) && firstInputId.length!=0)
   {
    const outBalance=mainBalance-firstInputId;
    const addMoney=firstDonationCard+firstInputId;

   

    document.getElementById('main_balance').innerText=outBalance;
    document.getElementById('third_account_balance').innerText=addMoney;
    const RemoveElement=document.getElementById('third_input_id');
    RemoveElement.value='';

      
    const conCard=document.getElementById('con-card3');
    conCard.classList.remove('hidden');

    document.getElementById('btn-con-card3').addEventListener('click',function()
{
    const conCard=document.getElementById('con-card3');
    conCard.classList.add('hidden');
})

   
const reliefReason=document.getElementById('Relief_reason').innerText;

  

historyDetails(firstInputId,reliefReason);


   
      
   }
   else
   {
    alert('your input is not valid');
   }

})

const toggleBg=document.getElementById('donation-section');
const toggleBg2=document.getElementById('history-section')
document.getElementById('donation-section').addEventListener('click',function(event)
{
     event.preventDefault();

     
           toggleBg.classList.add('bg-lime-600');
        
         toggleBg2.classList.remove('bg-lime-600')
        

})

document.getElementById('history-section').addEventListener('click',function(event)
{
     event.preventDefault();

     
           toggleBg2.classList.add('bg-lime-600');
        
        
           toggleBg.classList.remove('bg-lime-600')
        

})

   
