export const bag = [];

export const addToBag = productId => {
  let matchItem;
      bag.forEach(product =>{
        if(product.productId === productId){
          product.quantity++;
          matchItem = true;
        }
      });

      if(!matchItem){
        bag.push({
          productId,
          quantity : 1
        });
      }
}