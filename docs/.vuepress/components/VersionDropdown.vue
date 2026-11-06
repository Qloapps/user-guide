<template>
  <div v-if="current" class="version-dropdown" :class="{ open }" @mouseleave="open = false">
    <button type="button" class="version-btn" aria-haspopup="listbox" :aria-expanded="open" @click="open = !open">
      <span>QloApps {{ current.label }}</span>
      <span class="arrow" :class="open ? 'up' : 'down'" />
    </button>
    <ul v-show="open" class="version-list" role="listbox">
      <li v-for="v in options" :key="v.label" :class="{ active: v.label === current.label }">
        <router-link :to="v.link" @click.native="open = false">{{ v.text }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { versions, latest } from '../versions'

export default {
  name: 'VersionDropdown',

  data () {
    return { open: false }
  },

  computed: {
    // Version of the page being viewed (null on the home page and 404).
    current () {
      return versions.find(v => this.$route.path.startsWith(v.path))
    },

    options () {
      const pages = this.$site.pages
      const rest = this.$route.path.slice(this.current.path.length)
      return versions.map(v => {
        const same = v.path + rest
        // Keep the reader on the same page when it exists in the other version.
        const link = pages.some(p => p.path === same) ? same : v.path + 'introduction/'
        const tag = v.label === latest ? ' (latest)' : v.upcoming ? ' (upcoming)' : ''
        return { label: v.label, link, text: 'QloApps ' + v.label + tag }
      })
    }
  },

  watch: {
    $route () { this.open = false }
  }
}
</script>

<style lang="stylus">
.version-dropdown
  position relative
  display inline-block
  vertical-align top
  margin-left 1rem
  line-height 2.2rem
  .version-btn
    display flex
    align-items center
    gap .6rem
    cursor pointer
    font-size .9rem
    color #2c3e50
    background #fff
    border 1px solid #dcdfe6
    border-radius 1rem
    padding 0 .9rem
    line-height 2rem
    &:hover
      border-color #3eaf7c
  .arrow
    display inline-block
    width 0
    height 0
    border-left 4px solid transparent
    border-right 4px solid transparent
    &.down
      border-top 5px solid #888
    &.up
      border-bottom 5px solid #888
  .version-list
    position absolute
    top 100%
    left 0
    min-width 100%
    white-space nowrap
    margin 0
    padding .3rem 0
    list-style none
    background #fff
    border 1px solid #dcdfe6
    border-radius 6px
    box-shadow 0 2px 8px rgba(0, 0, 0, .12)
    z-index 20
    li a
      display block
      padding 0 1rem
      line-height 2rem
      font-size .9rem
      color #2c3e50
      &:hover
        color #3eaf7c
    li.active a
      color #3eaf7c
      font-weight 600

@media (max-width: 719px)
  .version-dropdown
    margin-left .5rem
</style>
