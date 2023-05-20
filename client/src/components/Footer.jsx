import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@material-ui/icons"
import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
    display: flex;
    ${mobile({flexDirection: "column"})};
`
const Left = styled.div`
    flex: 1;
    dispaly: flex;
    flex-direction: column;
    padding: 20px;
`

const Logo = styled.h1``

const Desc = styled.p`
    margin: 20px 0px;
`

const SocialContainer = styled.div`
    display: flex;
`

const SocialIcon= styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=> props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

const Center = styled.div`
    flex: 1;
    paddding: 20px;
    ${mobile({display: "none"})};
`

const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0px;
    paddng: 0px;
    list-style: none;
    display: flex;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex: 1;
    paddding: 20px;
    ${mobile({backgroundColor: "#fff8f8"})};
    ${mobile({padding: "20px"})};
`

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  height: 50px;
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>E-Shop</Logo>
        <Desc>There are many variations of passages of E-Shop available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</Desc>
        <SocialContainer>

            <SocialIcon color="3B5999">
                <Facebook/>
            </SocialIcon>
            <SocialIcon color="E4405F">
                <Instagram/>
            </SocialIcon>
            <SocialIcon color="55ACEE">
                <Twitter/>
            </SocialIcon>
            <SocialIcon color="E60023">
                <Pinterest/>
            </SocialIcon>

        </SocialContainer>
      </Left>
      <Center>

        <Title>Useful Links</Title>
        <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
        </List>

      </Center>

      <Right>

        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight: "10px"}}/> Islamia Park Sliver Star Road, Street No. 9, Sialkot 
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight: "10px"}}/> +92 300 6232929 
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight: "10px"}}/> Contact@E-Shop.com 
        </ContactItem>

        <Payment src="https://help.zazzle.com/hc/article_attachments/360023193074/payment_Capture.JPG"/>

      </Right>
    </Container>
  )
}

export default Footer
