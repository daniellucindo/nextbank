import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';

export default function AboutUs() {
  return (
      <Box sx={{ padding: { xs: 2, sm: 4 }, textAlign: "center", margin: "auto" }}>
        <Typography
          variant="h4"
          id="about-us-heading"
          sx={{
            fontWeight: "bold",
            fontSize: "2.5rem", // Destaque no título
            textTransform: "uppercase",
            color: "#222",
            marginBottom: 2,
          }}
        >
          About Us
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "1.125rem",
            color: "#444",
            lineHeight: "1.6",
            textAlign: "justify",
            maxWidth: "700px",
            margin: "auto",
          }}
        >
          We are an international private company found and led by the team of investors, managers, and entrepreneurs. We have over 15 departments located all over the world. England, Germany, New Zealand, Poland, China, Australia, and India are on the list of the recently opened new departments. We form global partnerships with the purpose of connecting different nations, thus creating a cross-border business model.
        </Typography>
      </Box>
  );
}
