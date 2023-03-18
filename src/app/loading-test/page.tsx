import { fetchTest } from "@/services";

export default async function LoadingTest() {
  const data = await fetchTest(5000, "tela com loading em server side");

  return (
    <main>
      <h1>{data}</h1>
    </main>
  );
}
