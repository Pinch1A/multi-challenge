import type { ListItem, TypedListItem, ListItemKindMap } from '@shared/types'
import { getBotTotalCost } from '@shared/utils/item-utils'

interface Props {
  item: ListItem
}

type Renderer<K extends keyof ListItemKindMap> = (
  item: TypedListItem<K>
) => React.ReactNode

const renderers: {
  [K in keyof ListItemKindMap]: Renderer<K>
} = {
  user: (item) => (
    <>
      <p>Email: {item.data.email}</p>
      <p>Birth: {item.data.birth}</p>
    </>
  ),
  bot: (item) => (
    <>
      <p>Tokens: {item.data.tokens}</p>
      <p>Cost: {getBotTotalCost(item)}</p>
    </>
  ),

  // Future kinds here...
}

const UnknownRenderer = () => (
  <p className="text-gray-500 italic">Unknown item type</p>
)

export default function ItemCard({ item }: Props) {
  const render = renderers[item.kind as keyof ListItemKindMap] ?? UnknownRenderer

  return (
    <div className="border p-4 rounded shadow-sm bg-white space-y-1">
      <p className="text-lg font-semibold">{item.name}</p>
      {render(item as any)}
    </div>
  )
}
