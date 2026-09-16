let HomescoreEl=document.getElementById("score1");
let GuestscoreEl=document.getElementById("score2");
let resetEl=document.getElementById("btnre");
let Homescore=0
let Guestscore=0
function homeadd1()
{
 Homescore=Homescore+1
 HomescoreEl.textContent=Homescore
}
function homeadd3()
{
     Homescore=Homescore+3
 HomescoreEl.textContent=Homescore
    
}
function homeadd5()
{
     Homescore=Homescore+5
 HomescoreEl.textContent=Homescore
    
}

function guestadd1()
{
 Guestscore=Guestscore+1
 GuestcoreEl.textContent=Guestscore
}
function guestadd3()
{
    Guestscore=Guestscore+3
 GuestcoreEl.textContent=Guestscore
    
}
function guestadd5()
{
   Guestscore=Guestscore+5
 GuestcoreEl.textContent=Guestscore
    
}

function reset0(){
    Homescore=0
    Guestscore=0
    GuestcoreEl.textContent=Guestscore
HomescoreEl.textContent=Homescore
}
