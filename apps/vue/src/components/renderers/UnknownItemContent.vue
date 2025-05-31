<template>
  <div class="text-red-600 italic">
    Unknown item type: {{ item.kind }}
  </div>
</template>

<script setup lang="ts">
import type { ListItem } from '@shared/types'
defineProps<{ item: ListItem }>()
</script>
