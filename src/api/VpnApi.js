import { Request } from './request.js';

export class VpnApi {
    static baseUrl ='/api/api/vpn';

    static async queryList() {
        return await Request.get(this.baseUrl);
    };

    static async addUser({ email, deadline }) {
        return await Request.create(this.baseUrl, { email, deadline });
    }
}