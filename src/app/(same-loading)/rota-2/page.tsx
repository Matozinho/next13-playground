import { fetchTest } from "@/services";
import { Button } from "@/components";
import Link from "next/link";

export default async function Route2() {
  const data = await fetchTest(3000, ", confia");

  return (
    <main>
      <h1>{'rota 2 com fetch' + data}</h1>
      
      <Link href="/rota-3">
        <Button variant="outlined">
          rota 3
        </Button>
      </Link>
    </main>
  );
}
