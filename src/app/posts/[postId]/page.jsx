

export async function generateMetadata({params, searchParams}, parent) {
  const { rows: posts } = 
    await sql`SELECT * FROM posts WHERE posts.Id = ${params.id}`;
  const post = posts[0];

  return {
    title: post.title,
  };
}