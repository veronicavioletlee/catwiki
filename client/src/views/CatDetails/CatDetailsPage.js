import {useEffect, useState} from 'react';
import {Image} from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {useParams} from 'react-router-dom';

import './CatDetails.css';
import {CatService} from '../../services/catService';
import CatDetails from './CatDetails';

const CatDetailsPage = () => {

    const [breedDetails, setBreedDetails] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const getBreedDetails = (breedId) => {
        setIsLoading(true);
        CatService.fetchBreedDetails(breedId)
            .then((data) => {
                    setBreedDetails(data);
                    setIsLoading(false);
                },
                (error) => {
                    setIsLoading(false);
                    setError(error);
                })
    }

    let { breedId } = useParams();

    useEffect(() => {
        getBreedDetails(breedId);
    }, [breedId]);

    return (
        <Container className='breed-details'>
            {error ? <p>Something went wrong. Please try again.</p>
                : isLoading ? <p>Loading...</p>
                    : (!breedDetails?.name ? <p>Cat not found :(</p>
                        : (<Row>
                            <Col lg="4">
                                <Image fluid src={breedDetails.imageUrl} rounded />
                            </Col>
                            <Col>
                                <h2>{breedDetails.name}</h2>
                                <p> {breedDetails.description}</p>
                                <Row>
                                    <CatDetails breedDetails={breedDetails}/>
                                </Row>
                            </Col>
                        </Row>))}
        </Container>
    )
}

export default CatDetailsPage;