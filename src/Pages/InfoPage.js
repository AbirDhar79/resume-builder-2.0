

import { Stack, Typography, Box } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import { GitHub } from "@mui/icons-material";
import Instagram from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
import { Navbar } from "."; // Fixed path to use Pages/index.js
import overviewImg from "../Utils/Images/aboutCV.jpg";

const SocialLinks = ({ children }) => {
  return <div className="social-container">{children}</div>;
};

const InfoPage = () => {
  return (
    <>
      <Navbar />
      <Stack p={{ xs: "15px", sm: "25px", md: "40px", lg: "60px" }}>
        <h2 className="template-header-title">Resume Creator</h2>
        <Stack
          className="info-mid-section"
          direction={{
            xs: "column-reverse",
            sm: "column-reverse",
            md: "column-reverse",
            lg: "row",
          }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          mt="20px"
        >
          <Typography
            sx={{
              fontSize: {
                xs: "13px",
                sm: "15px",
                md: "17px",
                lg: "19px",
              },
              paddingRight: {
                xs: "15px",
                sm: "18px",
                lg: "25px",
              },
              textAlign: "justify",
            }}
          >
            Resume Creator is a free online tool designed to help you build your resume effortlessly. With a variety of options available, you can craft a professional resume in no time. You can upload additional profile pictures to enhance your resumes. Once the fields are filled, you can preview and save your resume. Click download to store it locally on your drive. You can also revisit, update, or delete your previously created resumes.
          </Typography>
          <Stack
            sx={{
              width: "30%",
              placeSelf: "center",
            }}
          >
            <img src={overviewImg} alt="overview" />
          </Stack>
        </Stack>
        <Box mt="25px">
          <Typography
            sx={{
              fontSize: {
                xs: "22px",
                sm: "25px",
                md: "27px",
                lg: "30px",
              },
              fontWeight: "400",
              color: "dark",
            }}
          >
            Share with your network
          </Typography>
          <SocialLinks>
            <Box className="icons">
              <Link to="https://www.instagram.com/dhar.abir/">
                <Instagram
                  sx={{ fontSize: "40px", paddingLeft: "15px" }}
                  color="error"
                />
              </Link>
              <Link to="https://www.facebook.com/abir.dhar.549/">
                <FacebookOutlinedIcon
                  sx={{ fontSize: "40px", paddingLeft: "15px" }}
                  color="primary"
                />
              </Link>
              <Link to="https://www.linkedin.com/in/abir-dhar-8b6747209/">
                <LinkedInIcon
                  sx={{ fontSize: "40px", paddingLeft: "15px" }}
                  color="primary"
                />
              </Link>
              <Link to="https://web.whatsapp.com">
                <WhatsAppIcon
                  sx={{ fontSize: "40px", paddingLeft: "15px" }}
                  color="success"
                />
              </Link>
              <Link to="https://x.com/abirdhar79">
                <TwitterIcon
                  sx={{ fontSize: "40px", paddingLeft: "15px" }}
                  color="info"
                />
              </Link>
              <Link to="https://github.com/AbirDhar79">
                <GitHub
                  sx={{ fontSize: "40px", paddingLeft: "15px", color: "black" }}
                />
              </Link>
            </Box>
          </SocialLinks>
        </Box>
        
      </Stack>
    </>
  );
};

export default InfoPage;
