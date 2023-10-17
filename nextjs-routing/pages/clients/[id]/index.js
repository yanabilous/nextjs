import {useRouter} from "next/router";

// import Link from "next/link";

function ProjectClientPage() {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);

  return (<div>
      <h1> Project give client</h1>

    </div>
  );
}

export default ProjectClientPage;