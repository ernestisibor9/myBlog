import React, { useState } from "react";
import Layout from "./Layout";

import {
  Card,
  CardActions,
  CardHeader,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Avatar,
  Box,
  Tooltip,
  Modal,
  TextField,
  Button,
} from "@mui/material";

import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

function News() {
  const newsObj = useSelector((store) => store);
  console.log(newsObj.news);
  const [open, setOpen] = useState(false);

  const [title, setTitle] = useState("");
  const [imageURL, setimageURL] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();

  const handleOpen = () => {
    setOpen(false);
  };

  let showDate = new Date();
  console.log(showDate);
  return (
    <Layout>
      <Card sx={{ padding: 3, margin: { xs: 3, md: 5 } }}>
        {newsObj.news.map((item, index) => {
          const updatePost = (item) => {
            // e.preventDefault()
            let news = {
              title: title,
              photo: imageURL,
              content: content,
            };
            dispatch({
              type: "EDIT_NEWS",
              payload: { oldnews: item, newnews: news },
            });
            toast.success("Post successfully updated");
          };
          return (
            <>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    R
                  </Avatar>
                }
                action={
                  <Box>
                    <IconButton aria-label="settings">
                      <MoreVertIcon sx={{ margin: "0 5px" }} />
                    </IconButton>
                    <Tooltip title="Edit Post" onClick={() => setOpen(true)}>
                      <IconButton aria-label="settings">
                        <EditIcon sx={{ margin: "0 5px", color: "#0288d1" }} />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete Post">
                      <IconButton aria-label="settings">
                        <DeleteIcon
                          sx={{ margin: "0 5px", color: "#c62828" }}
                        />
                      </IconButton>
                    </Tooltip>
                  </Box>
                }
                title={item.title}
                subheader={showDate.toUTCString()}
              />
              <CardMedia
                component="img"
                height="194"
                image={item.photo}
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {item.content}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </CardActions>

              <Modal open={open} onClose={handleOpen}>
                <Box className="box-mod">
                  <form>
                    <Typography
                      variant="h5"
                      sx={{ paddingTop: 2, textAlign: "center" }}
                    >
                      Edit Post
                    </Typography>
                    <div className="text-field">
                      <TextField
                        id="outlined-basic"
                        fullWidth
                        label="Title"
                        variant="outlined"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </div>
                    <div className="text-field">
                      <TextField
                        id="outlined-basic"
                        fullWidth
                        label="Content"
                        variant="outlined"
                        multiline
                        maxRows={4}
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                      />
                    </div>
                    <div className="text-field">
                      <TextField
                        id="outlined-basic"
                        fullWidth
                        label="Img URL"
                        variant="outlined"
                        value={imageURL}
                        onChange={(e) => setimageURL(e.target.value)}
                      />
                    </div>
                    <div className="text-field">
                      <Button
                        type="submit"
                        onClick={() => updatePost(item)}
                        fullWidth
                        variant="contained"
                        endIcon={<EditIcon />}
                      >
                        Edit
                      </Button>
                    </div>
                  </form>
                </Box>
              </Modal>
            </>
          );
        })}
      </Card>
    </Layout>
  );
}

export default News;
