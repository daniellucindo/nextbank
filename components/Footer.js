import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <footer>
      <Box
        sx={{
          bgcolor: "primary.main",
          color: "white",
          textAlign: "center",
          width: "100%",
          padding: { xs: 1, md: 3 },
          minHeight: { xs: 40, md: 60 },
        }}
      >
        <Typography>&copy; 2025 NextBank. Todos os direitos reservados.</Typography>
      </Box>
    </footer>
  );
}
