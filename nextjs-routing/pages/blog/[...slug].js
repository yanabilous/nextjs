import {useRouter} from "next/router";

function BlogPostPage() {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);
  return (<div>
      <h1>BlogPostPage</h1>
    </div>
  );
}
export default BlogPostPage;