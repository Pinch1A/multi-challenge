import type { BotListItem } from '../types'

export const getBotTotalCost = (item: BotListItem) =>
  `${item.data.tokens * item.data.pricePerToken} ${item.data.currency}`
