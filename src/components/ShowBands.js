import {Card, Col, Row} from "react-bootstrap";
import {Link} from 'react-router-dom';

export default function ShowBands({data}) {

    return (
        <>
            <Row xs={1} md={2} lg={4} xl={5} className="g-4" aria-live="polite">
            {data && data.map(i => (
                <Col key={"bandCol-"+i.name}>
                    <Card>
                        <Card.Img variant="top" src={i.image}/>
                        <Card.Body>
                            <Card.Title>
                                {i.name}
                                <span className="view-count">
                                    {i.profile_views_count}
                                    <span className="oi" data-glyph="eye" title="eye" aria-hidden="true"/>
                                </span>
                            </Card.Title>

                            <Card.Text>{
                                i.biographies[0].description
                            }</Card.Text>

                            <Card.Link href={i.permalink} target="_blank">mx3</Card.Link>
                            <Card.Link>
                                <Link to={"/profile/"+i.name}>Profile</Link>
                            </Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
            </Row>
        </>
    )
}