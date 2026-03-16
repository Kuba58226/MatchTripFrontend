<template>
    <el-row v-if="loading" v-loading="true">

    </el-row>
    <el-row v-else>
        <el-col :md="24" :sm="24" :xs="24">
            <h1>Select Club</h1>
            <el-row :gutter="20">
                <el-col v-for="club in store.clubs" :span="12">
                    <div class="card">
                        <img src="#" alt="">
                        <span>{{ club.name }}</span>
                    </div>
                </el-col>
            </el-row>
        </el-col>
    </el-row>
</template>

<script setup lang="ts">
import { el } from 'element-plus/es/locale/index.mjs';


const store = useStore()

const { promise, loading } = useDataLoader([
  () => store.fetchClubs(),
])

</script>