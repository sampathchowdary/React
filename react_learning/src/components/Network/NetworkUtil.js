export const GetProducts = async()=> {
        const response = await fetch("https://dummyjson.com/products/1");
        const jsonData = await response.json();
        console.log(jsonData);
        return jsonData;
}


