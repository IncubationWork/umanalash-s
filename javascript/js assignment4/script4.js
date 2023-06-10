let list = document.getElementById('list');
let filter = document.querySelector('.filter');
let count = document.getElementById('count');
let Productlists = [
    {
        id:001,
        name:'Chudi-Black',
        price:5000,
        image:'chudi1.jpg',
        nature: 
        {
            color:['Black'],
            size:['S','M','L','XL','XXL'],
            type:'Chudi'
        }
    },
    {
        id:002,
        name:'Saree-Red',
        price:15000,
        image:'saree1.jpg',
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
        price:10000,
        image:'lehanga1.jpg',
        nature: 
        {
            color:['Pink'],
            size:['S','M','L','XL','XXL'],
            type:'Lehanga'
        }
    },
    {
        id:004,
        name:'Frock-Darkpink',
        price:8000,
        image:'frock.jpg',
        nature: 
        {
            color:['Darkpink'],
            size:['S','M','L','XL','XXL'],
            type:'Frock'
        }
    },
    {
        id:005,
        name:'Casuals-Blue',
        price:2000,
        image:'casuals.jpg',
        nature: 
        {
            color:['Blue'],
            size:['S','M','L','XL','XXL'],
            type:'Casuals'
        }
    },
    {
        id:006,
        name:'Salwar-Yellow',
        price:6000,
        image:'salwar.jpg',
        nature: 
        {
            color:['Yellow'],
            size:['S','M','L','XL','XXL'],
            type:'Salwar'
        }
    }
]

console.log(Productlists);
let productFilter = Productlists;
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
    productFilter = Productlists.filter(item =>
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
            if(valueFilter.Price.value != '')
            {
                if(item.price < valueFilter.Price.value)
                {
                    return false;
                }
            }
            return true;
        })
        showProduct(productFilter);
})
