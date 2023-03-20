"use client";

import { InfoOutlined, StarBorder, WorkOutline } from "@mui/icons-material";
import {
  Button,
  CircularProgress,
  List,
  ListItem,
  Theme,
  useMediaQuery,
} from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";

export const MenuLinks = ({ id }: { id: string }) => {
  const [useIconsDefined, setUseIconsDefined] = useState<boolean>(false);
  const useIcons = useMediaQuery(({ breakpoints }: Theme) =>
    breakpoints.down("xl")
  );

  useEffect(() => {
    setUseIconsDefined(true);
  }, [useIcons]);

  return (
    <List
      sx={{
        padding: 0,
        display: "flex",
        gap: 8,
        flexWrap: "wrap",
        alignItems: "center",
        flexDirection: { xs: "row", sm: "column" },
      }}
    >
      {!useIconsDefined ? (
        <CircularProgress size={36} />
      ) : (
        <>
          <Link href={`clinica/${id}/servicos`}>
            <ListItem sx={{ padding: 0 }}>
              <Button variant="outlined">
                {useIcons ? <WorkOutline /> : "Serviços"}
              </Button>
            </ListItem>
          </Link>
          <Link href={`clinica/${id}/avaliacoes`}>
            <ListItem sx={{ padding: 0 }}>
              <Button variant="outlined">
                {useIcons ? <StarBorder /> : "Avaliações"}
              </Button>
            </ListItem>
          </Link>
          <Link href={`clinica/${id}/sobre`}>
            <ListItem sx={{ padding: 0 }}>
              <Button variant="outlined">
                {useIcons ? <InfoOutlined /> : "Sobre"}
              </Button>
            </ListItem>
          </Link>
        </>
      )}
    </List>
  );
};
