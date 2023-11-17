import { getShoppingCart } from "../utilities/fakedb";

export const ProductsAndCartLoader =async () => { //async use korar karon amra vitore await use kortece tai

    //get products
    const productsData = await fetch('http://localhost:5000/products'); //eta sudu loader er jonno
    // console.log("productsData", productsData)

    //cart component er jonno "productsData.json()" kora
    //karon 
    //niche amra product use kortece sei jonno "productsData.json()" kora
    const {products, count} = await productsData.json(); //amra ekta 0bject ke fatch korce r tar vitore 2ta property ase, propertys er modde products naam er property er value hosse array setake jeson kortece 
    // console.log("products", products)

    //get Cart
    const savedCart = getShoppingCart();
    const initialCart = [];
    // console.log("savedCart",savedCart);
    for(const id in savedCart){ //(object er upor loop use korbo bole for in)loop kore object thake key nisce
        // console.log("id", id)
        const addedProduct = products.find(product => product._id === id); //find thake ekta item payo jay
        // console.log("addedProduct", addedProduct) //eikhane product er vitore quantity celo na sei jonno niche quantity ta set kore disce
        if(addedProduct){
            const quantity = savedCart[id]; //object er naam diye [er vitore key ]  key bosaye value nisce
            addedProduct.quantity = quantity;
            
            /*
                Array value change or modify
                *normal Array
                initialCart ta ekta normal array, sei jonno amra push kortece == normal array change korar jonno

                *state er vitore jothy array thake r sei array er maan change ba moddify korar dorkar hoto,
                tahole push kortam na karon state er vitore array muiteble thake mane change hoy na. jothy  push kortam tahole puroton array oi rokom e thakto kintu oy array er pase notun value ta add hoye jeto jemon [[23,2,4], 55(new value)]
                state er vitore array maan dukate gele ba change korte gele notun kore array niye setar vitore new value dukate hobe. sei jonno distructor korte hoy [..., 5, 6]  eivabe 
            */
            
            initialCart.push(addedProduct);
        }
    }

    //way 1
    // return {products, initialCart}; //amra jothy return 2 value pathate chi tahole [] othoba {} er vitore kore pathate hobe
    //way 2
    return {products: products, initialCart: initialCart, count }; // eita use kortece shop r order er vitore 

}