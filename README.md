# Multi Challenge

This monorepo contains a technical exercise implemented with both **React** and **Vue** applications, sharing common logic, types, and configurations through a set of local packages.

## 🧩 Structure

```
apps/
  react/       → React application (Vite + TS + Tailwind)
  vue/         → Vue 3 application (Vite + Pinia + TS + Tailwind)

packages/
  shared/      → Shared types and API clients
  tailwind-config/ → Shared Tailwind + PostCSS config
```

## 🚀 Features

- 🛂 Login flow (with validation, redirect, error handling)
- 🔐 Token persisted per-app in `localStorage`
- 🔁 Protected routes with redirect if not authenticated
- 📦 Shared types and API logic via local workspace package
- 📱 Fully responsive layout
- 💡 Skeleton loading while fetching

## 📦 Install & Dev

```bash
pnpm install
pnpm dev         # launches both apps concurrently
```

## 🧠 Accessing the Apps

### React app

```bash
pnpm --filter react dev
```

Accessible at: [http://localhost:5173](http://localhost:5173)

### Vue app

```bash
pnpm --filter vue dev
```

Accessible at: [http://localhost:5174](http://localhost:5174)

## 🧠 Scalabilità e Architettura

Questo progetto è stato pensato con particolare attenzione alla **scalabilità futura** sia in termini di struttura dati che di interazioni con nuove API. Di seguito i principi adottati:

### 📦 Gestione modulare dei tipi (`@shared/types`)

- I tipi degli oggetti (`ListItem`) sono definiti in modo discriminato tramite la proprietà `kind`.
  Questo pattern (`Discriminated Union`) permette di **estendere facilmente** il modello con nuovi tipi:

  ```ts
  interface AnimalListItem extends BaseListItem {
    kind: 'animal';
    data: { species: string; age: number };
  }

  type ListItem = UserListItem | BotListItem | AnimalListItem;
  ```

- La struttura è centralizzata in `@shared/types` così da poter essere riutilizzata da entrambe le app (React e Vue) senza duplicazione.

### 🔄 API Client condiviso (`@shared/api`)

- Le chiamate API sono isolate in un client modulare che astraggono la logica di `fetch`, gestione token e risposta.
- I client accettano un parametro `appName` (`'vue'` o `'react'`) per supportare storage indipendenti e validi localmente.
- Questo approccio consente l’aggiunta di **nuovi endpoint** mantenendo un’interfaccia coerente:

  ```ts
  export async function fetchStats(app: string): Promise<StatsResponse | ApiError> {
    const token = getTokenFromStorage(app);
    return await apiGet<StatsResponse>('/stats', token);
  }
  ```

### 🧩 Componenti Smart

- Componenti come `ItemCard` usano una **mappa di renderer** per delegare il rendering per tipo:

  ```ts
  const renderers = {
    user: (item) => (...),
    bot: (item) => (...),
  }
  ```

  Basta aggiungere una nuova chiave e un renderer per supportare nuovi tipi, **senza usare `if` o `switch`**.

### 🧱 Design system e configurazioni condivise

- Tailwind CSS configurato centralmente via `@myorg/tailwind-config`, così da poter scalare UI e stili tra le app mantenendo coerenza.
- PostCSS e Vite sono configurati per supportare monorepo e percorsi alias.

---

> Per domande o contributi: `Pinch1A`
