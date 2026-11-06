import { versions, latest } from './versions'

// Old links (e.g. /catalog/manage_room_types/) have no version folder. Send them to the latest
// version that has the page, so every URL published before versioning keeps working.
// ponytail: client-side only (GitHub Pages has no 301s); stub pages per old URL if SEO needs it.
export default ({ router, siteData }) => {
  const order = [latest, ...versions.map(v => v.label).filter(l => l !== latest)]
  router.beforeEach((to, from, next) => {
    const path = to.path.replace(/index\.html$/, '').replace(/\.html$/, '/')
    if (path === '/' || path === '/404.html' || versions.some(v => path.startsWith(v.path))) return next()
    for (const label of order) {
      const target = `/${label}${path}`
      if (siteData.pages.some(p => p.path === target)) return next({ path: target, query: to.query, hash: to.hash, replace: true })
    }
    next()
  })
}
