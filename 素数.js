let flag = 0;
const result = document.getElementById("result");
const button = document.getElementById("button");


button.addEventListener("click",function(){
// function primeNumber(){
let n =document.getElementById("textForm").value;    
    if(n === 2){
    flag = 1;
    }else{
        for(i=2;i<n;i++){
            if(n%i === 0){
                flag = 1;
                break;
            }else{
                flag = 0;
            }
            }
        };
    

// primeNumber(101);


if(flag === 1){
    result.innerHTML="素数ではありません";
}else{
    result.innerHTML="素数です";
    }
});
