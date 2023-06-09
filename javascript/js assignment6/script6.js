let list = document.getElementById('list');
let filter = document.querySelector('.filter');
let count = document.getElementById('count');
let listProducts = [
        {
            id:001,
            name:'Chudi-Black',
            price:5000,
            images:'chudi1.jpg',
            nature: 
            {
                color:['black'],
                size:['S','M','L','XL','XXL'],
                type:'Chudi'
            }
        },
        {
            id:002,
            name:'Saree-Red',
            price:5000,
            images:'images/saree1.jpg',
            nature: 
            {
                color:['Red'],
                size:['S','M','L','XL','XXL'],
                type:'Saree'
            }
        },
        {
            id:003,
            name:'Lehanga-Pink',
            price:5000,
            images:'images/lehanga1.jpg',
            nature: 
            {
                color:['Pink'],
                size:['S','M','L','XL','XXL'],
                type:'Lehanga'
            }
        },
        {
            id:004,
            name:'Frock-Pink',
            price:5000,
            images:'images/chudi1.jpg',
            nature: 
            {
                color:['Pink'],
                size:['S','M','L','XL','XXL'],
                type:'Frock'
            }
        },
        {
            id:005,
            name:'Casuals-Blue',
            price:5000,
            images:'images/chudi1.jpg',
            nature: 
            {
                color:['Blue'],
                size:['S','M','L','XL','XXL'],
                type:'Casuals'
            }
        }
    ]
console.log(listProducts);
let productFilter = listProducts;
showProduct(productFilter);
function showProduct(productFilter)
{
    count.innerText = productFilter.length;
    list.innerHTML ='';
    productFilter.forEach(item =>
        {
            let newItem = document.createElement('div');
            newItem.classList.add('item');

            let newImage = new Image();
            newImage.src = item.image;
            newItem.appendChild(newImage);
            let newTitle = document.createElement('div');
            newTitle.classList.add('title');
            newTitle.innerText = item.name;
            newItem.appendChild(newTitle);
            let newPrice = document.createElement('div');
            newPrice.classList.add('price');
            newPrice.innerText = item.price.toLocaleString();
            newItem.appendChild(newPrice);
            list.appendChild(newItem);
        });
}
filter.addEventListener('submit',function(event)
{
    event.preventDefault();
    let valueFilter = event.target.elements;
    productFilter = listProducts.filter(item =>
        {
            if(valueFilter.category.value != '')
            {
                if(item.nature.type !=valueFilter.category.value)
                {
                    return false;
                }
            }
            if(valueFilter.color.value != '')
            {
                if(item.nature.color.includes(valueFilter.color.value))
                {
                    return false;
                }
            }
            if(valueFilter.name.value != '')
            {
                if(item.name.includes(valueFilter.name.value))
                {
                    return false;
                }
            }
            if(valueFilter.minPrice.value != '')
            {
                if(item.price < valueFilter.minPrice.value)
                {
                    return false;
                }
            }
            if(valueFilter.maxPrice.value != '')
            {
                if(item.price > valueFilter.maxPrice.value)
                {
                    return false;
                }
            }
            return true;
        })
        showProduct(productFilter);
})
