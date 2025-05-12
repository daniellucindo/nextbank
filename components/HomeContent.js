import Container from "@mui/material/Container";
import NewsList from "./NewsList";

export default function HomeContent({ posts = [] }) {
  return (
    <Container maxWidth="lg">
      <NewsList posts={posts} />
    </Container>
  );
}
