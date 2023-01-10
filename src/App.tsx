import { hope, Box, Grid } from "@hope-ui/solid";
import { styled } from "solid-stitches";
export default function App () {
  const Button = styled("button", {
    backgroundColor: "gainsboro",
    borderRadius: "9999px",
    fontSize: "16px",
    border: "0",
    color: "red",
    margin: "1em",
  });

  return (
    <>
      <Button>Stitch</Button>
      <Box m="$2">Tomato</Box>
      <Grid gap={2} autoFlow="row dense">
        Grid
      </Grid>
      <hope.button
        mx="$3"
        my="$2"
        px="$3"
        py="$2"
        bg="$success7"
        rounded="$md"
        _hover={{ bg: "$success8" }}
      >
        Click me
      </hope.button>
    </>
  );
}
