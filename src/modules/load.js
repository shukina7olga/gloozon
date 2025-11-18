import getData from "./getData"
import postData from "./postData"
import renderGoods from './renderGoods'

const load = () => {

    getData().then((data) => {
        // console.log(data);
        renderGoods(data)
    })


    // cartBtn.addEventListener('click', () => {
    //     postData().then((data) => {
    //         console.log(data);
    //         getData().then((data) => {
    //             console.log(data);
    //         })
    //     })
    // })
}

export default load