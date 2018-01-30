module.exports = function() {
  // don't add any listener if there isn't at least 1 non-english section
  if (document.querySelectorAll('.docs div.sub-section:not([data-lang="en-US"])').length > 0) {
    const toggles = Array.from(document.querySelectorAll('.docs .en-toggle'))
    toggles.forEach(toggle => {
      toggle.onclick = (e) => {
        const selector = 'div.sub-section'
        let el = e.target
        while (el) {
          if (el.matches(selector)) break
          el = el.parentElement;
        }
        const otherEl = document.querySelector(`[data-name=${el.dataset.name}].hidden`)
        if (otherEl) {
          otherEl.classList.remove("hidden")
          el.classList.add('hidden')
        }
      }
    })
  }
}