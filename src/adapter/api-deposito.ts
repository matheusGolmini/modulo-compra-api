import api from '../config/axios'


export default class CrudDepositoApi {
    private readonly table: string

    constructor(table: string){
        this.table = table
    }

    // async create(values: any){
    //     try {
    //         const instaceTable = getRepository(this.table)
    //         const res = await instaceTable.save(values)
    //         return res
    //     } catch (error) {
    //         console.log(`Class Crud ${error}`)
    //         return false
    //     }
    // }

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

    // async delete(id: string){
    //     try {
    //         const instaceTable = getRepository(this.table)
    //         const res = await instaceTable.delete(id)
    //         return res
    //     } catch (error) {
    //         console.log(`Class Crud ${error}`)
    //         return false
    //     }
    // }

    // async insert(value: string) {
    //     try {
    //         const instaceTable = getRepository(this.table)
    //         const res = await instaceTable.insert(value)
    //         return res
    //     } catch (error) {
    //         console.log(`Class Crud ${error}`)
    //         return false
    //     }
    // }

    // async update(value: string) {
    //     try {
    //         const instaceTable = getRepository(this.table)
    //         const res = await instaceTable.save(value)
    //         return res
    //     } catch (error) {
    //         console.log(`Class Crud ${error}`)
    //         return false
    //     }
    // }

}