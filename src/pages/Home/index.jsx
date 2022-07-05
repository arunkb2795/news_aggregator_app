import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostDetails } from "../../redux/postDetailsSlice";
import { Layout } from "../../components";
import { Typography, Box, Grid } from "@mui/material";

export default function Home() {
  const dispatch = useDispatch();
  const { isLoading, postData } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPostDetails());
  }, [dispatch]);

  if (isLoading) {
    return (
      <>
        <Layout>
          <Box>Loading...</Box>
        </Layout>
      </>
    );
  }

  return (
    <>
      <Layout>
        <Box>
          <Grid
            container
            spacing={3}
            columns={{ xs: 4, sm: 8, md: 12 }}
            rowSpacing={4}
            sx={{ mt: 3 }}
          >
            {postData.map((item) => (
              <Typography key={item.id}>{item.title}</Typography>
            ))}
          </Grid>
        </Box>
      </Layout>
    </>
  );
}
