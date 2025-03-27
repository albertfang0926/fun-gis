interface I_ContextMenu<T> {
  name: string
  label: string
  callback: (e: T) => void
}

export { I_ContextMenu }
