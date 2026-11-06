/**
 * Single source of truth for documentation versions.
 *
 * To add a new version (e.g. 1.9.0):
 *   1. cp -r docs/<latest> docs/1.9.0
 *   2. cp docs/.vuepress/sidebars/<latest>.js docs/.vuepress/sidebars/1.9.0.js
 *   3. add { label: '1.9.0', path: '/1.9.0/' } at the top of `versions` below
 *   4. set `latest` to '1.9.0' when it is released
 */
const versions = [
  { label: '1.8.0', path: '/1.8.0/'}, // remove `upcoming` and set `latest` on release
  { label: '1.7.0', path: '/1.7.0/' },
]

// Version that unprefixed URLs (old links such as /catalog/manage_room_types/) redirect to.
const latest = '1.8.0'

// Prefix every sidebar path with the version folder (group `path` and child paths).
function prefix(items, base) {
  return items.map(item => {
    if (Array.isArray(item)) return [base + item[0], ...item.slice(1)]
    if (typeof item === 'string') return base + item
    return {
      ...item,
      path: item.path && base + item.path.replace(/^\//, ''),
      children: item.children && prefix(item.children, base),
    }
  })
}

// ponytail: sidebar files are plain per-version arrays; per-version differences are edited there.
function buildSidebars() {
  const sidebars = {}
  versions.forEach(v => {
    sidebars[v.path] = prefix(require(`./sidebars/${v.label}.js`), v.path)
  })
  return sidebars
}

module.exports = { versions, latest, buildSidebars }
