const items=[
    {id: 1,foto: 'https://www.collinsdictionary.com/images/full/salmon_155379689_1000.jpg',name: "Salmon",description: "Salmon",stock: 23, price:5},
    {id: 2,foto: 'https://www.collinsdictionary.com/images/full/seabass_290657354_1000.jpg',name: "Sea_Bass",description: "Sea_Bass",stock: 3, price:4},
    {id: 3,foto: 'https://www.collinsdictionary.com/images/full/trout_499213063_1000.jpg?version=4.0.204',name: "Trout",description: "Trout",stock: 40, price:4.5},
    {id: 4,foto: 'https://excellent-food.ch/wp-content/uploads/2020/09/Thunfisch-excellent-food-1024x683.jpeg',name: "Tuna",description: "Tuna",stock: 20, price:5},
    {id: 5,foto: 'https://www.mundiario.com/media/mundiario/images/2019/09/27/2019092713402513918.png',name: "Tilapia",description: "Tilapia",stock: 10, price:6},
    {id: 6,foto: 'https://www.collinsdictionary.com/images/full/herring_519332146_1000.jpg',name: "Herring",description: "Herring",stock: 3, price:4.5},
    {id: 7,foto: 'https://17idjc2mjkuw17g32z1ivim6-wpengine.netdna-ssl.com/wp-content/uploads/Anchovy-1.png',name: "Anchovy",description: "Anchovy",stock: 0, price:2.5}]

export const getFetch = new Promise((resolve, reject)=>{
        //acciones pueden ser o no asincroniucas
        // reject("404 not found")
        setTimeout(() => {resolve(items)}, 2000)})
    