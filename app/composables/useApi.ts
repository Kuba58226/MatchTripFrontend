import axios from 'axios'

export function useApi() {
    const runtimeConfig = useRuntimeConfig()
    const baseURL = process.server
        ? (runtimeConfig.apiIpBaseUrl as string)
        : (runtimeConfig.public.apiBaseUrl as string)

    const api = axios.create({
        baseURL,
    })

    async function get(url: string, config = {}) {
        return api.get(url, config)
    }

    async function post(url: string, data: any, config = {}) {
        return api.post(url, data, config)
    }

    async function put(url: string, data: any, config = {}) {
        return api.put(url, data, config)
    }

    async function patch(url: string, data: any, config = {}) {
        return api.patch(url, data, config)
    }

    async function remove(url: string, config = {}) {
        return api.delete(url, config)
    }

    return {
        get,
        post,
        put,
        patch,
        remove
    }
}
