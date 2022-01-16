import axios from "axios";
import { apiEndPoint } from './APIEndPoint';


// {
//     headers: {
//         'Access-Control-Allow-Origin': '*'
//     }
// }

const client = axios.create();

export default class ApiService<T> {

    // GET method
    static async Get<T>(apiEndPoint: string) {
        const response = await client.get(`${apiEndPoint}`)
        const data: T = await response.data;
        return data;
    }

    // POST method
    static async POST<T>(apiEndPoint: string, body: any) {
        const response = await client.post(`${apiEndPoint}`, { ...body });
        const data: T = await response.data;
        return data;
    }
};