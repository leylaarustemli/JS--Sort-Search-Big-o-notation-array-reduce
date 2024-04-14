// ? 4 .Sətirdə hər sözün ilk hərfini böyük hərflə yazmaq üçün JavaScript funksiyasını yazın.
// function capitalize_Words(cumle){
//     let arr=cumle.split(" ")
//     let newArr=[]
//     for (let i = 0; i < arr.length; i++) {
//        let newWord=arr[i].slice(0,1).toUpperCase()   +   arr[i].slice(1,arr[i].length)
//        newArr.push(newWord)
//     }
//     let newJoin=newArr.join(" ")
//     return newJoin
// }
// console.log(capitalize_Words('js string exercises'));




// ? 3. Daxil olunmuş stringdə ən uzun sözü tapan function yazin.

// function lengthWord(cumle) {
//   let arr = cumle.split(" ");
//   let uzun = "";
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length > uzun.length) {
//       uzun = arr[i];
//     }
//   }
//   return uzun;
// }
// console.log(lengthWord("Web Development Tutorial"));



//? 5.Verilmish stringdən müəyyən sayda söz kəsmək üçün JavaScript funksiyasını yazın.

// console.log(truncate('The quick brown fox jumps over the lazy dog', 4));
// Output :"The quick brown fox"

// function truncate (cumle,reqem){
// let arr=cumle.split(" ")
// let newArr=arr.slice(0,reqem)
// let newSentences=newArr.join(" ")
// return newSentences
// }
// console.log(truncate('The quick brown fox jumps over the lazy dog', 4)); 




//? 2. Array reduce vasitesile asagidaki arrayin qiymetleri cemini qaytarin:
// let wishlist = [
//     { title: "Tesla Model S", price: 90000 },
//     { title: "4 carat diamond ring", price: 45000 },
//     { title: "Fancy hacky Sack", price: 5 },
//     { title: "Gold fidgit spinner", price: 2000 },
//     { title: "A second Tesla Model S", price: 90000 }
//     ];
//     let cem=wishlist.reduce(function toplama(sum,element){
//         return sum+element.price
//         },0)
//         console.log(cem);



// let cem=0
// for (let i = 0; i < wishlist.length; i++) {
//     cem+=wishlist[i].price
// }
// console.log(cem);`

        


 // ?1 . Array reduce vasitesi ile asagidaki arrayde nece neferin "Vote" etdiyini qaytarin. Meselen 4 neferde "
// voted:true " dursa return elesin 4.
// let voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
//     ];

//     let say=voters.reduce(function sesSayi(acc,element){
//         if(element.voted==false){
//          acc++
//         }
//         return acc
//      },0)
//      console.log(say);




     // let say=0
// for (let i = 0; i < voters.length; i++) {
//   if(voters[i].voted==true){
// say++
//   }
// }
// console.log(say);