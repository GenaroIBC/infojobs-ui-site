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

      <div className="bg-slate-950">
        <footer className="max-w-page-max-width mx-auto text-gray-50 flex flex-col gap-4 w-full mt-12 py-12 px-4">
          <p className="text-center">
            Developed with ❤️ by <a href="https://gena.dev">Genaro Bonavita</a>{" "}
            in 2023
          </p>
          <p className="text-center">
            <a href="https://github.com/genaroibc/infojobs-ui">
              Visit InfoJobs UI on GitHub
            </a>
          </p>
        </footer>
      </div>
    </>
  )
}

export default App
