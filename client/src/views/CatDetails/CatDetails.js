import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './CatDetails.css';

const DetailText = ({title, content}) => {
    return (
        <div className="breed-detail">
            <span className="detail-title">{title}: </span>{content}
        </div>
    )
}

const RatingBarActive = () => {
    return (
        <Button variant="custom" disabled/>
    )
}

const RatingBarInactive = () => {
    return (
        <Button variant="custom" style={{background: 'lightgray'}} disabled/>
    )
}

const DetailRating = ({ title, rating }) => {
    return (
        <div className="breed-detail">
            <Row>
                <Col xs lg='3'>
                    <span className="detail-title">{title}: </span>
                </Col>
                <Col>
                    {
                        {
                            0: <>
                                <RatingBarInactive/>
                                <RatingBarInactive/>
                                <RatingBarInactive/>
                                <RatingBarInactive/>
                                <RatingBarInactive/>
                            </>,
                            1: <>
                                <RatingBarActive/>
                                <RatingBarInactive/>
                                <RatingBarInactive/>
                                <RatingBarInactive/>
                                <RatingBarInactive/>
                            </>,
                            2: <>
                                <RatingBarActive/>
                                <RatingBarActive/>
                                <RatingBarInactive/>
                                <RatingBarInactive/>
                                <RatingBarInactive/>
                            </>,
                            3: <>
                                <RatingBarActive/>
                                <RatingBarActive/>
                                <RatingBarActive/>
                                <RatingBarInactive/>
                                <RatingBarInactive/>
                            </>,
                            4: <>
                                <RatingBarActive/>
                                <RatingBarActive/>
                                <RatingBarActive/>
                                <RatingBarActive/>
                                <RatingBarInactive/>
                            </>,
                            5: <>
                                <RatingBarActive/>
                                <RatingBarActive/>
                                <RatingBarActive/>
                                <RatingBarActive/>
                                <RatingBarActive/>
                            </>
                        }[rating] || rating
                    }
                </Col>
            </Row>
        </div>
    )
}

const CatDetails = ({ breedDetails }) => {

    return (
        <>
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
        </>
    )
}

export default CatDetails;