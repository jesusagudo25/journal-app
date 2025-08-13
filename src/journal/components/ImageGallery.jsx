import { ImageList, ImageListItem } from "@mui/material";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";

export const ImageGallery = ({ images }) => {
  if (!images || images.length === 0) {
    return <Typography>No images available</Typography>;
  }
  /* const { active } = useSelector(
    (state) => state.journal
  );
    const imageUrls = active?.imageUrls || [];
    if (imageUrls.length === 0) {
        return <Typography>No images available</Typography>;
    }
    // Map the image URLs to the format required by ImageList
    const itemData = imageUrls.map((url) => ({
        img: url,
        title: 'Image',
    }));
   */

  return (
    <ImageList
      sx={{
        width: "100%",
        height: 500,
      }}
      cols={4}
      rowHeight={200}
    >
      {images.map((image) => (
        <ImageListItem key={image}>
          <img
            srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${image}?w=164&h=164&fit=crop&auto=format`}
            alt={image}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};
