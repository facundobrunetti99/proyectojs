const elementCart=document.querySelectorAll('.item__addCart');

let conteinerAddElementDivS=document.querySelector('.elements__cart');

elementCart.forEach((itemsElementCart)=>{
    itemsElementCart.addEventListener('click',SelectionElementCart);  
});




function SelectionElementCart(event){
let itemsCart=event.target;
let conteinerCart=itemsCart.closest('.elements__shop--item');
let itemTitle=conteinerCart.querySelector('.item__title').textContent;
let itemPrice=conteinerCart.querySelector('.item__price').textContent;
let itemImg=conteinerCart.querySelector('.item__img').src;
addElementCartDiv(itemTitle,itemImg,itemPrice);
}

function addElementCartDiv(itemTitle,itemImg,itemPrice){
    let conteinerAddElementDiv=document.createElement('div');

    conteinerAddElementDiv.innerHTML=
    `<div class="elements__cart--items">
    <img src=${itemImg} alt="" class="item__img--items">  
    <h3 class="item__title--items">${itemTitle}</h3>
    <h3 class="item__price--items">${itemPrice}</h3> 
    <button class="item__remove">X</button>
    </div>`;

    conteinerAddElementDivS.append(conteinerAddElementDiv);
    sumarItemsPrice();
    const itemsRemove=document.querySelectorAll('.item__remove');

  

    itemsRemove.forEach((removeIt)=>{
        removeIt.addEventListener('click',removeContainer);
    })
    
  
}

function sumarItemsPrice(){
    let itemPrice=0;
    const itemPriceContainer=document.querySelector('.elements__cart--total');
    const itemPriceContainerDiv=document.querySelectorAll('.item__price--items');

    itemPriceContainerDiv.forEach((element)=>{
       let  priceElement=element.textContent;
        priceElement=Number(priceElement.replace("$",""));        
        
        itemPrice+=priceElement;

    })
    
    itemPriceContainer.innerHTML=`<h3 class="elements__cart__h3">$${itemPrice}</h3>`;
    
  


}






function removeContainer(event){
        const item=event.target;
        const itemRemoveContainer=item.closest('.elements__cart--items');
        itemRemoveContainer.remove();
        sumarItemsPrice();
}


