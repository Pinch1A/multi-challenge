import type { LoginBody, LoginResponse, ListItem, ApiError } from '../types';
import { getTokenFromStorage } from './auth-utils';

const BASE_URL = 'https://smart-fe.netlify.app/.netlify/functions';

type AppId = 'react' | 'vue'
export async function login(data: LoginBody): Promise<LoginResponse | ApiError> {
  const res = await fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function fetchList(appId: AppId): Promise<ListItem[] | ApiError> {
  const token = getTokenFromStorage(appId)
  const res = await fetch(`${BASE_URL}/list`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
}
