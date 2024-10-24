"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Navbar, Nav, Image, Col, Row, Button } from "react-bootstrap";
import { Instagram } from 'react-bootstrap-icons'; 
import './style.css';


export default function Home() {
    return (
        <main>
            <Container>
                <TopMenu/>
                <CenterImage/>
                <BottomFooter/>
            </Container>
        </main>
    );
}

const TopMenu = () => (
  <Navbar expand="lg" bg="light" className="fixed-top">
    <Container className="py-2">
    <Nav className="me-auto">
    <Nav.Link><Instagram/></Nav.Link>
      </Nav>
      <Nav className="mx-auto">
      <Image src="https://courses.ics.hawaii.edu/ics314f24/morea/ui-frameworks/wod-boardroom-logo.png" 
      alt ="Logo"
      className="logo"
      width="70px"
      />
      </Nav>
      <Nav className="ms-auto">
      <Nav.Link href="#">
            <Button variant="dark">Menu</Button>
          </Nav.Link>
        </Nav>
    </Container>
  </Navbar>
);

const CenterImage = () => (
<Row className ="body">
    <Col className="d-flex justify-content-center" >
    {/* <Image
    src ="https://courses.ics.hawaii.edu/ics314f24/morea/ui-frameworks/wod-boardroom-logo.png"
    alt = "Main Image"
    // width = { 5000 }
    height = "500px"
    /> */}
    <p>
      
      hello this is the websbsuetbgiua
      
    </p>
    </Col>
  </Row>
);

// const BottomFooter = () => (
// <footer>
//   <Container>
//     <Row className="mt-auto bg-light fixed-bottom  py-2 px-4">
//       <Col xs={3} >
//         <h5><strong>Hours</strong></h5>
//         <div>Wednesday - Thursday 5pm -10pm</div>
//         <div>Firday - Saturday 5pm - 11pm</div>
//         <div>Sunday Brunch10am - 2pm</div>
//       </Col>
//       <Col xs={3}>
//         <h5><strong>Stay Connected</strong></h5>
//         <div className = "underline">Instagram</div>
//         <div className = "underline">Contact</div>
//         <div className = "underline">Giftcards</div>
//         <div className = "underline">Reservations</div>
//       </Col>
//       <Col xs={3}>
//         <h5></h5>
//         <div></div>
//         <div></div>
//         <div></div>
//       </Col>
//       <Col xs={3}>
//         <h5><strong>THE BOARDROOM</strong></h5>
//         <div>44 Kainehe St</div>
//         <div>Kailua HI 96734</div>
//         <div style={{ height: '20px' }}></div> {/* Empty space */}
//         <div>(808)807-5640</div>
//         </Col>
//     </Row>
//   </Container>
// </footer>
// );

const BottomFooter = () => (
  <footer className="bg-light fixed-bottom"> {/* Footer background and position */}
    <Container>
      <Row className="mt-auto py-2 px-3"> {/* Margin top auto, padding y-2, and padding x-4 for equal left-right padding */}
        <Col xs={3}>
          <h5><strong>Hours</strong></h5>
          <div>Wednesday - Thursday 5pm -10pm</div>
          <div>Friday - Saturday 5pm - 11pm</div>
          <div>Sunday Brunch 10am - 2pm</div>
        </Col>
        <Col xs={3}>
          <h5><strong>Stay Connected</strong></h5>
          <div className="underline">Instagram</div>
          <div className="underline">Contact</div>
          <div className="underline">Giftcards</div>
          <div className="underline">Reservations</div>
        </Col>
        <Col xs={3}>
          <h5></h5>
          <div></div>
          <div></div>
          <div></div>
        </Col>
        <Col xs={3} className ="justify-content-end">
          <h5><strong>THE BOARDROOM</strong></h5>
          <div>44 Kainehe St</div>
          <div>Kailua HI 96734</div>
          <div style={{ height: '20px' }}></div> {/* Empty space */}
          <div>(808)807-5640</div>
        </Col>
      </Row>
    </Container>
  </footer>
);


