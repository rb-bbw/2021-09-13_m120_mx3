import {Card, Col, Row} from "react-bootstrap";
import SearchBands from "./SearchBands";
import {useEffect} from "react";

export default function ShowBands({query}) {

    const [data, error, isLoading, triggerSearch] = SearchBands(query);

    useEffect(
        () => query && triggerSearch(), // only trigger when query is given
        [query]
    );

    return (
        <>
            <Row xs={1} md={2} lg={4} xl={5} className="g-4" aria-live="polite">
                {data && data.map(i => (
                    <Col key={"bandCol-"+i.name}>
                        <Card>
                            <Card.Img variant="top" src={i.image} alt={i.name + " band image"}/>
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
                                <Card.Link href={"/profile/" + i.name}>Profile</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    )
}