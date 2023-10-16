import {useRouter} from "next/router";

function ValueIndexPage() {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);
  return (<div>
      <h1>ValueIndexPage</h1>
    </div>
  );
}
export default ValueIndexPage;