"use client";

import { Button, Stack, Typography } from "@mui/material";
import Link from "next/link";

export const Header = () => {
  return (
    <Stack
      sx={{
        height: "56px",
        borderBottom: `1px solid`,
        borderColor: "grey.50",
        justifyContent: "space-between",
        paddingX: "24px",
        alignItems: "center",
        flexDirection: "row",
        marginLeft: { xs: 0, sm: "96px", xl: "440px" },
      }}
      component="header"
    >
      <Typography>Header</Typography>

      <Stack direction="row" sx={{ gap: "8px" }}>
        <Link href="/">
          <Button variant="outlined">Home</Button>
        </Link>

        <Link href="/clinica/1/sobre">
          <Button variant="outlined">Sobre</Button>
        </Link>
      </Stack>
    </Stack>
  );
};
