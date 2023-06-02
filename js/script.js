let searchForm = document.querySelector  /*First declare a variable*/
('.search-form');  /*2nd get the class name of the container*/

document.querySelector('#search-btn').onclick = () => /*3rd get the id name of btn you want to active*/
 {
    searchForm.classList.toggle('active'); /*set the variable name into active name to use in CSS*/

    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
  
}


let shoppingCart = document.querySelector  
('.shopping-cart');  
  
document.querySelector('#cart-btn').onclick = () => 
 {
    shoppingCart.classList.toggle('active'); 

    searchForm.classList.remove('active'); 
    navbar.classList.remove('active');
}


let navbar = document.querySelector 
('.navbar'); 

document.querySelector('#menu-btn').onclick = () =>
 {
    navbar.classList.toggle('active'); 

    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    
  
}
/*slider*/

window.onscroll = () =>  /*hide or remove transition after clicking another icon/btn */
 {  
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active'); 
    navbar.classList.remove('active');
  
}