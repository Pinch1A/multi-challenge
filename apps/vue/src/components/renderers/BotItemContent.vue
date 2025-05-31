<template>
  <div>
    <p>Tokens: {{ item.data.tokens }}</p>
    <p>Cost: {{ totalCost }}</p>
  </div>
</template>

<script setup lang="ts">
import type { BotListItem } from '@shared/types'
import { getBotTotalCost } from '@shared/utils/item-utils'

const props = defineProps<{ item: BotListItem }>()

const totalCost = getBotTotalCost(props.item)
</script>
