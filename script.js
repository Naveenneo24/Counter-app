const inc = document.getElementById("inc")
const dec = document.getElementById("dec")
const res = document.getElementById("res")

let display = document.getElementById("display")

let count = 0;

inc.addEventListener("click",()=>{
        increment()
        console.log("increment is clicked", count)
})


dec.addEventListener("click",()=>{
    decrement()
    console.log("Decrement is clicked", count)

})

res.addEventListener("click",()=>{
    reset()
    console.log("Reset is clicked", count)

})

function increment(){
    count++;
    display.textContent = count;
}

function decrement(){
    if(count>0){
    count--;
    display.textContent = count;
    }
}

function reset(){
    count =0;
    display.textContent = count
}