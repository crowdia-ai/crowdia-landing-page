export async function register() {
  // Node.js 22+ exposes a global `localStorage` proxy whose methods
  // (getItem, setItem, etc.) are undefined unless --localstorage-file is set.
  // Libraries like @supabase/auth-js detect `typeof localStorage === 'object'`
  // and call getItem(), which throws.  Replace the broken proxy with a
  // Map-backed shim so SSR doesn't crash.
  if (
    typeof globalThis.localStorage === 'object' &&
    typeof globalThis.localStorage.getItem !== 'function'
  ) {
    const store = new Map<string, string>();
    const shim = {
      getItem: (key: string) => store.get(key) ?? null,
      setItem: (key: string, value: string) => { store.set(key, String(value)); },
      removeItem: (key: string) => { store.delete(key); },
      clear: () => { store.clear(); },
      key: (index: number) => [...store.keys()][index] ?? null,
      get length() { return store.size; },
    };
    Object.defineProperty(globalThis, 'localStorage', {
      value: shim,
      writable: true,
      configurable: true,
    });
  }
}
