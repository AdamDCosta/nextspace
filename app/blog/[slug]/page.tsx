export const revalidate = 420;

interface Post {
  title: string;
  content: string;
  slug: string;
}

interface Props {
  params: { slug: string }
}

async function getStaticParams() {
  const posts: Post[] = await fetch("http://localhost:3000/api/content", { cache: 'default'}).then((resp) => resp.json());

  return posts.map((p) => ({
    slug: p.slug,
  }))
}


export default async function BlogPostPage({params}: Props) {
  
  const posts: Post[] = await fetch("http://localhost:3000/api/content", { cache: 'default'}).then((resp) => resp.json());

  const post = posts.find((post) => post.slug === params.slug)!;

  return (
    <div>
      <h1>{ post.title }</h1>
      <p>{ post.content }</p>
    </div>
  )
}