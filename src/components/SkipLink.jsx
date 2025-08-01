const SkipLink = ({ href, children }) => {
  return (
    <a
      href={href}
      className="
        sr-only focus:not-sr-only 
        focus:absolute focus:top-4 focus:left-4 focus:z-50
        bg-blue-600 text-white px-4 py-2 rounded
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        transition-all duration-200
      "
      onClick={e => {
        e.preventDefault()
        const target = document.querySelector(href)
        if (target) {
          target.focus()
          target.scrollIntoView({ behavior: 'smooth' })
        }
      }}
    >
      {children}
    </a>
  )
}

export default SkipLink
