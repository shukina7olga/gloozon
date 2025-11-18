const getData = () => {
// const getData = (str) => {
    // вот так будет на практике. к примеру взять json-server. firebase наш не считается полноценным rest api. по этому делаем иначе
    // return fetch(`https://newtest-d30d8-default-rtdb.firebaseio.com/goods.json?${str ? `search=${str}` : ''}`) 
    return fetch(`https://newtest-d30d8-default-rtdb.firebaseio.com/goods.json`)
        .then((response) => {
            return response.json();
        })

}

export default getData 