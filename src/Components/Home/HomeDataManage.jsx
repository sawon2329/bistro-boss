import saladsPhoto from '../../assets/menu/salad-bg.jpg';
import soupsPhoto from '../../assets/menu/soup-bg.jpg';
import pizzaPhoto from '../../assets/menu/pizza-bg.jpg';
import dessertPhoto from '../../assets/menu/dessert-bg.jpeg';




export const orderOnlineContent = [
    { 
        id:'salads001',
        title: 'Salads',
        img: saladsPhoto
    },
    {
        id:'soups002',
        title:'Soups',
        img:soupsPhoto
    },
    {
        id:'pizzas003',
        title:'Pizzas',
        img:pizzaPhoto
    },
    {
        id:'desserts004',
        title:'Desserts',
        img:dessertPhoto
    }
]



import MenuAPi from '../../menu.json'

export const chefRecommends = (apiFile, count) =>{
    const shufould  = [...apiFile].sort(()=> 0.5 - Math.random());
    const needItem = shufould.slice(0,4);
    return needItem;
}

