//console.dir(document);

/*var numbers = [4,3,5,2,9,7];
numbers.sort(function(a, b) {
    return a-b;
});
console.log(numbers);

numbers.sort(function(a, b) {
    return b-a;
});
console.log(numbers);
*/

const wordNum = document.querySelector('input[name="words"]');
//console.dir(wordNum);
const paraNum = document.querySelector('input[name="paras"]');

const  output = document.querySelector(".output");

const regex = /([^A-Za-z ])/g;

let data = myData.replace(regex,'').toLowerCase();

const myArr = data.split(' ');

const btn = document.querySelector('.btn');
btn.addEventListener("click",buttonClicked);
function buttonClicked(e){
    //console.log(e.target)   
    const numParas = Number(paraNum.value);
    const numWords = Number(wordNum.value);
    
    for(let i = 0; i < numParas; i++){
        genParagraphs(numWords)
}
}
function genParagraphs (num){
    const p = document.createElement('p');
    myArr.sort((a, b) =>.5 - Math.random());   
    p.textContent = getSen('', num,0);  
    output.append(p);
}

function getSen (temp, num, cnt){
    let total = num > 10 ? 10 : num;
    let ranWords = Math.floor(Math.random()*10) + 2
    let holder = '';
    let selWord ='';
    let oldWord ='';
    for(let i=0;i<ranWords;i++){
        if(num>0){
            if(cnt >= myArr.length){
                myArr.sort((a, b) =>.5 - Math.random());
                cnt=0;
            }
            let selWord =myArr[cnt];
            /*while(oldWord==selWord){
                let selWord = myArr[Math.floor(Math.random()*myArr.length)];
            }*/
        holder +=` ${selWord}`;
        cnt++;
        oldWord = selWord
    }
    num--;
    }
    if(holder.length > 0){
    temp +=capWord(holder.trim().toLocaleLowerCase());
}
    if(num < 0){
        return temp;
    }else{
        return getSen(temp, num, cnt);
    }
    
}

function capWord(str){
    let first =  str.charAt(0).toUpperCase();
    readySetence = first + str.slice(1) + ". ";
    return readySetence

} 























/*btn.addEventListener("click", (e) =>{
    console.log(e.target)
    e.target.style.background = "orange";
})
*/

/*
window.addEventListener("DOMContentLoaded", (e)=>{
    console.log("Dom is ready");
})
*/


