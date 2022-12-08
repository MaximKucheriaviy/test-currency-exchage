import axios from "axios";

axios.defaults.baseURL= "https://api.apilayer.com/exchangerates_data"
axios.defaults.headers = {
    apikey: "hQHcOUhgAugUfdACsnejrsXbwh5vWJWt"
}

export const convert = async (base, to, amount) => {
    try{
        const result = await axios.get("convert", {
            params: {
                from: base,
                to,
                amount
            }
        })
        return result;
    }
    catch(err){
        console.log(err);
    }
}


export const exchanges = async (base, symbols) => {
    try{
        const result = await axios.get("latest",{
            params: {
                base,
                symbols 
            }
            
        });
        return result
    }
    catch(err){
        console.log(err);
    }
} 