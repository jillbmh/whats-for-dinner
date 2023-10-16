import React from 'react'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
export default function HomePage() {
  return (
    <main>
      <img className='heroimage' 
        src="https://res.cloudinary.com/dam1q6nnp/image/upload/v1697291094/whats-for-dinner/n7hqet4gbq1anugiehtc.jpg" alt="hero image" />
      <Container> 
        <Row>
          <Col className="homepagehero" md="6">
            <h1>What&apos;s for Dinner?</h1>
            <h4>Support people to build their meals</h4>
            <ul>
              <li>Designed specifically for social care</li>
              <li>Easy to use</li>
              <li>Save your meals for a later</li>
              <li>Visualise your plate</li>
            </ul>
            <p>Supporting people with a Learning Disability to be involved in meal planning.</p>

          </Col>

          <Col md="6">
            <img className="heroimage" src="https://res.cloudinary.com/dam1q6nnp/image/upload/v1697439750/WhatsApp_Image_2023-10-14_at_16.37.08_1_fzttpl.jpg" alt="food" />
          </Col>

        </Row>

        <Row className="homepagehero">
          <Col md="12" className="hero-background" >
            <h2>Sign up for free today!</h2>
            <Link to="/account/register" className="button-pink">Sign Up</Link>


          </Col>

        </Row>

      </Container>
    
    </main>
  )
}
