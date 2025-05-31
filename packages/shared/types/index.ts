export interface ApiError {
  error: string;
}

export interface LoginResponse {
  token: string;
}

export interface LoginBody {
  username: string;
  password: string;
}

export interface BaseListItem {
  id: number;
  name: string;
}

export interface ListItemKindMap {
  user: {
    birth: string;
    email: string;
  };
  bot: {
    tokens: number;
    pricePerToken: number;
    currency: string;
  };
  // Add more kinds here in the future...
}

export type TypedListItem<K extends keyof ListItemKindMap> = BaseListItem & {
  kind: K
  data: ListItemKindMap[K]
}

export type ListItem = {
  [K in keyof ListItemKindMap]: TypedListItem<K>
}[keyof ListItemKindMap]

export type UserListItem = TypedListItem<'user'>
export type BotListItem = TypedListItem<'bot'>
