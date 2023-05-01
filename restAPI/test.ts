import axios from "axios"

interface Post {
  userId: number
  id: number
  title: string
  body: string
}

async function getPosts(): Promise<Post[]> {
  const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
  return response.data
}

function createTable(posts: Post[]): string {
  let html = '<table border="1">'
  html +=
    "<thead><tr><th>User ID</th><th>ID</th><th>Title</th><th>Body</th></tr></thead>"
  html += "<tbody>"
  for (const post of posts) {
    html += `<tr><td>${post.userId}</td><td>${post.id}</td><td>${post.title}</td><td>${post.body}</td></tr>`
  }
  html += "</tbody></table>"
  return html
}

async function main() {
  const posts = await getPosts()
  const table = createTable(posts)
  console.log(table)
}

main()
