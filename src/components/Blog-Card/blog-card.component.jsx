import { Fade } from "react-awesome-reveal";
import "./blog-card.styles.css";
import LaunchIcon from "@mui/icons-material/Launch";
import { Box, Link } from "@mui/material";

const BlogCard = ({ blog, tagType }) => {
  const { image, tag, title, content, userImage, userName, date, link } = blog;
  return (
    <div className="blog-card">
      <div className="blog-card-header">
        <img src={image} alt={title} />
      </div>
      <div className="blog-card-body">
        <span className={`tag tag-${tagType}`}>{tag}</span>
        <h4>{title}</h4>
        <p>{content}</p>
        <div className="user">
          <img src={userImage} alt={userName} />
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-evenly"}
          >
            <div className="user-info">
              <h5>{userName}</h5>
              <small>{date}</small>
            </div>
            <Link href={link} target="_blank">
              <LaunchIcon
                style={{
                  fontSize: "30px",
                }}
              />
            </Link>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
