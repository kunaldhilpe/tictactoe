
var values = [1,0,1,0,1,0,0,1,0];
console.log(values)
var flag = true;
var player1,player2;
var first = second =0;
document.querySelector(".container").addEventListener('click',function(e){
        index=e.target.id;
        if(values[index]==1 || values[index]==0)
        {
            if(flag){
                e.target.innerText = "X";
                values[index] ="x";
            }
            else{
                e.target.innerText = "O";
                values[index] ="O";
            }
            flag = !flag;
            winner();
            
        }
        else
        {
            alert("bhai imandari se khel cheating mat kr");
        }
    
        // console.log(values);
             
})
function winner()
{
    if((values[0]==values[1] && values[1]==values[2])||(values[3]==values[4] && values[4]==values[5])||(values[6]==values[7] && values[7]==values[8]))
    {
        getscore()

    }
    else if((values[0]==values[3] && values[3]==values[6]) || (values[1]==values[4] && values[4]==values[7]) || (values[2]==values[5] && values[5]==values[8]))
    {
        getscore() 
    }
    else if((values[0]==values[4] && values[4]==values[8]) || (values[2]==values[4] && values[4]==values[6]))
    {
        getscore()
    }
}
document.querySelector("#btn").addEventListener('click',function()
{
    document.querySelector(".rules").style.display ="none";
    document.querySelector(".container").style.display ="block";
    document.querySelector(".first-page ").style.display ="none";
    document.querySelector(".table").style.display ="block";
    document.querySelector('.command').style.display="block";
    document.querySelector('.img').style.display="none";
    document.querySelector('#winner').style.display="block";
});

document.querySelector('#term').addEventListener('click',function(){
    document.querySelector('.terms').style.display="none";
    document.querySelector(".rules").style.display ="block";  
})    

document.querySelector('#start').addEventListener('click',function()
{
    player1 = document.querySelector('#user1').value
    player2 = document.querySelector('#user2').value

    // console.log(player1)
    // console.log(player2)
    if(player1 == "" || player2 == "")
    {
        alert("please enter the player name")
    }
    else
    {
        document.querySelector('.terms').style.display ="block";
        document.querySelector(".rules").style.display ="none";
        document.querySelector(".container").style.display ="none";
        document.querySelector(".first-page ").style.display ="none";
        document.querySelector("#player1").innerHTML="<strong>"+player1+"</strong>";
        document.querySelector("#player2").innerHTML="<strong>"+player2+"</strong>";
        document.querySelector(".table").style.display ="none";
        document.querySelector('.command').style.display="none";
        document.querySelector('.img').style.display="none";
        document.querySelector('#winner').style.display="none";
        
    }
    
})

document.querySelector('#reset').addEventListener('click',function(){
    var boxess = document.querySelectorAll('.boxes');
    for(let i=0;i<boxess.length;i++)
    {
        boxess[i].innerHTML ="";
    }
    
     values = [1,0,1,0,1,0,0,1,0];
     flag = true;
     document.querySelector('#winner').innerHTML = "";  
})

function getscore(a,b,c)
{
    // player1 = document.querySelector('#user1').value
    // player2 = document.querySelector('#user2').value

    if(flag)
    {
        console.log(player2,"winner");
        document.querySelector("#winner").innerText= player2+ " has won the match";
        second++;
    }
    else
    {
        console.log(player1,"winner");
        document.querySelector("#winner").innerText= player1+ " has won the match";
        first++;

    }
    document.querySelector("#score1").innerHTML="<strong>"+first+"</strong>";
    document.querySelector("#score2").innerHTML="<strong>"+second+"</strong>";
    
    
     
    values = ['k','u','n','a','l','a','b','c','d'];
}

document.querySelector('#restart').addEventListener('click',function()
{
    location.reload();
})

