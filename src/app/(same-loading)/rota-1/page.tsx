import { fetchTest } from "@/services";
import { Button } from "@/components";
import Link from "next/link";

export default async function Route1() {
  const data = await fetchTest(3000, ", confia na rota 1");

  return (
    <main>
      <h1>{'rota 1 com fetch' + data}</h1>
      
      <Link href="/rota-2">
        <Button variant="outlined">
          rota 2
        </Button>
      </Link>
    </main>
  );
}
