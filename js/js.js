
if (localStorage.length > 0) {
    document.body.style.background = localStorage.color;
}
function setColor(color) {
    localStorage.setItem('color', color)
    document.body.style.background = color;
}
// change Body Background22
if (localStorage.length > 0) {
    document.querySelector('body').style.backgroundColor = localStorage.body_bg;
}
function bodyBgColor(color) {
    let elementSelected = document.getElementById(color);
    let elementBg = window.getComputedStyle(elementSelected).backgroundColor;
    localStorage.setItem('body_bg', elementBg);
    document.querySelector('body').style.backgroundColor = elementBg;

}
let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');
let mood = 'create';
let tmp;

//get total
function getTotal() {
    console.log(price.value)
    if (price.value != '') {

        let result = (+price.value + +taxes.value + +ads.value) - +discount.value;
        total.innerHTML = result
        total.style.background = '#777';
    } else {
        total.innerHTML = '';
        total.style.background = '#ac4a4a';

    }

}
//creat product
let dataPro = [];
if (localStorage.product != null) {
    dataPro = JSON.parse(localStorage.product)
} else {
    dataPro = [];
}
// localStorage.product != null ? dataPro = JSON.parse(localStorage.product) : dataPro = [];
submit.onclick = function () {
    let newPro = {
        title: title.value,
        price: price.value,
        taxes: taxes.value,
        ads: ads.value,
        discount: discount.value,
        total: total.innerHTML,
        count: count.value,
        category: category.value,
    }
    //count
    if(mood === 'create') {
if(newPro.count > 1){
 for(let i = 0; i < newPro.count ; i++){
        dataPro.push(newPro);
    }
} else{
      dataPro.push(newPro);
    } 
    } else{
        dataPro [tmp] = newPro;
        submit.innerHTML = "create";
          mood = 'create';
          count.style.display = 'block';
    }
    localStorage.setItem('product', JSON.stringify(dataPro))
    clearDate();
    showDate();
    updateDate();
  
}
//clear inputs
function clearDate() {
    title.value = '';
    price.value = '';
    taxes.value = '';
    ads.value = '';
    discount.value = '';
    total.innerHTML = '';
    ads.value = '';
    count.value = '';
    category.value = '';

}
//save localStorage
//read inputs 
function showDate() {
    getTotal();
    let table = '';
    for (let i = 0; i < dataPro.length; i++) {
        table += `   
        <tr>
        <td>${i}</td>
        <td>${dataPro[i].title}</td>
        <td>${dataPro[i].price}</td>
        <td>${dataPro[i].taxes}</td>
        <td>${dataPro[i].ads}</td>
        <td>${dataPro[i].total}</td>
        <td>${dataPro[i].discount}</td>
        <td>${dataPro[i].count}</td>
        <td>${dataPro[i].category}</td>
      
        <td><button  onclick="updateDate( ${i} )"class="btn btn-primary" id="update"> update</button></td>

        <td><button onclick="deletDate( ${i} )" class="btn btn-primary" id="delete"> delete</button></td>
      </tr>`
    }
    document.getElementById('hambozo').innerHTML = table;
    let btnDeleted =document.getElementById('deleteAll') 
    if (dataPro.length > 0){
    btnDeleted.innerHTML =`
    <button onclick="deleteAll( ${dataPro.length} )" class="btn btn-primary" > deleteAll</button>`
} else {
    btnDeleted.innerHTML = '';
}
}
showDate();
//delete
function deletDate(i)
{

  
    dataPro.splice(i,1);
    localStorage.product = JSON.stringify(dataPro);
    showDate();
}
//delete all
function deleteAll(){
    localStorage.clear();
    dataPro.splice(0);
    showDate();
}
//update
function updateDate(){
  title.value = dataPro[i].title,
  price.value = dataPro[i].price,
  taxes.value = dataPro[i].taxes,
  ads.value = dataPro[i].ads,
  discount.value = dataPro[i].discount,
  getTotal()
  count.style.display ='none';
  category.value = dataPro[i].category,
  submit.innerHTML = "Update";
  mood = 'update';
  tmp= i ;

  scroll({
    top:0,
    behavior:'smooth'
  })
}
//search
//clean data
