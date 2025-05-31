<template>
  <div class="border p-4 rounded shadow-sm bg-white space-y-1">
    <p class="text-lg font-semibold">{{ item.name }}</p>
    <component :is="Renderer" :item="item" />
  </div>
</template>

<script setup lang="ts">
import type { ListItem } from '@shared/types'
import { itemRenderers } from '../renderers/item-renderers'

const props = defineProps<{ item: ListItem }>()

const Renderer = itemRenderers[props.item.kind]
</script>
