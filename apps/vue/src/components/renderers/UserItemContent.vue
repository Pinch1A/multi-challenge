<template>
  <div>
    <p>Email: {{ item.data.email }}</p>
    <p>Birth: {{ item.data.birth }}</p>
  </div>
</template>

<script setup lang="ts">
import type { TypedListItem } from '@shared/types'
defineProps<{ item: TypedListItem<'user'> }>()
</script>
