import React from "react";
import {FaFacebook , FaInstagramSquare , FaTwitter , FaYoutube} from "react-icons/fa";



import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="/">Aim</FooterLink>
            <FooterLink href="/">Vision</FooterLink>
            <FooterLink href="/">Testimonials</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="/">Nutrition</FooterLink>
            <FooterLink href="/">Internships</FooterLink>
            <FooterLink href="/">Training</FooterLink>
            <FooterLink href="/">Curses</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="/">Stockholm</FooterLink>
            <FooterLink href="/">Helsinki</FooterLink>
            <FooterLink href="/">Berlin</FooterLink>
            <FooterLink href="/">Oslo</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="https://www.facebook.com/">
            <FaFacebook /> 
                <span style={{ marginLeft: "10px" }}>
                 Facebook
                </span>
             
            </FooterLink>
            <FooterLink href="/">
              <FaInstagramSquare/>
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              
            </FooterLink>
            <FooterLink href="/">
              <FaTwitter/>
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              
            </FooterLink>
            <FooterLink href="/">
              <FaYoutube/>
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;