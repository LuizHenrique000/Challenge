import axios from 'axios'

export const getLivros = () => {
    return axios.get("https://fakerapi.it/api/v1/books?_quantity=20");
}