import { Button, Stack } from "@/components";
import Link from "next/link";

export default function Home() {
  return (
    <Stack component="main">
      <Stack direction="row" gap={8}>
        <Link href="/loading-test">
          <Button variant="outlined">Loading</Button>
        </Link>

        <Link href="/loading-dinamico/33">
          <Button variant="outlined">Loading dinâmico</Button>
        </Link>

        <Link href="/rota-1">
          <Button variant="outlined">rota 1</Button>
        </Link>
      </Stack>

      <h1>Landing Page</h1>
    </Stack>
  );
}
