"use client";
import {
  Avatar,
  Divider,
  Drawer,
  MenuLinks,
  Stack,
  Theme,
  useMediaQuery,
} from "@/components";

const MenuDrawer = ({ children }: { children: React.ReactNode }) => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: { xs: "60px", md: "300px", lg: "450px" },
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: { xs: "60px", md: "300px", lg: "450px" },
          boxSizing: "border-box",
        },
      }}
    >
      {children}
    </Drawer>
  );
};

export const MenuWrapper = ({ id }: { id: string }) => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const Wrapper = isMobile ? Stack : MenuDrawer;

  return (
    <Wrapper>
      <Stack
        sx={{
          gap: "16px",
          alignItems: "center",
          width: { xs: "60px", md: "300px", lg: "450px" },
        }}
      >
        <Avatar />

        <Divider sx={{ width: "100%" }} />

        <MenuLinks id={id} />
      </Stack>
    </Wrapper>
  );
};
