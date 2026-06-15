const importedImages = import.meta.glob('../assets/img/**/*.{png,jpg,jpeg,webp,svg,gif}', {
  eager: true,
  query: '?url',
  import: 'default',
})

const imageMap = Object.fromEntries(
  Object.entries(importedImages).map(([filePath, url]) => {
    const normalizedPath = filePath.replace('../assets/', '')
    return [normalizedPath, url]
  }),
)

function normalizePath(path) {
  return path.replace(/^\/+/, '')
}

export function getImageUrl(path) {
  if (!path) return ''

  if (/^(https?:|data:|blob:)/i.test(path)) {
    return path
  }

  const normalizedPath = normalizePath(path)

  if (imageMap[normalizedPath]) {
    return imageMap[normalizedPath]
  }

  const baseUrl = import.meta.env.BASE_URL || '/'
  return `${baseUrl}${normalizedPath}`
}
