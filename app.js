let paper=document.querySelector("#paper");
let stone=document.querySelector("#stone");
let scissor=document.querySelector("#scissor");

let you=0;
let comp=0;


function compPlay(){
    let compMove=["stone","paper","scissor"];
    let move=Math.floor(Math.random()*3);
    return compMove[move];

}
paper.addEventListener("click",()=>{
    if(compPlay()==="paper"){
        alert("Draw");
    }
    else if(compPlay()==="scissor"){
        you++;
        document.querySelector("#you").innerText=you;

    }
    else{
        comp++;
        document.querySelector("#comp").innerText=comp;
    }
});
stone.addEventListener("click",()=>{
    if(compPlay()==="paper"){
       comp++;
       document.querySelector("#comp").innerText=comp;
    }
    else if(compPlay()==="scissor"){
        you++;
        document.querySelector("#you").innerText=you;
    }
    else{
        alert("Draw");
    }
});

scissor.addEventListener("click",()=>{
    if(compPlay()==="paper"){
       you++;
       document.querySelector("#you").innerText=you;
    }
    else if(compPlay()==="scissor"){
        alert("Draw");
    }
    else{
        comp++;
        document.querySelector("#comp").innerText=comp;
    }
});
