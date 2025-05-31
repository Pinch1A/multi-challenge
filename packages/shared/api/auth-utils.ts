export function getTokenFromStorage(appId: 'react' | 'vue'): string | null {
  const key = appId === 'react' ? 'react_token' : 'vue_token'
  return localStorage.getItem(key)
}
