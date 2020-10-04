import moment from "moment";

export function diminuirDataPorDia(dataAtual: string, quantDias: number){
    return moment(dataAtual).subtract(quantDias, 'day').format('YYYY-MM-DD')
}