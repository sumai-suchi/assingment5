

document.getElementById('blog-new-html-page2').addEventListener('click',function(event)
{
    event.preventDefault();
    window.location.href='index.html';

})



const AnswerIcon=document.getElementsByClassName('iconic');

for (let i = 0; i < AnswerIcon.length; i++) {
     AnswerIcon[i].addEventListener('click',function()
{
    

    const Answer=document.getElementsByClassName('para');
    for (let j = 0; j < Answer.length; j++) {
       if(Answer[j].hidden)
       {
        Answer[j].hidden=false;
       }
       else
       {
        Answer[j].hidden=true;
       }
        
    }


});
    
}
