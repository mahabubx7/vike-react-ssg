import { Link } from "../../renderer/Link"

export { Page }

function Page() {
  return (
    <>
      <h1>Blog page.</h1>
      <p>List of blogs</p>
      <ul>
        <li><Link href="/blog/hello-world">Hello-world post.</Link></li>
      </ul>
    </>
  )
}
