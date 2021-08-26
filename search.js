function getAllItems() {
    const bookitems = [
        { id: 1, name: "mahabaratha", price: 800, category: "history" },
        { id: 2, name: "history and morality", price: 500, category: "geo" },
        { id: 3, name: "the hidden history of bhurma", price: 280, category: "history" },
        { id: 3, name: "kargil 1999", price: 59, category: "history" },
    ];
    return bookitems;

}


class MenuSearch {

    static getAllItems() {
        return bookitems;
    }

    static searchbycategory(category) {
        let results = [];
        for (let item of bookitems) {
            if (item.category == category) {
                results.push(item);
            }
        }
        return results;
    }

    static searchbyname(name) {

        let results = [];
        for (let item of bookitems) {
            if (item.name == name) {
                results.push(item);
            }
        }
        return results;
    }
    static searchbyprice(min, max) {
        let results = [];
        for (let item of bookitems) {
            if (item.price >= min && item.price <= max) {
                results.push(item);
            }
        }
        return results;
    }

    static getItemNames() {
        let results = [];
        for (let item of bookitems) {

            results.push(item.name);
        }
        return results;
    }

}



