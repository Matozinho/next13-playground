"use client";

import { List, ListItem } from "@mui/material";
import Link from "next/link";

export const MenuLinks = ({ id }: { id: string }) => {
  return (
    <List>
      <Link href={`clinica/${id}/avaliacoes`}>
        <ListItem>Avaliações</ListItem>
      </Link>
      <Link href={`clinica/${id}/sobre`}>
        <ListItem>Sobre</ListItem>
      </Link>
      <Link href={`clinica/${id}/servicos`}>
        <ListItem>Serviços</ListItem>
      </Link>
    </List>
  );
};
