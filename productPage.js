function history(){

const dbusername = 'apikey-v2-23epskwaoah6sy6rvo29zejnn1k4kl1llrrq1ot36mry';
const dbpassword = '69c1d2737d371d9f6b7f6009287e6ccc';
const basicAuth = 'Basic ' + btoa(dbusername + ':' + dbpassword);

//const url="https://784ea086-d974-431c-aa48-7801aa7b2561-bluemix.cloudantnosqldb.appdomain.cloud/bookshop_history/_all_docs?include_docs=true";
axios.get(url,{ headers: { 'Authorization': basicAuth } }).then(res => {
    let datas = res.data.rows.map(obj=>obj.doc);
// let datas=[{img:"book2.jpg",bookName:"book1",bookAuth:"name1",price:200},{img:"book1.jpg",bookName:"book1",bookAuth:"name1",price:200}]
let content="";
for(let data of datas){
content+=`<div><img src="${data.img}" alt="">
<p>${data.bookName}</p>
<p>${data.bookAuth}</p>
<p>${data.price}</p>
</div>`

}
console.log(content);
document.querySelector("#product-list").innerHTML=content;

}).catch(err => {
    console.error(err);
    alert("error");
});
}
history();