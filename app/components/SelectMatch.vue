<template>
    <div v-if="loading" v-loading="true" class="loading-wrapper"></div>
    <el-row v-else>
        <el-col :md="24" :sm="24" :xs="24">
            <h1 class="app-padding"><el-icon><Back /></el-icon> Wybierz mecz</h1>
            <el-row :gutter="20" class="app-padding content-border">
                <el-col :span="24">
                    <div class="select-match__buttons">
                        <p>{{ monthName }} {{ year }}</p>
                        <el-button-group class="mb-4">
                            <el-button :disabled="isPrevDisabled" type="primary" @click="prevMonth">
                                <el-icon><Back /></el-icon>
                                Poprzedni miesiąc
                            </el-button>
                            <el-button type="primary" @click="nextMonth">
                                Następny miesiąc
                                <el-icon><Right /></el-icon>
                            </el-button>
                        </el-button-group>
                    </div>
                    <NuxtLink v-for="schedule in filteredSchedules" :to="{name: 'select-match'}" class="card select-match__card">
                        <div class="select-match__date">
                            <h2 class="select-match__header">{{ formatDate(schedule.date) }}</h2>
                        </div>
                        <div class="select-match__opponent">
                            <div class="select-match__info">
                                <h3 class="select-match__header">vs {{ schedule.awayTeam }}</h3>
                                <h4 class="select-match__header">Santiago Bernabeu</h4>
                            </div>
                            <img src="http://localhost:4000/uploads/logos/liverpool.svg" width="30px">
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

const today = new Date()
const month = ref(today.getMonth() + 1)
const year = ref(today.getFullYear())

const { promise, loading } = useDataLoader([
  () => store.fetchSchedule(clubId),
])

const filteredSchedules = computed(() => 
  store.schedules.filter(s => {
    const d = new Date(s.date)
    return d.getMonth() + 1 === month.value && d.getFullYear() === year.value
  })
)

const isPrevDisabled = computed(() => {
  return month.value === today.getMonth() + 1 && year.value === today.getFullYear()
})

function formatDate(dateStr: string) {
  const date = new Date(dateStr)
  const day = date.getDate()
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  const month = monthNames[date.getMonth()]
  const year = date.getFullYear()

  const hours = date.getHours().toString().padStart(2, '0')
  const minutes = date.getMinutes().toString().padStart(2, '0')

  return `${day} ${month} ${year} ${hours}:${minutes}`
}

function prevMonth() {
  if (month.value === 1) {
    month.value = 12
    year.value -= 1
  } else {
    month.value -= 1
  }
}

function nextMonth() {
  if (month.value === 12) {
    month.value = 1
    year.value += 1
  } else {
    month.value += 1
  }
}

const monthName = computed(() => {
  const names = ["Styczeń","Luty","Marzec","Kwiecień","Maj","Czerwiec",
                 "Lipiec","Sierpień","Wrzesień","Październik","Listopad","Grudzień"]
  return names[month.value - 1]
})
</script>

<style lang="scss" scoped>
.select-match {
    &__buttons {
        text-align: center;
        margin-bottom: 20px;
    }
    &__card {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 20px;
    }
    &__date {
        width: 100%;
        border-bottom: 1px solid #95969C;
        text-align: left;
    }
    &__opponent {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
    }
    &__info {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        text-align: left;
    }
}

h2, h3, h4 {
    margin: 0.40em 0;
}

h4 {
    font-weight: normal;
}
</style>