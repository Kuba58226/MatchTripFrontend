import { defineStore } from 'pinia'
import { useApi } from "~/composables/useApi"
import type { Club } from '~/types/Club'

export const useStore = defineStore('store', {
    state: () => ({
        clubs: [] as Club[],
    }),
    actions: {
        async fetchClubs() {
            const { get } = useApi()
            await get('/club', {})
                .then((response :any) => {
                    this.clubs = response.data;
            })
        },
    },

})
