import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Clock from "./Clock.jsx";
import "./WorldClock.css";

function WorldClock({clockData})
{
    return (
        <Container>
          {clockData.map((timeZone, index) => {
            // Format city name by replacing underscores with spaces
            const Zone = timeZone.replace("_", " ");
            
            // Render each time zone in a row with city name and clock
            return (
              <Row key={index} className="mb-3 inline-text">
                <Col><p>{Zone}</p></Col>
                <Col><Clock timeZone={timeZone} /></Col>
              </Row>
            );
          })}
        </Container>
    );
}

export default WorldClock;