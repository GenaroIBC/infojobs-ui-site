const ASIDE_LINKS = [
  {
    href: "#accordion",
    title: "Accordion"
  },
  {
    href: "#breadcrumb",
    title: "Breadcrumb"
  },
  {
    href: "#tooltip",
    title: "Tooltip"
  },
  {
    href: "#button",
    title: "Button"
  }
]

function App() {
  return (
    <>
      <section className="grid grid-cols-4 relative max-w-page-max-width mx-auto">
        <aside className="col-span-1 p-4 sticky h-screen top-0">
          <nav>
            <ul className="flex flex-col gap-2 mt-12">
              {ASIDE_LINKS.map(({ href, title }) => (
                <li key={href}>
                  <a href={href}>{title}</a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </section>
    </>
  )
}

export default App
