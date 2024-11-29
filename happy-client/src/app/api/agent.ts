import axios, { AxiosResponse } from "axios";
import { Product } from "../models/product";
import { User, UserFormValues, VerifyEmailFormValues } from "../models/user";
import { store } from "../stores/store";

axios.defaults.baseURL = "http://localhost:5000/api"

const responseBody = <T> (response: AxiosResponse<T>) => response.data;

axios.interceptors.request.use(config => {
    const token = store.commonStore.token;
    if (token && config.headers) config.headers.Authorization = `Bearer ${token}`;
    return config;
})

const requests = {
    get: <T> (url: string) => axios.get<T>(url).then(responseBody),
    post: <T> (url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
    put: <T> (url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
    del: <T> (url: string) => axios.delete<T>(url).then(responseBody),
}

const Products = {
    list: () => requests.get<Product[]>("/products"),
    details: (id: string) => requests.get<Product>(`/products/${id}`),
    create: (product: Product) => axios.post<void>("/products", product),
    update: (product: Product) => axios.put<void>(`/products/${product.id}`, product),
    delete: (id: string) => axios.delete<void>(`/products/${id}`),
}

const Account = {
    current: () => requests.get<User>("/account"),
    login: (user: UserFormValues) => requests.post<User>("/account/login", user),
    register: (user: UserFormValues) => requests.post<User>("/account/register", user),
    verifyEmail: (user: VerifyEmailFormValues) => requests.post<User>("/account/verify-email", user)
}

const agent = {
    Products,
    Account
}

export default  agent;