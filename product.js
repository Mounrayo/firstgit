let prod = document.querySelector('.products');
const apilink ='https://fakestoreapi.com/products';

function productList() {
    let output = '';
        fetch(apilink)
            .then(res=>res.json())
            .then(json => {

                json.forEach(data => {
                    output += `
                    
                        <div class="product">
                                <div class="product-img">
                                    <img src=" ${data.image}">
                                </div>
                                <div class="body">
                                    <h3>$${data.title}</h3>
                                    <h4> Rate: ${data.rating.rate}</h4>
                                    <h4>Price: #${data.price}</h4>
                                    <div class="btn">
                                        <a href="#"> Order</a>
                                    </div>
                                </div>
            
                        </div>`;
                    
                    
                })
                prod.innerHTML = output; 
            })

            
           
}

productList();