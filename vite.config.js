import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { DEFAULT_SITE_URL, siteMeta } from './src/config/siteMeta.js'

function resolveSiteUrl(mode) {
  const fromEnv = process.env.VITE_SITE_URL?.trim().replace(/\/$/, '')
  if (fromEnv) return fromEnv
  if (mode === 'development') return 'http://localhost:5173'
  return DEFAULT_SITE_URL
}

function htmlMetaPlugin() {
  return {
    name: 'html-meta-inject',
    transformIndexHtml(html, ctx) {
      const siteUrl = resolveSiteUrl(ctx.server ? 'development' : 'production')
      const ogImage = `${siteUrl}${siteMeta.ogImagePath}`

      return html
        .replaceAll('%SITE_URL%', siteUrl)
        .replaceAll('%SITE_TITLE%', siteMeta.title)
        .replaceAll('%SITE_DESCRIPTION%', siteMeta.description)
        .replaceAll('%OG_IMAGE%', ogImage)
        .replaceAll('%OG_IMAGE_WIDTH%', String(siteMeta.ogImageWidth))
        .replaceAll('%OG_IMAGE_HEIGHT%', String(siteMeta.ogImageHeight))
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), htmlMetaPlugin()],
})
