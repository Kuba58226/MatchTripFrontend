<template>
    <div v-if="loading" v-loading="true" class="loading-wrapper"></div>
    <el-row v-else>
        <el-col :md="24" :sm="24" :xs="24">
            <h1><el-icon><Back /></el-icon> Select Airport</h1>
            <el-row :gutter="20">
                <el-col :span="24">
                    <NuxtLink :to="{name: 'index'}" class="card select-airport__card">
                        <el-icon :size="40"><Location /></el-icon>
                        <div class="select-airport__info">
                            <h2>Katowice</h2>
                            <h3>KTW</h3>
                        </div>
                    </NuxtLink>
                    <NuxtLink :to="{name: 'index'}" class="card select-airport__card">
                        <el-icon :size="40"><Location /></el-icon>
                        <div class="select-airport__info">
                            <h2>Kraków</h2>
                            <h3>KRK</h3>
                        </div>
                    </NuxtLink>
                    <NuxtLink :to="{name: 'index'}" class="card select-airport__card">
                        <el-icon :size="40"><Location /></el-icon>
                        <div class="select-airport__info">
                            <h2>Berlin</h2>
                            <h3>BRA</h3>
                        </div>
                    </NuxtLink>
                </el-col>
            </el-row>
        </el-col>
    </el-row>
</template>

<script setup lang="ts">
const store = useStore()

const { promise, loading } = useDataLoader([
  () => store.fetchAirports(),
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