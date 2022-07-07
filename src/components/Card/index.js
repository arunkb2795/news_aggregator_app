import * as React from "react";
import { Typography, Stack, Paper, Box } from "@mui/material";
import UserAvatar from "../UserAvatar";
import moment from "moment";
import { styled } from "@mui/system";

export const Container = styled(Paper)(({ theme }) => ({
  width: "100%",
  [theme.breakpoints.down("md")]: {
    flexWrap: "wrap",
  },
  padding: 0,
}));

export const CardTitle = styled(Typography)(({ theme }) => ({
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
}));

/**
 * NewsCard: card for display the news related data
 * states
 * @params {imageURL} image URL of the news,
 * @params {author} author name of the news,
 * @params {title} news title,
 * @params {title} published date of the news,
 */

export default function NewsCard(props) {
  const { imageURL, author, title, publishedAt } = props;

  return (
    <Box>
      <Container sx={{ height: "100%", minHeight: "500px" }} elevation={1}>
        <Box sx={{ px: "1.5rem", py: "1rem" }}>
          <CardTitle variant="h4">{title}</CardTitle>
        </Box>
        <Stack spacing={0}>
          <Box>
            <img
              src={imageURL}
              alt={`${publishedAt}-media`}
              width="100%"
              height="250px"
              style={{ maxWidth: "100%", height: "auto", maxHeight: "250px" }}
            />
          </Box>
          <Box sx={{ px: "1.5rem", py: "1rem" }}>
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              justifyContent="space-between"
            >
              <Box>
                <Stack direction="row" spacing={1} alignItems="center">
                  <UserAvatar name={author ?? "Anonymous"} />
                  <Typography
                    variant="subTitle"
                    sx={{ wordBreak: " break-all" }}
                  >
                    {author ?? "Anonymous"}
                  </Typography>
                </Stack>
              </Box>
              <Box>
                <Typography variant="subTitle">
                  {moment(publishedAt).format("DD MMMM YYYY hh:mm A")}
                </Typography>
              </Box>
            </Stack>
            <Box sx={{ py: "1rem" }}>
              <Typography variant="subTitle" sx={{ wordBreak: " break-all" }}>
                {title}
              </Typography>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
