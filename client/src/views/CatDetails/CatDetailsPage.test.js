import { render, screen } from '@testing-library/react';
import {Route, MemoryRouter} from 'react-router-dom';
import CatService from '../../services/catService';
import CatDetailsPage from './CatDetailsPage';

import { unmountComponentAtNode } from "react-dom";

let container = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

const renderWithRagdollRoute = () => {
    return render(
        <MemoryRouter initialEntries={['breeds/ragd']}>
            <Route path='breeds/:breedId'>
                <CatDetailsPage />
            </Route>
        </MemoryRouter>
    )
}

test('fetches and displays details of chosen cat breed', async () => {
    // Given
    const breedDetails =
        {
            id: 'ragd',
            name: 'Ragdoll',
            description: 'Ragdolls are the best.',
            temperament: 'Affectionate, Friendly',
            origin: 'United States',
            lifeSpan: '12 - 17',
            adaptability: 5,
            affection: 5,
            childFriendliness: 4,
            grooming: 2,
            intelligence: 3,
            healthIssues: 3,
            socialNeeds: 5,
            strangerFriendliness: 3
        };
    const mock = jest.spyOn(CatService, "fetchBreedDetails").mockResolvedValue(breedDetails);

    // When
    renderWithRagdollRoute();

// Then
    expect(await screen.findByText('Ragdoll')).toBeInTheDocument();
    expect(await screen.findByText('Ragdolls are the best.')).toBeInTheDocument();
    expect(await screen.findByText('12 - 17 years')).toBeInTheDocument();

    mock.mockRestore();
})

test('displays loading placeholder when breeds are loading', () => {
    // Given
    // ... the cat breed API has not responded yet

    // When
    renderWithRagdollRoute();

    // Then
    const loadingText = screen.getByText(/Loading.../i);
    expect(loadingText).toBeInTheDocument();
})

test('displays message when breed id specified is not found', async () => {
    // Given
    const mock = jest.spyOn(CatService, "fetchBreedDetails").mockResolvedValue({});

    // When
    renderWithRagdollRoute();

    // Then
    expect(await screen.findByText(/Cat not found/i)).toBeInTheDocument();
    mock.mockRestore();
})

// TODO: Get test for error working. I don't think 'throw new Error()' is correct
// test('displays error when loading breeds fails', async () => {
//     // Given
//     const mock = jest.spyOn(CatService, "fetchBreedDetails").mockImplementation(() => {
//         throw new Error();
//     });
//
//     // When
//     renderWithRagdollRoute();
//
//     // Then
//     expect(await screen.findByText(/Something went wrong. Please try again./i)).toBeInTheDocument();
// })
