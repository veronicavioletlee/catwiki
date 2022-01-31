import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useParams} from 'react-router-dom';

import DetailRating from './DetailRating';
import './CatDetails.css';

const DetailText = ({title, content}) => {
    return (
        <div className="breed-detail">
            <span className="DetailTitle">{title}: </span>{content}
        </div>
    )
}

const CatDetails = ({error, breeds}) => {

    let {breedId} = useParams();
    let breedDetails = breeds?.filter(breed => breed.id === breedId)[0];

    return (
        <Container>
            {error ? <p>Something went wrong. Please try again.</p>
                : !breeds ? <p>Loading...</p>
                    : (!breedDetails ? <p>Cat not found :(</p>
                        : (<Row>
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
                                    <DetailRating title='Adaptability' rating={breedDetails.adaptability}/>
                                    <DetailRating title='Affection' rating={breedDetails.affection}/>
                                    <DetailRating title='Child Friendly'
                                                  rating={breedDetails.childFriendliness}/>
                                    <DetailRating title='Grooming' rating={breedDetails.grooming}/>
                                    <DetailRating title='Intelligence' rating={breedDetails.intelligence}/>
                                    <DetailRating title='Health Issues' rating={breedDetails.healthIssues}/>
                                    <DetailRating title='Social Needs' rating={breedDetails.socialNeeds}/>
                                    <DetailRating title='Stranger Friendly' rating={breedDetails.strangerFriendliness}/>
                                </Row>
                            </Col>
                        </Row>))}
        </Container>
    )
}

export default CatDetails;