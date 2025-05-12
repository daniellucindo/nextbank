import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { formatSlug } from "../utils/formatSlug";

export default function NewsList({ posts = [] }) {
  return (
    <Box component="section" aria-labelledby="news-heading">
      <Container sx={{ py: 4 }}>
        <Typography variant="h4" id="news-heading" sx={{ fontWeight: "bold", mb: 3 }}>
          Últimas Notícias
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {posts.map((post) => (
            <Grid item xs={12} sm={6} md={4} key={post.id}>
              <Paper sx={{ padding: 2, bgcolor: "grey.100" }}>
                <Typography variant="h5">{post.title}</Typography>
                <Typography variant="body2">{post.body.substring(0, 100)}...</Typography>
                <Link 
                  href={`/post/${formatSlug(post.title)}`} 
                  sx={{ display: "block", color: "primary.main", fontWeight: "bold", mt: 2, textDecoration: "none" }}
                >
                  Leia mais →
                </Link>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
