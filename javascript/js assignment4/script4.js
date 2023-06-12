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
    },
    {
        id:007,
        name:'Croptops-Lightmarron',
        price:1000,
        image:'croptops.jpeg',
        nature: 
        {
            color:['Lightmaroon'],
            size:['S','M','L','XL','XXL'],
            type:'Croptops'
        }
    },
    {
        id:010,
        name:'Jean-Blue',
        price:800,
        image:'jean.jpeg',
        nature: 
        {
            color:['Blue'],
            size:['S','M','L','XL','XXL'],
            type:'Jean'
        }
    },
    {
        id:011,
        name:'Longtops-Darkblue',
        price:1900,
        image:'longtops1.jpeg',
        nature: 
        {
            color:['Darkblue'],
            size:['S','M','L','XL','XXL'],
            type:'Longtops'
        }
    },
    {
        id:012,
        name:'Jeantop-Pink-Blue',
        price:800,
        image:'jean top.jpeg',
        nature: 
        {
            color:['Pink','Blue'],
            size:['S','M','L','XL','XXL'],
            type:'Jeantop'
        }
    },
    {
        id:013,
        name:'Choli-Skyblue',
        price:20000,
        image:'choli1.jpeg',
        nature: 
        {
            color:['Skyblue'],
            size:['S','M','L','XL','XXL'],
            type:'Choli'
        }
    },
    {
        id:014,
        name:'Jumpsuit-Gray',
        price:2000,
        image:'jumpsuit.jpeg',
        nature: 
        {
            color:['Gray'],
            size:['S','M','L','XL','XXL'],
            type:'Jumpsuit'
        }
    },
    {
        id:015,
        name:'Sleepwear-Navyblue',
        price:1000,
        image:'sleepwear.jpeg',
        nature: 
        {
            color:['Navyblue'],
            size:['S','M','L','XL','XXL'],
            type:'Sleepwear'
        }
    },
    {
        id:016,
        name:'Wedding Frock-White',
        price:50000,
        image:'wfrock.jpg',
        nature: 
        {
            color:['White'],
            size:['S','M','L','XL','XXL'],
            type:'Wedding Frock'
        }
    },   
     {
        id:017,
        name:'Palasa-White-Green',
        price:2200,
        image:'palasa.jpeg',
        nature: 
        {
            color:['White','Green'],
            size:['S','M','L','XL','XXL'],
            type:'Palasa'
        }
    },
  
    
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
            if(valueFilter.lists.value != '')
            {
                if(item.nature.type !=valueFilter.lists.value)
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
                if(item.price > valueFilter.Price.value)
                {
                    return false;
                }
            }
            return true;
        })
        showProduct(productFilter);
})
