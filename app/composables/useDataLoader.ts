import { ref } from 'vue'

export function useDataLoader(fetchers: (() => Promise<any>)[]) {
    const loading = ref(true)

    const fetchAll = async () => {
        try {
            await Promise.all(fetchers.map(fn => fn()))
        } catch (err) {
            throw new Error("Ładowanie danych nie powiodło się");
        } finally {
            loading.value = false
        }
    }

    const promise = fetchAll()

    return {
        loading,
        promise
    }
}
