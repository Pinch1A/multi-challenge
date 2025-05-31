<template>
  <div class="p-6 flex flex-col space-y-4">
    <h1 class="text-2xl font-bold">Login</h1>
    <input v-model="username" class="border p-2" placeholder="Username" />
    <input v-model="password" class="border p-2" type="password" placeholder="Password" />
    <button @click="handleLogin" class="bg-black text-white p-2">Login</button>
    <p v-if="auth.error" class="text-red-500">{{ auth.error }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const username = ref('')
const password = ref('')
const auth = useAuthStore()
const router = useRouter()

const handleLogin = async () => {
  const success = await auth.login({ username: username.value, password: password.value })
  if (success) router.push('/list')
}
</script>
