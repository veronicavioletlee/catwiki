import { render, screen } from '@testing-library/react';
import {unmountComponentAtNode} from 'react-dom';
import {MemoryRouter, Route} from 'react-router-dom';
import App from './App';

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

test('renders Home page', () => {
  render(
      <MemoryRouter initialEntries={['/']}>
        <Route path='/'>
          <App/>
        </Route>
      </MemoryRouter>
  );

  expect(screen.getByText(/Welcome to CatWiki/i)).toBeInTheDocument();
});