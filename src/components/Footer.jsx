import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding: 20px;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`
  flex: 1;
  font-size: 50px;
  letter-spacing: 3px;
`;

const Desc = styled.p`
  flex: 1;
  font-size: 24px;
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  background-color: #${(props) => props.color};
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  /* display: flex; */
  /* justify-content: center;
  align-items: center; */
  /* flex-direction: column; */
`;

const ContactItem = styled.p`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  /* justify-content: flex-start;  */
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>T-REX.</Logo>
        <Desc>
          There are many variations of passage of Lorem Epsum available, but the
          majority have suffered alteration in some form, by injected humour, or
          randomised words which don't look even slightly believable.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Women Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>WishList</ListItem>
          <ListItem>WishList</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          123 Dixie Harbor, South Dakota 12346
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          +1 234 56789
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />
          trex@clothing.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
