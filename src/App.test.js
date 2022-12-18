
import { render, screen} from '@testing-library/react';
import App from './App';


import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import userEvent from '@testing-library/user-event';

describe('Movies list', () => {
    const initialState = {moviesList: []};
    const mockStore = configureStore();
    let store;

    it('gets the Movies from api', async () => {
        store = mockStore(initialState);
        render(
            <Provider store={store}>
                <App />
            </Provider>
        );

        const buttonElement = screen.getAllByRole('button');
        userEvent.click(buttonElement);

        const moviesElements = await screen.findAllByRole('li');
        expect(moviesElements).not.toHaveLength(0);
    })
})