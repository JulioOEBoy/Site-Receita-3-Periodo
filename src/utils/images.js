export function getImageUrl(path) {
  if (!path) return ''

  if (path.startsWith('http')) {
    return path
  }

  return `${import.meta.env.BASE_URL}${path}`
}
