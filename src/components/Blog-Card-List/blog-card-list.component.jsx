import { useState, useEffect } from "react";
import { Box } from "@mui/system";
import { Pagination } from "@mui/material";
import BlogCard from "../Blog-Card/blog-card.component";
import "./blog-card-list.styles.css";
import { BLOG_DATA, TEAL_DATA } from "../../data/blog-data";
import { Fade } from "react-awesome-reveal";

let pageLimit;
if (window.innerWidth < 1024) {
  pageLimit = 2;
} else {
  pageLimit = 6;
}

const BlogCardList = () => {
  const [pagination, setPagination] = useState({
    count: 0,
    from: 0,
    to: pageLimit,
  });
  useEffect(() => {
    {
      //   PaginationData = BLOG_DATA.slice(pagination.from, pagination.to);
      setPagination({
        ...pagination,
        count: BLOG_DATA.length,
      });
    }
  }, [pagination.from, pagination.to]);

  const handlePageChange = (event, page) => {
    const from = (page - 1) * pageLimit;
    const to = page * pageLimit;
    setPagination({ ...pagination, from, to });
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="blog-container">
        <div className="blog-cards-container">
          {BLOG_DATA.slice(pagination.from, pagination.to).map((blog) => (
            <Fade key={blog.id} direction="left">
              <BlogCard
                key={blog.id}
                blog={blog}
                tagType={TEAL_DATA[blog.tag]}
              />
            </Fade>
          ))}
        </div>
      </div>
      <Box
        sx={{ margin: "20px 0px" }}
        justifyContent={"center"}
        alignItems={"center"}
        display={"flex"}
      >
        <Pagination
          sx={{ margin: "0px 20px 20px 0px" }}
          defaultPage={1}
          siblingCount={0}
          boundaryCount={1}
          count={Math.ceil(pagination.count / pageLimit)}
          onChange={handlePageChange}
          color="primary"
        />
      </Box>
    </>
  );
};

export default BlogCardList;
