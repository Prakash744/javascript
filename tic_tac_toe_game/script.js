let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newGameButton=document.querySelector("#new");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true;
const winpattern= [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
    ];
    
const resetGame=()=>{
    turnO=true;
}
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Button was clicked");
     if(turnO===true){ //player O
        box.innerText="O";
        turnO=false;
     }
     else{
        box.innerText="X";//player X
        turnO=true;
     }
     box.disabled=true;
     checkWinner();
    });
});
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true; 
    }

}
const showWinner=(winner)=>{
    msg.innerText=`Congratulations!,winner is ${winner}`;
    msgcontainer.classList.remove("hide"); 
    disableBoxes();
}

const checkWinner=()=>{
 for(let pattern of winpattern){
    let pos1val= boxes[pattern[0]].innerText;
    let pos2val= boxes[pattern[1]].innerText;
    let pos3val= boxes[pattern[2]].innerText;
    if(pos1val!=""&&pos2val!=""&&pos3val!=""){
        if(pos1val===pos2val&&pos2val===pos3val)
    console.log("winner",pos1val);
     showWinner(pos1val);
        }
 }
};
