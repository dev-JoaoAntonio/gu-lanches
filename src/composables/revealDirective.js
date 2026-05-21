/**
 * v-reveal directive — adds is-visible to elements once they enter the viewport.
 * Pair with [data-reveal="<direction>"] CSS for blur + multi-axis fade.
 *
 * Usage:
 *   <div v-reveal="'up'" :data-reveal-delay="200">…</div>
 *   <div v-reveal.once="'tilt-l'">…</div>
 */

const directions = [
  'up', 'down', 'left', 'right',
  'up-left', 'up-right', 'down-left', 'down-right',
  'zoom', 'zoom-out', 'tilt-l', 'tilt-r', 'soft'
]

let observer = null
const items = new WeakMap()

function ensureObserver() {
  if (observer) return observer
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const meta = items.get(entry.target)
      if (!meta) return
      if (entry.isIntersecting) {
        const delay = Number(entry.target.dataset.revealDelay || 0)
        if (delay > 0) {
          setTimeout(() => entry.target.classList.add('is-visible'), delay)
        } else {
          entry.target.classList.add('is-visible')
        }
        if (meta.once !== false) observer.unobserve(entry.target)
      } else if (meta.once === false) {
        entry.target.classList.remove('is-visible')
      }
    })
  }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' })
  return observer
}

export default {
  mounted(el, binding) {
    const dir = (binding.value && directions.includes(binding.value)) ? binding.value : 'up'
    el.setAttribute('data-reveal', dir)
    items.set(el, { once: binding.modifiers.repeat ? false : true })
    ensureObserver().observe(el)
  },
  unmounted(el) {
    if (observer) observer.unobserve(el)
    items.delete(el)
  }
}
