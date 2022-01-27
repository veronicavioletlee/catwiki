import Button from'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useParams} from 'react-router-dom';
import './CatDetails.css';

const DetailText = ({ title, content }) => {
    return (
        <div className="breed-detail">
            <span className="DetailTitle">{title}: </span>{content}
        </div>
    )
}

const DetailRating = ({ title, value }) => {

    return (
        <div className="breed-detail">
            <Row>
                <Col xs lg='3'>
                    <span className="DetailTitle">{title}: </span>
                </Col>
                <Col>
                    {
                        {
                            0: <>
                                <Button variant="custom" style={{background: 'lightgray'}} disabled/>
                                <Button variant="custom" style={{background: 'lightgray'}} disabled/>
                                <Button variant="custom" style={{background: 'lightgray'}} disabled/>
                                <Button variant="custom" style={{background: 'lightgray'}} disabled/>
                                <Button variant="custom" style={{background: 'lightgray'}} disabled/>
                            </>,
                            1: <>
                                <Button variant="custom" disabled/>
                                <Button variant="custom" style={{background: 'lightgray'}} disabled/>
                                <Button variant="custom" style={{background: 'lightgray'}} disabled/>
                                <Button variant="custom" style={{background: 'lightgray'}} disabled/>
                                <Button variant="custom" style={{background: 'lightgray'}} disabled/>
                            </>,
                            2: <>
                                <Button variant="custom" disabled/>
                                <Button variant="custom" disabled/>
                                <Button variant="custom" style={{background: 'lightgray'}} disabled/>
                                <Button variant="custom" style={{background: 'lightgray'}} disabled/>
                                <Button variant="custom" style={{background: 'lightgray'}} disabled/>
                            </>,
                            3: <>
                                <Button variant="custom" disabled/>
                                <Button variant="custom" disabled/>
                                <Button variant="custom" disabled/>
                                <Button variant="custom" style={{background: 'lightgray'}} disabled/>
                                <Button variant="custom" style={{background: 'lightgray'}} disabled/>
                            </>,
                            4: <>
                                <Button variant="custom" disabled/>
                                <Button variant="custom" disabled/>
                                <Button variant="custom" disabled/>
                                <Button variant="custom" disabled/>
                                <Button variant="custom" style={{background: 'lightgray'}} disabled/>
                            </>,
                            5: <>
                                <Button variant="custom" disabled/>
                                <Button variant="custom" disabled/>
                                <Button variant="custom" disabled/>
                                <Button variant="custom" disabled/>
                                <Button variant="custom" disabled/>
                            </>
                        }[value] || {value}
                    }
                </Col>
            </Row>
        </div>
    )
}

const CatDetails = ({ error, breeds }) => {

    let { breedId } = useParams();
    let breedDetails = breeds?.filter(breed => breed.id === breedId)[0];

    return (
        <Container>
            <Row>
                <Col lg="4">
                    Image
                </Col>
                <Col>
                    <h2>{breedDetails.name}</h2>
                    <p> {breedDetails.description}</p>
                    <Row>
                        <DetailText title='Temperament' content={breedDetails.temperament}/>
                        <DetailText title='Origin' content={breedDetails.origin}/>
                        <DetailText title='Life Span' content={breedDetails.lifeSpan + " years"}/>
                        <DetailRating title='Adaptability' value={breedDetails.adaptability}/>
                        <DetailRating title='Affection Level' value={breedDetails.affection}/>
                        <DetailRating title='Child Friendliness' value={breedDetails.childFriendliness}/>
                        <DetailRating title='Grooming' value={breedDetails.grooming}/>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default CatDetails;