<template>
    <el-row v-if="loading" v-loading="true">

    </el-row>
    <el-row v-else>
        <el-col :md="24" :sm="24" :xs="24">
            <h1><el-icon><Back /></el-icon> Select Club</h1>
            <el-row :gutter="20">
                <el-col v-for="club in store.clubs" :span="12">
                    <NuxtLink :to="{name: 'select-airport'}" class="card select-club__card">
                        <img :src="club.logoUrl" :alt="club.name">
                        <span>{{ club.name }}</span>
                    </NuxtLink>
                </el-col>
            </el-row>
        </el-col>
    </el-row>
</template>

<script setup lang="ts">
const store = useStore()

const { promise, loading } = useDataLoader([
  () => store.fetchClubs(),
])

</script>

<style lang="scss" scoped>
.select-club {
    &__card {
        aspect-ratio: 1 / 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }
}
</style>