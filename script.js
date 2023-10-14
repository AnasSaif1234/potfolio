const header = document.querySelector(".navbar")

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}

let contactme = document.querySelector('.form');
document.querySelector('#btn').onclick = () =>
{
    contactme.classList.toggle('active');

    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    nav.classList.remove('active');
}
document.querySelector('#btn').addEventListener("click",()=>{
  const input1= document.querySelector('#abc')
  const input2= document.querySelector('#e')
  const input3 = document.querySelector('#f')
  const input4 = document.querySelector('#comment')

 input1.value=""
 input2.value=""
 input3.value=""
 input4.value=""
 
})

