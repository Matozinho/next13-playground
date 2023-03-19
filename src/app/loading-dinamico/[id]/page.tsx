import { fetchTest } from "@/services";

export default async function DynamicLoading() {
  const data = await fetchTest(3000, "loading em rota dinâmica");

  return (
    <main>
      <h1>{data}</h1>
    </main>
  );
}
