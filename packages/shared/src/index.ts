// packages/shared/src/types.ts
export type User = {
  id: string
  name: string
}

// packages/shared/src/api.ts
export async function getUser(id: string): Promise<User> {
  return { id, name: "Test User" }
}
