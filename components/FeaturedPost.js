import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "next/link";
import { formatSlug } from "../utils/formatSlug"; // Importando função para formatar slugs

export default function FeaturedPost({ post }) {
  return (
    <Box component="section" aria-labelledby="featured-post-title">
      <Paper
        sx={{
          padding: 3,
          bgcolor: "grey.100",
          cursor: "pointer",
          transition: "0.3s",
          "&:hover": { bgcolor: "grey.200" },
        }}
      >
        <Typography variant="h5" id="featured-post-title" sx={{ fontWeight: "bold", mb: 1 }}>
          {post.title}
        </Typography>
        <Typography variant="body2">{post.body.substring(0, 100)}...</Typography>

        {/* Link correto para direcionar para a página do post */}
        <Link href={`/post/${formatSlug(post.title)}`} passHref>
          <a style={{ color: "#1976d2", fontWeight: "bold", textDecoration: "none", marginTop: "8px" }}>
            Leia mais →
          </a>
        </Link>
      </Paper>
    </Box>
  );
}
