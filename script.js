function sayGreetings() {
    console.log("Greetings")
}

function dbClick() {
    console.log("I am Clicked two times");
}

// Event Listeners:

const btnRef = document.querySelector("#btn");

btnRef.addEventListener("click", sayGreetings);

btnRef.addEventListener("dbClick", dbClick);


const userNames = ["Salman","Umar","Bashar"];

const namesRef = document.querySelector("#names");
userNames.map((un)=>{
    namesRef.innerHTML= namesRef.innerHTML + `<div>${un} </div>`;
});

// SetTimeOut And SetInterval:

// setTimeout(()=>{
//     console.log("I am setTimeOut function CallBack, which runs one after 1sec.")
// }, 1000);


// setInterval(()=>{
//     console.log("I am setInterval that runs every 3 seconds again and again!")
// },3000);

console.log("Start 1");
setTimeout(()=>{
    console.log("second");
},0);
console.log("Third");

//  JS Promises:

const promise =new Promise((resolve, reject) => {
   setTimeout(()=>{
     resolve({
        data:["Muhammad Umar"],
        message: "Successful 200"
    });
   },5000);
});

// Promise Handling:
promise
.then((data)=>{
    console.log("Then running");
    console.log(data);
})
.catch((error)=>{
    console.log("Catch running");
    console.log(error);
})
