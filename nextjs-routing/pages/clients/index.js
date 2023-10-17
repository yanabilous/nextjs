import {useRouter} from "next/router";
import Link from "next/link";


function ClientsPage() {
    const router = useRouter();
  console.log(router.pathname);
  console.log(router.query);
    const clients = [
    {id: "max", name: "Project 1"},
    {id: "min", name: "Project 2"}
  ];
  return (<div>
      <h1> Clients Page</h1>
      <ul>
        {clients.map((client) => (<li key={client.id}>
          <Link href={{
            pathname: '/clients/[id]',
            query: {id: client.id}
          }}>{client.name}</Link>
        </li>))}

      </ul>

    </div>
  );
}
export default ClientsPage;