import instance from "./instance";
export const getAllProducts = () => {
    return instance.get("/products")
}