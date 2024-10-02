document.getElementById('history-section').addEventListener('click',function(event)
{
    event.preventDefault();
    const donationSection=document.getElementById('donation-sec');
    donationSection.classList.add('hidden');
    const historySection=document.getElementById('section-history');
    historySection.classList.remove('hidden');

})

document.getElementById('donation-section').addEventListener('click',function(event)
{
    event.preventDefault();
    const donationSection=document.getElementById('donation-sec');
    donationSection.classList.remove('hidden');
    const historySection=document.getElementById('section-history');
    historySection.classList.add('hidden');

})


function historyDetails(firstInputId,reason)
{
    const history=document.getElementById('section-history');
  
    const p=document.createElement('p');
    p.innerText= firstInputId+'Taka is Donated for '+ reason +', Bangladesh';
    p.classList.add('font-bold','text-lg','text-black')
    history.appendChild(p);
    const newDate=new Date();
    const pDate=document.createElement('p');
    pDate.classList.add('font-lighter','text-sm','text-slate-500');
    pDate.innerText="Date"+newDate+"(Bangladesh time)";
    history.appendChild(pDate);
    
    history.style.border='2px solid gray';
    history.classList.add('w-1/2','p-4','rounded-xl','bg-red-100','items-center','text-center','lg:ml-64','space-y-3','ml-6');
}
