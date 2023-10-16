import {useRouter} from "next/router";

function ValuePage() {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);
  return (<div>
      <h1>ValuePage</h1>
    </div>
  );
}
export default ValuePage;