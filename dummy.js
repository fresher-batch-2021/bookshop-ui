function da(){
let value = [{bookImg:"maha.jpg", bookname : "maha",author : "maha",price:  600,},
            { bookImg:"Harry.jpg",bookname:"harry potter",author:"name",price:300}];


let d=localStorage.setItem("arr", JSON.stringify(value));
window.location.href="bookshop.html";
}