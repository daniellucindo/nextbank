import Box from "@mui/material/Box";
import ListItemText from '@mui/material/ListItemText';
import Link from "next/link";
import { menuLinks } from "../utils/menuLinks";

export default function Navbar() {
  return (
    <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3, justifyContent: "flex-end" }}>
      {menuLinks.map((item, index) => (
        <Link key={index} href={item.href} aria-label={`Ir para ${item.label}`}>
          <ListItemText primary={item.label} sx={{ cursor: "pointer", color: "#fff" }} />
        </Link>
      ))}
    </Box>
  );
}
