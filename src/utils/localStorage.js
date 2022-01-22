export const loadData = ( key ) => {
    try{
        const value = JSON.parse(localStorage.getItem(key));
        return value;
    }
    catch{
        return null;
    }
}

export const setData = (key, value) => {
    try{
        localStorage.setItem(key, JSON.stringify(value));
        return 1;
    }
    catch{
        return -1;
    }
}