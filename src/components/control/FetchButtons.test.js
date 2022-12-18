
import { render, screen} from '@testing-library/react';
import FetchButtons from './FetchButtons';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('renders the "Get" buttons', () => {
    const initialState = {moviesList: []};
    const mockStore = configureStore();
    let store;

    it('Get buttons', () => {
        store = mockStore(initialState);
        render(
            <Provider store={store}>
                <FetchButtons />
            </Provider>
        );

        const buttonElement = screen.getAllByText(/Get/i, {exact: false});
        expect(buttonElement[0]).toBeInTheDocument();
    });
})