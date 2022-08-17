import http from "@/http-common";

class AuthService {

    login(data: any): Promise<any> {
        return http.post("/users/login", data);
    }
}

export default new AuthService();