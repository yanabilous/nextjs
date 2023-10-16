import {useRouter} from "next/router";

function ValueClientPage() {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);
  return (<div>
      <h1>ValueClientPage</h1>
    </div>
  );
}
export default ValueClientPage;