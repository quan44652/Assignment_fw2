import { IProduct } from "../interfaces/product";
import instance from "./instance";
// const { accessToken } = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') as string) : ""
export const getAllProducts = () => {
    return instance.get("/products")
}
// export const removeProduct = async (_id: string | number) => {
//     console.log('Token', accessToken)
//     console.log("id", _id)
//     return await instance.delete("/products/" + _id, {
//         headers: {
//             Authorization: `Bearer ${accessToken}`
//         }
//     })
// }

export const addProduct = async (product: IProduct) => {

    return instance.post('/products', product)
}