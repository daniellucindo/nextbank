import Image from "next/image";
import Box from "@mui/material/Box";

export default function Hero() {
  return (
    <Box 
      sx={{ 
        width: "100%", 
        height: { xs: "80vh", md: "calc(100vh - 64px)" },
        position: "relative",
        overflow: "hidden"
      }}
    >
      <figure style={{ margin: 0, width: "100%", height: "100%" }}>
        <Image 
          src="/homem-com-laptop-no-escritorio.jpg"
          alt="Homem de negócios jovem com laptop no escritório"
          layout="fill"
          objectFit="cover"
          priority
        />
      </figure>
    </Box>
  );
}
