const getData = () => {
    return fetch('https://newtest-d30d8-default-rtdb.firebaseio.com/goods.json')
        .then((response) => {
            return response.json();
        })

}

export default getData 