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
    <input class="elements__cart--cant" type="number" value=1></input>
    <button class="item__remove">X</button>
    </div>`;

    conteinerAddElementDivS.append(conteinerAddElementDiv);
  
    const itemsRemove=document.querySelectorAll('.item__remove');

    const itemCant=document.querySelectorAll('.elements__cart--cant');
    itemCant.forEach((element)=>{
        element.addEventListener('change',cantT);

    })
    /*Otra Forma de realizar el recorrido sin el forEach CANTIDAD
    conteinerAddElementDiv.querySelector('.elements__cart--cant').addEventListener('change',cantT);
    */

    itemsRemove.forEach((removeIt)=>{
        removeIt.addEventListener('click',removeContainer);
    })

       /*Otra Forma de realizar el recorrido sin el forEach REMOVE
    conteinerAddElementDiv.querySelector('.item__remove').addEventListener('click',removeContainer);
    */
    sumarItemsPrice();
  
}

function sumarItemsPrice(){
    let itemPrice=0;
    const itemPriceContainer=document.querySelector('.elements__cart--total');
    const itemT=document.querySelectorAll('.elements__cart--items');
  
    itemT.forEach((element)=>{ 
        const itemsSelector=element.querySelector('.item__price--items');
        const priceOperation=Number(itemsSelector.textContent.replace('$',''));
        const cantSelector = element.querySelector('.elements__cart--cant');
        const cantOperation= Number(cantSelector.value);
        itemPrice=itemPrice+priceOperation*cantOperation;
})
 
  

    itemPriceContainer.innerHTML=`<h3 class="elements__cart__h3">Total: $${itemPrice}</h3>`;

}

function cantT(event){
    let valueCant=event.target;
    if(valueCant.value<=0){
    valueCant.value=1;

     }
     sumarItemsPrice();

}

function removeContainer(event){
        const item=event.target;
        const itemRemoveContainer=item.closest('.elements__cart--items');
        itemRemoveContainer.remove();
        sumarItemsPrice();
}


