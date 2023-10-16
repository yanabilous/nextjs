import {useRouter} from "next/router";

function SelectedProjectClientPage() {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);
  return (<div>
      <h1>Selected client</h1>
    </div>
  );
}
export default SelectedProjectClientPage;