import type { Component } from 'vue'
import type { ListItem } from '@shared/types'
import UserItemContent from '../components/renderers/UserItemContent.vue'
import BotItemContent from '../components/renderers/BotItemContent.vue'
import UnknownItemContent from '../components/renderers/UnknownItemContent.vue'

export const itemRenderers: Record<ListItem['kind'], Component> = {
  user: UserItemContent,
  bot: BotItemContent
}

export const getItemRenderer = (kind: ListItem['kind']) => {
  return itemRenderers[kind] ?? UnknownItemContent
}
