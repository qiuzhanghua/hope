import { hope, Box, Grid } from "@hope-ui/solid";

export default function App () {
  return (
    <>
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
