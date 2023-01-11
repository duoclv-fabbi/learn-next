import { LoginPayload } from '@/models/auth';
import axiosClient from "./axiosClient"

export const authApi = {
    login(payload: LoginPayload) {
        return axiosClient.post('/login',payload)
    },
    logout(){
        return axiosClient.post('/login')
    },
    getProfile(){
        return axiosClient.get('/profile')
    }
}