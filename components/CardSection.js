import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import Link from "next/link";
import Box from "@mui/material/Box";
import InfoIcon from '@mui/icons-material/Info';


const cardItems = [
  { icon: <InfoIcon fontSize="large" />, title: "About Us", description: "A wide range of industry areas", link: "#" },
  { icon: <InfoIcon fontSize="large" />, title: "Our Awards", description: "Our awards help us build national reputation", link: "#" },
  { icon: <InfoIcon fontSize="large" />, title: "Business Succession", description: "Supporting business owners", link: "#" },
  { icon: <InfoIcon fontSize="large" />, title: "24/7 Online support", description: "Always ready to help you", link: "#" },
];

export default function CardSection() {
  return (
    <Grid container spacing={0} justifyContent="space-between" alignItems="stretch" sx={{ width: "100vw", margin: 0, display: "flex" }}>
      {cardItems.map((item, index) => (
        <Grid item xs={12} sm={6} md={3} key={index} sx={{ p: 0, display: "flex" }}>
          <Box
            sx={{
              width: "100%",
              bgcolor: "background.paper",
              color: "text.primary",
              p: 2,
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              height: "100%",
              transition: ".3s all ease",
              "&:hover": {
                bgcolor: "primary.main",
                color: "#fff",
                "& h5, & p, & a": { color: "#fff" }, // Garante que todos os textos fiquem brancos no hover
              },
              borderRight: { xs: "none", sm: index !== cardItems.length - 1 ? "1px solid #ccc" : "none" },
              borderBottom: { xs: "1px solid #ccc", sm: "1px solid #ccc", md: "none" },
            }}
          >
            <Box sx={{ mb: 1 }}>{item.icon}</Box>
            <Typography variant="h5" role="heading" aria-level="3">{item.title}</Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>{item.description}</Typography>
            <Link key={index} href={item.link} variant="body2" sx={{ cursor: "pointer", color: "primary.main", fontWeight: "bold", textDecoration: "none" }}>
              Learn More →
            </Link>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
