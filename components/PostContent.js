import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

export default function PostContent({ post }) {
  return (
    <Container 
      maxWidth="md" 
      sx={{ 
        minHeight: { xs: "calc(100vh - 40px)", md: "calc(100vh - 60px)" },
        mx: "auto",
        mt: 3,
        p: 3
      }}
      component="article" 
      aria-label="Conteúdo do Post"
    >
      <Box component="header" aria-label="Título do Post">
        <Box component="h1" sx={{ fontSize: "2rem", fontWeight: "bold", mb: 2 }}>
          {post.title}
        </Box>
      </Box>
      
      <Box component="section" aria-label="Texto do Post">
        <Box component="p" sx={{ fontSize: "1rem", lineHeight: 1.6 }}>
          {post.body}
        </Box>
      </Box>

      <Box component="nav" sx={{ mt: 4, display: "flex", justifyContent: "center" }} aria-label="Navegação do Post">
        <Link href="/" sx={{ color: "primary.main", fontWeight: "bold", textDecoration: "none" }} aria-label="Voltar para Home">
          Voltar para Home
        </Link>
      </Box>
    </Container>
  );
}
