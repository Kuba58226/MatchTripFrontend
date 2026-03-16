<template>
    <div v-if="loading" v-loading="true" class="loading-wrapper"></div>
    <el-row v-else>
        <el-col :md="24" :sm="24" :xs="24">
            <h1 class="app-padding"><el-icon><Back /></el-icon> Wybierz mecz</h1>
            <el-row :gutter="20" class="app-padding content-border">
                <el-col :span="24">

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
.select-match {

}
</style>