//local storage in JavaScript
// every browser provides a local storage object
// we can store key-value pairs in local storage
// data stored in local storage has no expiration time

 const button = document.querySelector('#saveButton');
 const input = document.querySelector('#userinput');

 button.addEventListener('click', function(){
    const value = input.value;
    //saving data to local storage
    localStorage.setItem('username', value);
 });

 //retrieving data from local storage
 const storedValue = localStorage.getItem('username');
 console.log(storedValue);  


 window.addEventListener('load', function(){
    const storedValue = localStorage.getItem('username');       
    if(storedValue){
        input.value = storedValue;
    }
 });