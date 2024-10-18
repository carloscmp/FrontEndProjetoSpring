import axios from "axios";


export const axiosInstance = axios.create({
    baseURL: "http://localhost:8080"
})

export class UsuarioService{
    listasTodos(){
        return axiosInstance.get("/usuario")
    }
}