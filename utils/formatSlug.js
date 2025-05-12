export const formatSlug = (title) =>
  encodeURIComponent(
    title.trim() 
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/gi, "") 
      .replace(/\s+/g, "-") 
      .replace(/-+/g, "-")
  );
