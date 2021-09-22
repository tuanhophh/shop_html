
var gio = document.querySelector("#gio");
var nhapChuot = 0;
var content1 = document.querySelector("#content1");
var Content2 = document.querySelector("#content2");
var color = document.querySelector('.color select');
var size = document.querySelector('.size select');
var qty = document.querySelector('.qty input');
var btnAddtocart = document.querySelector('#btnAddtocart');
var btnAddtowishlist = document.querySelector('#btnAddtowishlist');
var giohang = document.querySelector('.giohang');
var wrapper = document.querySelector('#wrapper');
var btnhuydonhang = document.querySelector('#btnhuydonhang');
var giaodich = document.querySelector('.giaodich');
btncolor = document.querySelector('.btncolor');
btnsize = document.querySelector('.btnsize');
btnprice = document.querySelector('.btnprice');
btnqua = document.querySelector('.btnqua');
btnbox = document.querySelector('.box');
var right = document.querySelector('#right');
var btnthanhtoan = document.querySelector('#btnthanhtoan');
var hoten = document.querySelector('.hoten');
var sdt = document.querySelector('.sdt');
var diachi = document.querySelector('.diachi');
var tam = document.querySelector('.tam');
var tien = document.querySelector('.tien');
var km = document.querySelector('.km');
var btnclear = document.querySelector('.btnclear');
var from = document.querySelector('.from');

Content2.style.display = "none";
km.style.display = "none";

var madaz = document.querySelector('#madaz');
var madaz1 = document.querySelector('#madaz1');
var civic = document.querySelector('#civic');
var camry = document.querySelector('#camry');
var i10 = document.querySelector('#i10');
civic.addEventListener('click', function () {
    madaz.src = 'https://cdn.shopify.com/s/files/1/0332/6420/5963/products/p25-3_720x.jpg?v=1581504733';
})
i10.addEventListener('click', function () {
    madaz.src = 'https://cdn.shopify.com/s/files/1/0332/6420/5963/products/p25-2_720x.jpg?v=1581504733';
})
camry.addEventListener('click', function () {
    madaz.src = 'https://cdn.shopify.com/s/files/1/0332/6420/5963/products/p25-1_720x.jpg?v=1581504733';
})
madaz1.addEventListener('click', function () {
    madaz.src = 'https://cdn.shopify.com/s/files/1/0332/6420/5963/products/p25-4_720x.jpg?v=1581504733';
})
btnAddtocart.addEventListener('click', function () {
    if (color.value != 'select color' && color.value != 'Đen' && color.value != 'Trắng') {
        alert('moi ban dien vao o color');
    } else {
        if (size.value != 'select size' && size.value != '37' && size.value != '38' && size.value != '39' && size.value != '40' && size.value != '41' && size.value != '42') {
            alert('moi ban dien vao o size');
        } else {
            if (qty.value < 1) {
                alert('moi ban dien vao o qty');
            } else {

                alert('ban da them vao gio hang thanh cong');
            }
        }
    }
})
btnAddtocart.addEventListener('click', function () {
    giohang.addEventListener('click', function () {
        btncolor.innerHTML = color.value;
        btnsize.innerHTML = size.value;
        btnqua.innerHTML = qty.value;
        btnprice.innerHTML = qty.value * 499;
        content1.style.display = "none";
        Content2.style.display = "block";

        tam.innerHTML = qty.value * 499;
        tien.innerHTML = qty.value * 499;



    })
})
giohang.addEventListener('click', function () {
    content1.style.display = "none";
    Content2.style.display = "block";
    right.style.display = "block";
    giohang.style.border = "none";


})
btnhuydonhang.addEventListener('click', function () {



})
btnbox.addEventListener('click', function () {


    tien.innerHTML = qty.value * 499 - 40;
    if (btnbox.checked == true) {
        km.style.display = "block";
        km.innerHTML = -40;
    } else {
        km.style.display = "none";
        tien.innerHTML = qty.value * 499;
    }


})

btnthanhtoan.addEventListener('click', function () {
    if (hoten.value == "" || hoten.value.trim()=="") {
        alert('ban chua nhap thong tin khach hang');
    } else if (sdt.value == "") {
        alert('ban chua nhap thong tin khach hang');
    } else if (diachi.value == "") {
        alert('ban chua nhap thong tin khach hang');
    } else if (isNaN(sdt.value) == true) {
        alert('moi ban nhap lai sdt');
    } else if (color.value != 'select color' && color.value != 'Đen' && color.value != 'Trắng') {
        alert('ban chua dien thong tin mua ban');
    }

    else {
        alert('ban da thanh toan thanh cong');
        window.location.reload(true);
    }
})
var hop=document.querySelector('.hop');
btnclear.addEventListener('click', function () {
    document.getElementById("hop").selectedIndex = 0;
    document.getElementsByClassName("selectSize")[0].selectedIndex = 0;
    document.getElementsByClassName("hop2")[0].selectedIndex = 0;

})

btnhuydonhang.addEventListener('click',function(){

   var arrClassName = document.getElementsByClassName("btnCancel");

  for(var i = 0;i < arrClassName.length; i++){
        arrClassName[i].innerHTML = "";
  }
})







