
let datas=JSON.parse(localStorage.getItem("arr"));
 let count=1;
 let content =`
 <table>
 <thead>
 <tr>
 <td>s.no</td>
 <td>image</td>
 <td>bookName</td>
 <td>bookAuth</td>
 <td>bookPrice</td>
 <td>delete</td>
 </tr>
 </thead>
 <tbody>
 `;
 for(let data of datas){
content +=`
<tr>
<td>${count}</td>
<td><img src="${data.bookImg}" alt="nothimg"></td>
<td>${data.bookname}</td>
<td>${data.author}</td>
<td>${data.price}</td>
<td><button onclick="Delete(${count-1})">delete</button></td>
</tr>
`;
count++;
 }
content+=`
</tbody>
</table>
`;
 document.querySelector(".listData").innerHTML=content;

 function Delete(index){
     let arr=JSON.parse(localStorage.getItem("arr"));
     console.log(arr);
        arr.splice(index,1);
    localStorage.setItem("arr",JSON.stringify(arr));
    window.location.href="bookshop.html";
 }