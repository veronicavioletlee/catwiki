import { render } from '@testing-library/react';
import {Route, MemoryRouter} from 'react-router-dom';

import CatDetails from './CatDetails';

const renderWithRagdollRoute = ({error, breeds}) => {
    return render(
        <MemoryRouter initialEntries={['breeds/ragd']}>
            <Route path='breeds/:breedId'>
                <CatDetails error={error} breeds={breeds}/>
            </Route>
        </MemoryRouter>
    )
}

test('displays details of chosen cat breed', () => {
    // Given
    const breeds = [
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
        }
    ]

    // When
    const result = renderWithRagdollRoute({ breeds });

    // Then
    const name = result.getByText('Ragdoll');
    const description = result.getByText('Ragdolls are the best.');
    const lifeSpan = result.getByText('12 - 17 years');

    expect(name).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(lifeSpan).toBeInTheDocument();
})

test('does not display other breeds', () => {
    // Given
    const breeds = [
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
        },
        {
            id: 'rblu',
            name: 'Russian Blue',
            description: 'Russian Blues are very loving and reserved.',
            temperament: 'Active, Dependent, Easy Going, Gentle, Intelligent, Loyal, Playful, Quiet',
            origin: 'Russia',
            lifeSpan: '10 - 16',
            adaptability: 3,
            affection: 3,
            childFriendliness: 3,
            grooming: 3,
            intelligence: 3,
            healthIssues: 1,
            socialNeeds: 3,
            strangerFriendliness: 1
        }
    ]

    // When
    const result = renderWithRagdollRoute({ breeds });

    // Then
    const russianBlue = result.queryByText('Russian Blue');
    expect(russianBlue).toEqual(null);
})

test('displays loading placeholder when breeds are loading', () => {
    // Given
    const breeds = null;

    // When
    const result = renderWithRagdollRoute({ breeds });

    // Then
    const loadingText = result.getByText(/Loading.../i);
    expect(loadingText).toBeInTheDocument();
})

test('displays error when loading breeds fails', () => {
    // Given
    const error = true;
    const breeds = null;

    // When
    const result = renderWithRagdollRoute({ error, breeds });

    // Then
    const errorMessage = result.getByText(/Something went wrong. Please try again./i);
    expect(errorMessage).toBeInTheDocument();
})

test('displays message when breed id specified is not found', () => {
    // Given
    const breeds = [
        {
            id: 'rblu',
            name: 'Russian Blue',
            description: 'Russian Blues are very loving and reserved.',
            temperament: 'Active, Dependent, Easy Going, Gentle, Intelligent, Loyal, Playful, Quiet',
            origin: 'Russia',
            lifeSpan: '10 - 16',
            adaptability: 3,
            affection: 3,
            childFriendliness: 3,
            grooming: 3,
            intelligence: 3,
            healthIssues: 1,
            socialNeeds: 3,
            strangerFriendliness: 1
        }
    ];

    // When
    const result = renderWithRagdollRoute({ breeds });

    // Then
    const notFoundMessage = result.getByText(/Cat not found/i);
    expect(notFoundMessage).toBeInTheDocument();
})
