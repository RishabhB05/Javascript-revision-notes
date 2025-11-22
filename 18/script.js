//Async / await 
//when we fetch an APi it returns a promise, so we dont get the result directly
//thats why we use async await to wait for the result and then return

//method 1
async function getData(){
   let result = await fetch('https://api.github.com/users/rishabh-barauh');
   let data = await result.json();
   console.log(data);
}

getData();

//method 2
fetch('https://api.github.com/users/rishabh-barauh').then((result)=>{
    return result.json();
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("fetching is done");
});