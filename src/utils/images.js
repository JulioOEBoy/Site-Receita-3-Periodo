function normalizePath(path) {
  return path.replace(/^\/+/, '')
}

export function getImageUrl(path) {
  if (!path) return ''

  if (/^(https?:|data:|blob:)/i.test(path)) {
    return path
  }

  const normalizedPath = normalizePath(path)
  const baseUrl = import.meta.env.BASE_URL || '/'

  return `${baseUrl}${normalizedPath}`
}
