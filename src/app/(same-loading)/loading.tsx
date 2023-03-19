"use client";

import { CircularProgress, Stack } from "@mui/material";

export default function Loading() {
  return (
    <Stack
      sx={{
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Loading para todas as rotas internas</h1>
      <CircularProgress />
    </Stack>
  );
}
