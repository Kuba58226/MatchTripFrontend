import { defineStore } from 'pinia'
import { useApi } from "~/composables/useApi"
import type { Club } from '~/types/Club'

export const useStore = defineStore('store', {
    state: () => ({
        clubs: [] as Club[],
        airports: [] as any[],
    }),
    actions: {
        async fetchClubs() {
            const { get } = useApi()
            await get('/club', {})
                .then((response :any) => {
                    this.clubs = response.data;
            })
        },
        async fetchAirports(clubId: string) {
            const { get } = useApi()
            await get(`/club/${clubId}/airports`, {})
                .then((response :any) => {
                    this.airports = response.data.incomingRoutes.map(route => route.origin)
            })
        }
    },

})
