import { useEffect } from 'react'

function setMeta(name, content, attr = 'name') {
  if (!content) return
  let el = document.head.querySelector(`meta[${attr}="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export default function SeoHead({ title, description, image }) {
  useEffect(() => {
    if (title) document.title = `${title} | Annai Packers & Movers`
    setMeta('description', description)
    setMeta('og:title', title, 'property')
    setMeta('og:description', description, 'property')
    if (image) setMeta('og:image', image, 'property')
  }, [title, description, image])

  return null
}
