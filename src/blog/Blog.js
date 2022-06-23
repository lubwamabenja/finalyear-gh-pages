import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./Header";
import MainFeaturedPost from "./MainFeaturedPost";
import FeaturedPost from "./FeaturedPost";
import tech from "../tech.jpeg";
import isaac from "../isaac.png";
import kintu from "../kintu.webp";
import mahad from "../mahad.webp";
import japha from "../japha.webp";

// import Main from "./Main";
// import Sidebar from "./Sidebar";
// import Footer from "./Footer";
// import post1 from "./blog-post.1.md";
// import post2 from "./blog-post.2.md";
// import post3 from "./blog-post.3.md";

const sections = [{ title: "Home", url: "#" }];

const mainFeaturedPost = {
  title: "Government Fund Allocation & Tracking System over Blockchain",
  description:
    "State Governments need to cater to a huge number of responsibilities of a state. The\
    working of state governments involves a huge number of transactions ...",
  image: tech,
  imageText: "main image description",
  linkText: "Continue reading…",
};

const featuredPosts = [
  {
    title: "Kaluuma Mahad",
    date: "17/u/4501/eve ",
    description: "mkaluuma93@gmail.com",
    image: mahad,
    imageLabel: "Image Text",
    link: "mahad",
  },
  {
    title: "Lubwama Isaac",
    date: "17/u/5739/ps ",
    description: "lubwama73@gmail.com",
    image: isaac,
    imageLabel: "Image Text",
    link: "isaac",
  },
  {
    title: "Kintu Arnold",
    date: "17/u/5188/eve",
    description: "Arnoldokintu23@gmail.com",
    image: kintu,
    imageLabel: "Image Text",
    link: "kintu",
  },
  {
    title: "Kasozi Jaffar",
    date: "17/u/4741/eve ",
    description: "kasozijaffar92@gmail.com",
    image: japha,
    imageLabel: "Image Text",
    link: "kasozi",
  },
];

// const posts = [post1, post2, post3];

const theme = createTheme();

export default function Blog() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header
          title="Government Fund Allocation &amp; Tracking System over Blockchain"
          sections={sections}
        />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />

          <h3 className="text-center mb-3"> TEAM AND THEIR CONTRIBUTIONS</h3>
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            {/* <Main title="From the firehose" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            /> */}
          </Grid>
        </main>
      </Container>
      {/* <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      /> */}
    </ThemeProvider>
  );
}
