import instance from "./instance";

export const getAllCategories = () => {
    return instance.get('/category')
}

export const getCategoryById = (id: string) => {
    return instance.get('/category/' + id)
}