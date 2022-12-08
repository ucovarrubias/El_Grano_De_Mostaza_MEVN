import axios from 'axios'
const urlClientes = '/api/cliente'
const urlProductos = '/api/producto'

export default class API {
    static async getAllClientes(){
        const res = await axios.get(urlClientes)
        return res.data
    }

    static async getClientebyID(id){
        const res = await axios.get(urlClientes+'/'+id)
        return res.data
    }

    static async addCliente(cliente){
        const res = await axios.post(urlClientes, cliente)
        return res.data
    }

    static async updateCliente(id, cliente){
        const res = await axios.patch(urlClientes+'/'+id, cliente)
        return res.data
    }

    static async deleteCliente(id){
        const res = await axios.delete(urlClientes+'/'+id)
        return res.data
    }

    static async authenticateCliente(usuario, contrasenia){
        const res = await axios.post(urlClientes+'/auth', usuario, contrasenia)
        return res.data
    }

    static async getAllProductos(){
        const res = await axios.get(urlProductos)
        return res.data
    }

    static async updateCarrito(id, carrito){
        const res = await axios.patch(urlClientes+'/carrito/'+id, carrito)
        return res.data
    }

    static async getCarrito(id){
        const res = await axios.get(urlClientes+'/carrito/'+id)
        return res.data
    }
}