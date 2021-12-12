const itemDetails=[
    {id: 1,foto: 'https://www.collinsdictionary.com/images/full/salmon_155379689_1000.jpg',name: "Salmon",description: "Salmon",stock: 23, price:5,
detail: 'Salmon is the common name for several species of ray-finned fish in the family Salmonidae. Other fish in the same family include trout, char, grayling, and whitefish. Salmon are native to tributaries of the North Atlantic and Pacific Ocean. '},
    {id: 2,foto: 'https://www.collinsdictionary.com/images/full/seabass_290657354_1000.jpg',name: "Sea_Bass",description: "Sea_Bass",stock: 3, price:4,
detail: 'sea bass, (family Serranidae), any of the numerous fishes of the family Serranidae (order Perciformes), most of which are marine, found in the shallower regions of warm and tropical seas. The family includes about 475 species, many of them well-known food and sport fishes. ... Sea bass are rather perchlike fish.'},
    {id: 3,foto: 'https://www.collinsdictionary.com/images/full/trout_499213063_1000.jpg?version=4.0.204',name: "Trout",description: "Trout",stock: 40, price:4.5,
detail: 'Trout are species of freshwater fish belonging to the genera Oncorhynchus, Salmo and Salvelinus, all of the subfamily Salmoninae of the family Salmonidae. The word trout is also used as part of the name of some non-salmonid fish such as Cynoscion nebulosus, the spotted seatrout or speckled trout.'},
    {id: 4,foto: 'https://excellent-food.ch/wp-content/uploads/2020/09/Thunfisch-excellent-food-1024x683.jpeg',name: "Tuna",description: "Tuna",stock: 20, price:5,
detail: 'A tuna is a saltwater fish that belongs to the tribe Thunnini, a subgrouping of the Scombridae family. The Thunnini comprise 15 species across five genera, the sizes of which vary greatly, ranging from the bullet tuna up to the Atlantic bluefin tuna.'},
    {id: 5,foto: 'https://www.mundiario.com/media/mundiario/images/2019/09/27/2019092713402513918.png',name: "Tilapia",description: "Tilapia",stock: 10, price:6,
detail: 'Tilapia is the common name for nearly a hundred species of cichlid fish from the coelotilapine, coptodonine, heterotilapine, oreochromine, pelmatolapiine, and tilapiine tribes, with the economically most important species placed in the Coptodonini and Oreochromini. '},
    {id: 6,foto: 'https://www.collinsdictionary.com/images/full/herring_519332146_1000.jpg',name: "Herring",description: "Herring",stock: 3, price:4.5,
detail: 'Herring are forage fish, mostly belonging to the family Clupeidae. Herring often move in large schools around fishing banks and near the coast, found particularly in shallow, temperate waters of the North Pacific and North Atlantic Oceans, including the Baltic Sea, as well as off the west coast of South America.'},
    {id: 7,foto: 'https://media.istockphoto.com/photos/anchovy-isolated-with-path-picture-id186886032?k=20&m=186886032&s=612x612&w=0&h=NRAwqrtaOQgy8aRnuDA3ZSZAnXsxNjrw6grpc6R3zVo=',name: "Anchovy",description: "Anchovy",stock: 0, price:2.5,
detail: 'An anchovy is a small, common forage fish of the family Engraulidae. Most species are found in marine waters, but several will enter brackish water, and some in South America are restricted to fresh water.'}]

export const getItemDetail = new Promise((resolve, reject)=>{
        //acciones pueden ser o no asincroniucas
        // reject("404 not found")
        setTimeout(() => {resolve(itemDetails)}, 2000)})
    