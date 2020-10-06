import api from '../config/axios'


export default class CrudDepositoApi {
    private readonly table: string

    constructor(table: string){
        this.table = table
    }

    async findAll(){
        try {
            const res = await api.get(`${this.table}`)
            if(!res) return false
            return res.data
        } catch (error) {
            console.log(`Class CrudDepositoApi ${error}`)
            return false
        }
    }

    async findById(id: string) {
        try {
            const res = await api.get(`${this.table}/${id}`)
            if(!res) return false
            return res.data
        } catch (error) {
            console.log(`Class CrudDepositoApi ${error}`)
            return false
        }
    }

}