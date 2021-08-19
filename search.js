const bookitems = [
    {id: 1, name:"mahabaratha", price:800, category:"history"},
    {id: 2, name:"history and morality", price:500, category:"history"},
    {id: 3, name:"the hidden history of bhurma", price:280, category:"NONVEG"},
    {id: 3, name:"kargil 1999", price:59, category:"NONVEG"},
]

class MenuSearch{

    static getAllItems(){
        return bookitems;
    }

    static searchByCategory(category){
        //todo - need to write logic
        // let results= [];
        // for(let item of foodItems){
        //     if (item.category == category){
        //         results.push(item);
        //     }
        // }
        // return results;
        let results= foodItems.filter(item=> item.category==category);
        return results;
    }

    static searchByName(name){
        //todo - need to write logic
        let results= [];
        for(let item of bookitems){
            if (item.name == name || item.category == name){
                results.push(item);
            }
        }
        return results;
    }
    static searchByPriceRange(min,max){
        let results= [];
        for(let item of bookitems){
            if (item.price >= min && item.price <= max){
                results.push(item);
            }
        }
        return results;
    }

    static searchByPrice(max){
        let results= [];
        for(let item of foodItems){
            if (item.price <=max){
                results.push(item);
            }
        }
        return results;
    }


    static getItemNames(){
        // let results= [];
        // for(let item of foodItems){
            
        //         results.push(item.name);
            
        // }
        // return results;
        const results = bookitems.map(obj=> obj.name);
        return results;
    }


}