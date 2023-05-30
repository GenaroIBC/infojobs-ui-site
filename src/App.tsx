import {
  Accordion,
  Breadcrumb,
  Button,
  TabGroup,
  Toggle,
  Tooltip,
  Modal
} from "infojobs-ui"

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
    href: "#tab-group",
    title: "Tab Group"
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

function App() {
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-4 relative max-w-page-max-width mx-auto">
        <aside className="md:col-span-1 p-4 md:sticky md:h-screen top-0">
          <nav>
            <ul className="flex flex-col mt-12">
              {ASIDE_LINKS.map(({ href, title }) => (
                <li key={href}>
                  <a
                    className="block hover:bg-white text-gray-700 hover:text-black  px-4 py-2 bg-white/60"
                    href={href}
                  >
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <main className="p-4 md:col-span-3">
          <h1 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-fuchsia-600">
            Infojobs UI
          </h1>

          <h5 id="accordion">Accordion</h5>
          <Accordion
            items={[
              { element: <span>hello</span>, label: "1" },
              { element: <span>hello</span>, label: "2" },
              { element: <span>hello</span>, label: "3" },
              { element: <span>hello</span>, label: "4" },
              { element: <span>hello</span>, label: "5" }
            ]}
          />

          <h5 id="breadcrumb">Breadcrumb</h5>
          <Breadcrumb items={["Home", "Dashboard", "Settings", "API Usage"]} />

          <h5 id="button">Button</h5>
          <h6>Primary</h6>
          <nav className="flex flex-wrap gap-2 items-center">
            <Button color="blue" variant="primary">
              primary
            </Button>
            <Button color="gray" variant="primary">
              primary
            </Button>
            <Button color="green" variant="primary">
              primary
            </Button>
            <Button color="orange" variant="primary">
              primary
            </Button>
            <Button color="red" variant="primary">
              primary
            </Button>
            <Button color="yellow" variant="primary">
              primary
            </Button>
          </nav>

          <h6>Secondary</h6>
          <nav className="flex flex-wrap gap-2 items-center">
            <Button color="blue" variant="secondary">
              secondary
            </Button>
            <Button color="gray" variant="secondary">
              secondary
            </Button>
            <Button color="green" variant="secondary">
              secondary
            </Button>
            <Button color="orange" variant="secondary">
              secondary
            </Button>
            <Button color="red" variant="secondary">
              secondary
            </Button>
            <Button color="yellow" variant="secondary">
              secondary
            </Button>
          </nav>

          <h5 id="modal">Modal</h5>
          <h6>Modal with title</h6>
          <Modal openModalButtonText={"With title"} title={"I am a title"}>
            <ModalExampleContent />
          </Modal>

          <h6>Close on backdrop click</h6>
          <Modal
            openModalButtonText={"Close on backdrop click"}
            closeOnBackdropClick
          >
            <ModalExampleContent />
          </Modal>

          <h6>Close on ESC click</h6>
          <Modal openModalButtonText={"Close on ESC click"} closeOnEscClick>
            <ModalExampleContent />
          </Modal>

          <h6>Confirm and cancel buttons</h6>
          <Modal
            openModalButtonText={"Confirm modal"}
            onCancel={() => {
              console.log("user canceled")
            }}
            onConfirm={() => {
              console.log("user confirmed")
            }}
          >
            <ModalExampleContent />
          </Modal>

          <h5 id="tooltip">Tooltip</h5>

          <h6>In an inline element</h6>
          <div className="flex gap-4">
            <Tooltip direction="top" label="Mark as favorite">
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22.4758 11.1904C23.0492 10.7214 23.2768 9.94897 23.0492 9.24399C22.8215 8.53902 22.1852 8.0455 21.4458 8.00041L16.6358 7.59041C16.5257 7.58104 16.4296 7.51188 16.3858 7.41041L14.5058 3.00041C14.2225 2.3379 13.5713 1.9082 12.8508 1.9082C12.1303 1.9082 11.4791 2.3379 11.1958 3.00041L9.3058 7.45041C9.26199 7.55188 9.16593 7.62104 9.0558 7.63041L4.2458 8.00041C3.5312 8.07233 2.92774 8.56217 2.71043 9.24672C2.49311 9.93126 2.70353 10.6795 3.2458 11.1504L6.8458 14.3604C6.92977 14.4314 6.96815 14.5427 6.9458 14.6504L5.8458 19.3004C5.67218 20.0174 5.946 20.7685 6.54032 21.2055C7.13463 21.6425 7.93322 21.6799 8.5658 21.3004L12.6458 18.8404C12.7411 18.7829 12.8605 18.7829 12.9558 18.8404L17.0958 21.3404C17.3763 21.5102 17.6979 21.6001 18.0258 21.6004C18.5923 21.6198 19.1352 21.3728 19.4926 20.9328C19.8501 20.4929 19.9808 19.9109 19.8458 19.3604L18.7458 14.6504C18.7235 14.5427 18.7618 14.4314 18.8458 14.3604L22.4758 11.1904Z"
                  fill="currentColor"
                />
              </svg>
            </Tooltip>
            <Tooltip direction="left" label="Save to bookmarks">
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.2426 15.5971C11.7405 14.3132 13.9509 14.3132 15.4489 15.5971L17.3505 17.2271C17.5451 17.3939 17.8457 17.2556 17.8457 16.9993V6.25C17.8457 5.69772 17.398 5.25 16.8457 5.25H8.8457C8.29342 5.25 7.8457 5.69772 7.8457 6.25V16.9993C7.8457 17.2556 8.14634 17.3939 8.34094 17.2271L10.2426 15.5971ZM7.8457 3.25H17.8457C18.9503 3.25 19.8457 4.14543 19.8457 5.25V19.8258C19.8457 20.3781 19.398 20.8258 18.8457 20.8258C18.607 20.8258 18.3762 20.7404 18.1949 20.585L14.1473 17.1156C13.3983 16.4737 12.2931 16.4737 11.5441 17.1156L7.49649 20.585C7.07717 20.9445 6.44587 20.8959 6.08645 20.4766C5.9311 20.2953 5.8457 20.0645 5.8457 19.8258V5.25C5.8457 4.14543 6.74113 3.25 7.8457 3.25Z"
                  fill="currentColor"
                />
              </svg>
            </Tooltip>
            <Tooltip direction="bottom" label="Change settings">
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M21.7459 13.9998L20.0659 12.6898C20.1128 12.2511 20.1128 11.8086 20.0659 11.3698L21.7459 9.99981C22.0963 9.69573 22.1915 9.19059 21.9759 8.77981L20.1859 5.67981C19.9409 5.28497 19.4562 5.11095 19.0159 5.25981L17.0159 6.05981C16.6465 5.81375 16.2547 5.60282 15.8459 5.42981L15.5459 3.32981C15.4852 2.858 15.0816 2.50592 14.6059 2.50981H11.0459C10.5736 2.50527 10.1712 2.85198 10.1059 3.31981L9.84594 5.42981C9.44695 5.61525 9.06542 5.83613 8.70594 6.08981L6.70594 5.28981C6.27111 5.11931 5.77705 5.29394 5.54594 5.69981L3.72594 8.81981C3.53122 9.22047 3.625 9.70161 3.95594 9.99981L5.63594 11.3098C5.63594 11.5298 5.63594 11.7498 5.63594 11.9698C5.63594 12.1898 5.63594 12.4098 5.63594 12.6298L3.95594 13.9998C3.60555 14.3039 3.51032 14.809 3.72594 15.2198L5.51594 18.3198C5.76098 18.7147 6.24572 18.8887 6.68594 18.7398L8.68594 17.9398C9.05108 18.1956 9.43946 18.4166 9.84594 18.5998L10.1459 20.6998C10.2066 21.1716 10.6103 21.5237 11.0859 21.5198H14.6859C15.1583 21.5243 15.5606 21.1776 15.6259 20.7098L15.8459 18.5998C16.245 18.4146 16.6266 18.1937 16.9859 17.9398L18.9859 18.7398C19.4208 18.9103 19.9148 18.7357 20.1459 18.3298L21.9559 15.2098C22.171 14.8059 22.0845 14.3076 21.7459 13.9998ZM12.8459 15.2698C11.0536 15.2698 9.59966 13.8187 9.596 12.0264C9.59235 10.2341 11.0404 8.77718 12.8327 8.76984C14.625 8.7625 16.0849 10.2075 16.0959 11.9998C16.1013 12.8652 15.7612 13.697 15.1511 14.3108C14.5411 14.9247 13.7114 15.2698 12.8459 15.2698Z"
                  fill="currentColor"
                />
              </svg>
            </Tooltip>
            <Tooltip direction="right" label="I am a tooltip :)">
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.8457 1.75C7.18478 1.75 2.5957 6.33908 2.5957 12C2.5957 17.6609 7.18478 22.25 12.8457 22.25C18.5066 22.25 23.0957 17.6609 23.0957 12C23.0902 6.34137 18.5043 1.75551 12.8457 1.75ZM12.8457 10.75C12.4315 10.75 12.0957 11.0858 12.0957 11.5V16.5C12.0957 16.9142 12.4315 17.25 12.8457 17.25C13.2599 17.25 13.5957 16.9142 13.5957 16.5V11.5C13.5957 11.0858 13.2599 10.75 12.8457 10.75ZM12.8457 9.25C13.398 9.25 13.8457 8.80228 13.8457 8.25C13.8457 7.69772 13.398 7.25 12.8457 7.25C12.2934 7.25 11.8457 7.69772 11.8457 8.25C11.8457 8.80228 12.2934 9.25 12.8457 9.25Z"
                  fill="currentColor"
                />
              </svg>
            </Tooltip>
          </div>

          <h6>In a block element</h6>
          <Tooltip label="Tooltip in a long paragraph">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime,
            laboriosam. Ipsam consequatur quae dolore sunt quaerat eos
            repudiandae at. Illo ullam iste ipsa excepturi a corrupti, voluptate
            non nesciunt dolorem!
          </Tooltip>

          <h6>Toggle</h6>

          <Toggle
            onToggle={() => {
              void 0
            }}
          />

          <h6>Tabs</h6>
          <p className="mb-4">You can use any component as tab content</p>

          <TabGroup
            tabs={[
              {
                element: (
                  <div className="flex gap-2">
                    <img
                      src="http://placekitten.com/200/200"
                      alt="Random cat"
                      width="200"
                      height="200"
                      className="rounded-md aspect-square"
                    />
                    <img
                      src="http://placekitten.com/200/300"
                      alt="Random cat"
                      width="200"
                      height="200"
                      className="rounded-md aspect-square"
                    />
                    <img
                      src="http://placekitten.com/300/200"
                      alt="Random cat"
                      width="200"
                      height="200"
                      className="rounded-md aspect-square"
                    />
                    <img
                      src="http://placekitten.com/200/400"
                      alt="Random cat"
                      width="200"
                      height="200"
                      className="rounded-md aspect-square"
                    />
                    <img
                      src="http://placekitten.com/400/200"
                      alt="Random cat"
                      width="200"
                      height="200"
                      className="rounded-md aspect-square"
                    />
                    <img
                      src="http://placekitten.com/500/200"
                      alt="Random cat"
                      width="200"
                      height="200"
                      className="rounded-md aspect-square"
                    />
                  </div>
                ),
                title: "Image gallery",
                id: 0
              },
              {
                element: (
                  <div className="flex gap-4">
                    <img
                      src="https://picsum.photos/200"
                      alt="Random example image"
                      width="200"
                      height="200"
                      className="rounded-md aspect-square"
                    />
                    <div className="flex flex-col gap-2">
                      <span className="font-semibold text-2xl mb-4">
                        Lorem ipsum
                      </span>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Expedita ad, quod eaque qui vel quae iure maiores
                        accusantium alias pariatur!
                      </p>
                      <p>Lorem ipsum dolor sit amet.</p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Sunt, sit.
                      </p>
                    </div>
                  </div>
                ),
                title: "Image and text",
                id: 1
              },
              {
                element: (
                  <div className="flex flex-col gap-2">
                    <span className="font-semibold text-2xl mb-2">
                      Lorem ipsum dolor
                    </span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Porro sit soluta eligendi, officiis non voluptatum
                      perferendis explicabo obcaecati ullam.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Praesentium maiores fugiat deleniti aut? Quisquam, sed.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Optio aperiam a molestiae consequuntur cupiditate debitis
                      doloribus iure tenetur inventore maxime! Beatae deleniti
                      enim et nemo quae odio adipisci dicta inventore! Lorem
                      ipsum dolor sit, amet consectetur adipisicing elit.
                      Sapiente!
                    </p>
                  </div>
                ),
                title: "Text only",
                id: 2
              }
            ]}
          />
        </main>
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

const ModalExampleContent = () => (
  <div className="flex gap-4">
    <img
      className="rounded-md"
      src="https://picsum.photos/300"
      alt="Random example image"
    />

    <div className="flex flex-col gap-4">
      <span className="font-medium text-lg">Lorem Ipsum Dolor</span>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus iusto
        soluta maxime quae excepturi eum debitis aperiam perferendis nemo! Amet
        atque dignissimos quasi reiciendis aspernatur quis rem ullam libero
        animi.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus iusto
        soluta maxime quae excepturi eum debitis aperiam perferendis nemo! Amet
        atque dignissimos quasi reiciendis aspernatur quis rem ullam libero
        animi.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus iusto
        soluta maxime quae excepturi eum debitis aperiam perferendis nemo! Amet
        atque dignissimos quasi reiciendis aspernatur quis rem ullam libero
        animi.
      </p>
    </div>
  </div>
)
