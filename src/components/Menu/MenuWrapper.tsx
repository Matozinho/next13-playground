"use client";
import { Stack } from "@/components";
import { ReactNode } from "react";

export const MenuWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      sx={({ breakpoints, palette }) => ({
        backgroundColor: palette.background.paper,
        mb: { xs: 16, sm: 0 },
        mt: { xs: 16, sm: 0 },

        [breakpoints.up("sm")]: {
          top: 0,
          width: 96,
          position: "fixed",
          height: "100vh",
          margin: 0,
          borderRight: `1px solid ${palette.divider}`,
        },

        [breakpoints.up("xl")]: {
          width: 440,
        }
      })}
    >
      <Stack
        sx={{
          gap: "16px",
          alignItems: "center",
        }}
      >
        {children}
      </Stack>
    </Stack>
  );
};
