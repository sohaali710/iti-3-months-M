
function showProducts(){
    // 'https://dummyjson.com/products?select=title,price' => get specific properties (title,price + id (already is given in th object))
    // 'https://dummyjson.com/products/category/smartphones' => get products with specific category 

    
    fetch('https://dummyjson.com/products').then(res=>res.json()).then(data=>{

    // console.log(data);
    // console.log(data.products)

        let productsData = data.products.reverse().slice(0,5);
        
        [...productsData,...productsData,...productsData,...productsData].forEach((product) => {
            let {title, id,images,price,category} = product;

            let container = document.getElementsByClassName("container")[0];

            let myDiv = document.createElement("div");
            myDiv.classList = "myDiv";

            myDiv.innerHTML = `
                <img src="${images[0]}">
                <div class="child">
                    <h4 class="tit">${title}</h4>
                    <h6 class="category">${category}</h6>
                    <h5 class="price">${price} $</h5>
                </div>
            `;
            
            container.append(myDiv);

        })
    });
};

showProducts();