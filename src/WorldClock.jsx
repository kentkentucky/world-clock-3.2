import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Clock from "./Clock.jsx";
import "./WorldClock.css";

function WorldClock({clockData})
{
    const dataRow = clockData.map((timeZone, index) => {
        const Zone = timeZone.replace("_", " ");
        return (
            <Row key={index} className="mb-3 inline-text">
                <Col className='city'><p>{Zone}</p></Col>
                <Col className='clock'><Clock timeZone={timeZone}/></Col>
            </Row>
        );
    });

    return (
        <Container>
            <Row className="mb-3 inline-text">
                <Col className='city'>City</Col>
                <Col className='clock'>Clock</Col>
            </Row>
            {dataRow}
        </Container>
    );
}

export default WorldClock;