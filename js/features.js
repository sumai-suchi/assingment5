function DonationForFloodVictims(Id)
{
   const donationAmount=document.getElementById(Id).value ;
   const donationAmountNumber=parseFloat(donationAmount);
  

   return donationAmountNumber;

}

function getTextFieldValueById(ID)
{
   const textFieldValue=document.getElementById(ID).innerText;
   const NumberValue=parseFloat(textFieldValue);
   return NumberValue;
}


// function hiddenTheName(Id)
// {
     
//    const displayOrHide=document.getElementById(Id);

//    displayOrHide.addEventListener('click',function()
// {
//    if(displayOrHide.style.display==='none')
//    {
//       displayOrHide.style.display='block';
//    }
//    else
//    {
//       displayOrHide.style.display='none';
//    }
// })
// }