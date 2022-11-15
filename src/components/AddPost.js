import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import {
  Tooltip,
  Fab,
  Modal,
  Box,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import PostAddIcon from "@mui/icons-material/PostAdd";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

function AddPost() {

  const[title, setTitle] = useState('')
  const[imageURL, setimageURL] = useState('')
  const[content, setContent] = useState('')

  const dispatch = useDispatch()

  const [open, setOpen] = useState(false);
  
  const handleSubmit=(e)=>{
    e.preventDefault()

    let news = {
      title: title,
      photo: imageURL,
      content: content
    }
    dispatch({type: "ADD_NEWS", payload: news})
    toast.success("Post successful")
    // window.location.reload(false)
  }
  const handleOpen = () => {
    setOpen(false);
  };


  return (
    <>
      <Tooltip title="Add Post" onClick={() => setOpen(true)}>
        <Fab color="primary" sx={{ position: "fixed", bottom: 10, right: 10 }}>
          <AddIcon />
        </Fab>
      </Tooltip>

      <Modal open={open} onClose={handleOpen}>
        <Box className="box-mod">
          <form onSubmit={handleSubmit}>
            <Typography
              variant="h5"
              sx={{ paddingTop: 2, textAlign: "center" }}
            >
              Add Post
            </Typography>
            <div className="text-field">
              <TextField
                id="outlined-basic"
                fullWidth
                label="Title"
                variant="outlined"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
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
                onChange={(e)=>setContent(e.target.value)}
              />
            </div>
            <div className="text-field">
              <TextField
                id="outlined-basic"
                fullWidth
                label="Img URL"
                variant="outlined"
                value={imageURL}
                onChange={(e)=>setimageURL(e.target.value)}
              />
            </div>
            <div className="text-field">
              <Button type="submit" fullWidth variant="contained" endIcon={<PostAddIcon />}>
                Add
              </Button>
            </div>
          </form>
        </Box>
      </Modal>
    </>
  );
}

export default AddPost;
