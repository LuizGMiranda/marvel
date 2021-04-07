import toast from "react-hot-toast"
import api, { createQueryParams } from "../config/api"

async function getAllCharacters() {
    try {
        const { data } = await api.get('/characters' + createQueryParams({ limit: 18}))
        return data.data
    } catch(err) {
        console.error('Ocorreu um erro! Tente mais tarde!! Erro:', err)
        toast.error("Ocorreu um erro. Tente mais tarde!")
        return {results: []}
    }
}

async function getByIdCharacters(id) {
    try {
        const { data } = await api.get('/characters/'+ id + createQueryParams())
        return data.data.results[0]
    } catch(err) {
        console.error('Ocorreu um erro! Tente mais tarde!! Erro:', err)
        toast.error("Ocorreu um erro. Tente mais tarde!")
        return {results: []}
    }
}

async function getSearchCharacters(nameStartsWith) {
    try {
        const { data } = await api.get('/characters' + createQueryParams({ nameStartsWith }))
        return data.data
    } catch(err) {
        console.error('Ocorreu um erro! Tente mais tarde!! Erro:', err)
        toast.error("Ocorreu um erro. Tente mais tarde!")
        return {results: []}
    }
}

export {
    getAllCharacters,
    getByIdCharacters,
    getSearchCharacters
}
