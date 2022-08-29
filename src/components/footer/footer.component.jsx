import { ReactComponent as InstagramSvg } from "../../assets/instagram.svg";
import { ReactComponent as TwitterSvg } from "../../assets/twitter.svg";
import { ReactComponent as FacebookSvg } from "../../assets/facebook.svg";

import {
  Box,
  CapitalizeLink,
  CopyrightBox,
  FooterContainer,
  SosmedBox,
  UppercaseLink,
} from "./footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <Box>
        <UppercaseLink>Gift Cards</UppercaseLink>
        <UppercaseLink>Promotions</UppercaseLink>
        <UppercaseLink>Find a Store</UppercaseLink>
        <UppercaseLink>Sign Up For Email</UppercaseLink>
        <UppercaseLink>Become a member</UppercaseLink>
        <UppercaseLink>Breactjs Journal</UppercaseLink>
        <UppercaseLink>Send Us Feedback</UppercaseLink>
      </Box>
      <Box>
        <UppercaseLink>Get Help</UppercaseLink>
        <CapitalizeLink>Order Status</CapitalizeLink>
        <CapitalizeLink>Shipping and Delivery</CapitalizeLink>
        <CapitalizeLink>Returns</CapitalizeLink>
        <CapitalizeLink>Payment Options</CapitalizeLink>
        <CapitalizeLink>Gift Card Balance</CapitalizeLink>
        <CapitalizeLink>Contact Us</CapitalizeLink>
      </Box>
      <Box>
        <UppercaseLink>About Breactjs</UppercaseLink>
        <CapitalizeLink>News</CapitalizeLink>
        <CapitalizeLink>Careers</CapitalizeLink>
        <CapitalizeLink>Investors</CapitalizeLink>
        <CapitalizeLink>Purpose</CapitalizeLink>
        <CapitalizeLink>Sustainability</CapitalizeLink>
      </Box>
      <SosmedBox>
        <InstagramSvg fill="#ccc" height={35} width={35} />
        <TwitterSvg fill="#ccc" height={35} width={35} />
        <FacebookSvg fill="#ccc" height={35} width={35} />
      </SosmedBox>
      <CopyrightBox>
        <CapitalizeLink href="#">
          © 2022 BreactJS SimpleStore. All Rights Reserved
        </CapitalizeLink>
      </CopyrightBox>
    </FooterContainer>
  );
};

export default Footer;
