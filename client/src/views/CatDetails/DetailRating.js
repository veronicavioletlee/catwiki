import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './CatDetails.css';

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
// Can be used for ratings out of 5. If an invalid rating is passed in, 
// then it will return the rating in text and not icons.
    
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
                                <RatingBarInactive />
                                <RatingBarInactive />
                                <RatingBarInactive />
                                <RatingBarInactive />
                                <RatingBarInactive />
                            </>,
                            1: <>
                                <RatingBarActive />
                                <RatingBarInactive />
                                <RatingBarInactive />
                                <RatingBarInactive />
                                <RatingBarInactive />
                            </>,
                            2: <>
                                <RatingBarActive />
                                <RatingBarActive />
                                <RatingBarInactive />
                                <RatingBarInactive />
                                <RatingBarInactive />
                            </>,
                            3: <>
                                <RatingBarActive />
                                <RatingBarActive />
                                <RatingBarActive />
                                <RatingBarInactive />
                                <RatingBarInactive />
                            </>,
                            4: <>
                                <RatingBarActive />
                                <RatingBarActive />
                                <RatingBarActive />
                                <RatingBarActive />
                                <RatingBarInactive />
                            </>,
                            5: <>
                                <RatingBarActive />
                                <RatingBarActive />
                                <RatingBarActive />
                                <RatingBarActive />
                                <RatingBarActive />
                            </>
                        }[rating] || rating
                    }
                </Col>
            </Row>
        </div>
    )
}

export default DetailRating;