<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { fetchList } from '@shared/api/client'
import type { ListItem } from '@shared/types'
import { useAuthStore } from '../stores/auth'
import { storeToRefs } from 'pinia'
import ItemCard from '../components/ItemCard.vue'
import SkeletonItem from '../components/SkeletonItem.vue'

const router = useRouter()
const auth = useAuthStore()
const { token } = storeToRefs(auth)

const items = ref<ListItem[] | null>(null)
const error = ref<string | null>(null)
const loading = ref(true)

onMounted(async () => {
  if (!token.value) {
    router.push('/login')
    return
  }

  try {
    loading.value = true
    const result = await fetchList('vue')

    if ('error' in result) {
      error.value = result.error
      items.value = null
    } else {
      items.value = result
      error.value = null
    }
  } catch (err) {
    error.value = 'Unexpected error'
    console.error(err)
  } finally {
    loading.value = false
  }
})

const handleLogout = () => {
  auth.logout()
  router.push('/login')
}
</script>

<template>
  <div class="min-h-screen flex flex-col bg-gray-50 w-full rounded-md border border-gray-200">
    <!-- Header -->
    <div class="w-full flex justify-between items-center p-4 border-b border-gray-200 bg-white">
      <h1 class="text-2xl font-bold">Items List</h1>
      <button
        class="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
        @click="handleLogout"
      >
        Logout
      </button>
    </div>

    <!-- Content -->
    <div class="flex flex-col space-y-6 w-full p-4 flex-1">
      <template v-if="loading">
        <SkeletonItem />
        <SkeletonItem />
        <SkeletonItem />
      </template>

      <template v-else-if="error">
        <p class="text-red-500">{{ error }}</p>
      </template>

      <template v-else-if="items && items.length === 0">
        <p>No items found</p>
      </template>

      <template v-else>
        <ItemCard v-for="item in items" :key="item.id" :item="item" />
      </template>
    </div>
  </div>
</template>
