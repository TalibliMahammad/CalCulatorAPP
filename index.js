let operator = document.querySelectorAll(".operator")
let num = document.querySelectorAll(".num")
let inp = document.querySelector(".inp")
let btn = document.querySelectorAll("button")
let timeCalco = document.querySelector(".date")
const pattern = /[0-9]/;
const ope =  /[+\-*/]/

console.log(navigator.getBattery());
let empty = "";
setInterval(() => {
    const d = new Date();
    const dateString = d.toString();
    timeCalco.innerHTML = dateString.slice(10, 25)
}, 500);


operator.forEach(operator => {
    operator.addEventListener("click", (e) => {
        if (e.target.innerHTML == '=') {
            if(empty === ""){
                alert("Bu əməliyyatı yerinə yetirmək üçün rəqəm daxil etməlisiniz")
            }else{
                empty = eval(empty);
                inp.value = empty;
            }
        } else if (e.target.innerHTML == 'AC') {
            empty = "";
            inp.value = empty
        } else if (e.target.innerHTML == 'DE') {
            empty = empty.toString().substring(0, empty.toString().length - 1);
            inp.value = empty
        } else if (e.target.innerHTML === '%') {
            if (empty !== "") {
                empty = (eval(empty) / 100).toString();
                inp.value = empty;
            }
        }
        else {
            /*     empty += e.target.innerHTML;
                inp.value = empty; */
                console.log(typeof empty);
            if (empty.toString().includes(e.target.textContent) === false &&  pattern.test(empty)) {
              if(ope.test(empty) === false){
                empty += e.target.innerHTML;
                inp.value = empty;
              }else{
               empty = empty.substring(0, empty.length - 1)
                empty += e.target.innerHTML;
                inp.value = empty;
              }
               
            }else{
                alert("Rəqəm daxil etməmisiniz.")
            }
        }

    })
});

num.forEach(num => {
    num.addEventListener("click", (e) => {
        empty += e.target.innerHTML;
        inp.value = empty;
        console.log(empty);
    })
})


function containsSpecificDigits(str) 
{ 
    
    const pattern = /[0-5]/; 
    console.log( pattern.test(str));



 }
 containsSpecificDigits("") 



let str = "355+"
let plus = "+"
console.log(str.includes(!plus));
