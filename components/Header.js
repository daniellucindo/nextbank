import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import { menuLinks } from "../utils/menuLinks";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const isPostPage = router.pathname.startsWith("/post");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
      <AppBar 
        position="fixed" 
        sx={{ 
          top: 0, 
          left: 0, 
          width: "100%", 
          bgcolor: isPostPage || scrolled ? "#007bff" : "transparent",
          transition: "0.3s ease-in-out", 
          boxShadow: "none", 
          zIndex: 1000 
        }}
      >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", px: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton 
            sx={{ display: { xs: "flex", md: "none" }, color: "#fff" }} 
            onClick={() => setOpen(true)}
            aria-label="Abrir menu de navegação"
          >
            <MenuIcon />
          </IconButton>
          <Link href="/" passHref>
            <Image 
              src="/logo-next-bank.png" 
              alt="Logo do Next Bank"
              width={100} 
              height={50} 
              priority 
              style={{ cursor: "pointer" }}
            />
          </Link>
        </Box>
        <Navbar />
      </Toolbar>

      <Drawer 
        anchor="left" 
        open={open} 
        onClose={() => setOpen(false)}
        disableScrollLock
        sx={{ "& .MuiPaper-root": { height: "100vh", overflow: "hidden" } }}
        aria-label="Menu de navegação móvel"
      >
        <Box sx={{ width: 250, padding: 2, display: "flex", flexDirection: "column", height: "100vh" }}>
          <List sx={{ flexGrow: 1, overflowY: "auto" }}>
            {menuLinks.map((item, index) => (
              <ListItem button key={index} onClick={() => setOpen(false)}>
                <Link href={item.href}>
                  <ListItemText primary={item.label} aria-label={`Ir para ${item.label}`} />
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}
