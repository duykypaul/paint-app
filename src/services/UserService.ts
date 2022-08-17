import http from "@/http-common";

class UserService {
    getAll(): Promise<any> {
        return http.get("/users");
    }

    get(id: any): Promise<any> {
        return http.get(`/users/${id}`);
    }

    create(data: any): Promise<any> {
        return http.post("/users", data);
    }

    update(id: any, data: any): Promise<any> {
        return http.put(`/users/${id}`, data);
    }

    delete(id: any): Promise<any> {
        return http.delete(`/users/${id}`);
    }

    deleteAll(): Promise<any> {
        return http.delete(`/users`);
    }

    findByTitle(title: string): Promise<any> {
        return http.get(`/users?title=${title}`);
    }
}

export default new UserService();