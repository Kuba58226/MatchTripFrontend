<template>
    <div v-if="loading" v-loading="true" class="loading-wrapper"></div>
    <el-row v-else>
        <el-col :md="24" :sm="24" :xs="24">
            <h1 class="app-padding"><el-icon><Back /></el-icon> Wybierz lotnisko</h1>
            <el-row :gutter="20" class="app-padding content-border">
                <el-col :span="24">
                    <NuxtLink v-for="airport in store.airports" :to="{name: 'select-match'}" class="card select-airport__card">
                        <el-icon :size="40"><Location /></el-icon>
                        <div class="select-airport__info">
                            <h2>{{ airport.name }}</h2>
                            <h3>{{ airport.iataCode }}</h3>
                        </div>
                    </NuxtLink>
                </el-col>
            </el-row>
        </el-col>
    </el-row>
</template>

<script setup lang="ts">
const store = useStore()
const route = useRoute()

const clubId = route.params.clubId as string

const { promise, loading } = useDataLoader([
  () => store.fetchAirports(clubId),
])

</script>

<style lang="scss" scoped>
.select-airport {
    &__card {
        display: flex;
        align-items: center;
        gap: 40px;
        margin-bottom: 20px;
    }
    &__info {
        text-align: left;
    }
}
</style>