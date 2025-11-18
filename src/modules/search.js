import getData from "./getData"
import renderGoods from "./renderGoods"
import { searchFilter } from "./filtres"

const search = () => {
    const searchInput = document.querySelector('.search-wrapper_input')

    searchInput.addEventListener('input', (event) => {
        const value = event.target.value

        // будем получать весь массив товаров и отфильтровывать по значению
        getData(value).then((data) => {
            renderGoods(searchFilter(data, value))
        })
    })
}

export default search