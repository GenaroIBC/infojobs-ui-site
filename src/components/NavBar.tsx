import { useEffect, useState } from "react"

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
    href: "#button",
    title: "Button"
  },
  {
    href: "#modal",
    title: "Modal"
  },
  {
    href: "#tabs",
    title: "Tabs"
  },
  {
    href: "#toggle",
    title: "Toggle"
  },
  {
    href: "#tooltip",
    title: "Tooltip"
  }
]

export function NavBar() {
  const [currentSection, setCurrentSection] = useState(ASIDE_LINKS[0].href)

  useEffect(() => {
    const $sections = document.querySelectorAll("h5+section")
    const intersectionObserver = new IntersectionObserver(
      entries => {
        const firstIntersectingEntry = [...entries].find(
          entry => entry.isIntersecting
        )

        if (!firstIntersectingEntry) return

        setCurrentSection(
          firstIntersectingEntry.target.previousElementSibling?.id ?? ""
        )
      },
      {
        threshold: 1.0
      }
    )

    $sections.forEach($sect => intersectionObserver.observe($sect))

    return () => intersectionObserver.disconnect()
  }, [])

  return (
    <nav>
      <ul className="flex flex-col">
        {ASIDE_LINKS.map(({ href, title }) => (
          <li key={href}>
            <a
              className={`${
                href.slice(1) === currentSection ? "bg-black/40" : ""
              } block hover:bg-black/40 text-gray-100 hover:text-white hover:no-underline px-4 py-2`}
              href={href}
            >
              {title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
