let a="AbaAeCe";
let b="baeeACA";

// function solution(a, b) {
//   let answer = "YES"
//   let arr1 = a.split("").sort();
//   let arr2 = b.split("").sort();
  
//   for (let i = 0; i < arr1.length; i++) {
//     if(arr1[i] != arr2[i]) return "NO";
//   }
//   return answer;
// }


  function solution(str1, str2){
    let answer="YES"; 
    let sH = new Map();
    for(let x of str1){
        if(sH.has(x)) sH.set(x, sH.get(x)+1);
        else sH.set(x, 1);
    }
    for(let x of str2){
        if(!sH.has(x) || sH.get(x)==0) return "NO";
        sH.set(x, sH.get(x)-1);
    }
    return answer;
}


console.log(solution(a, b));