import React from 'react'
import { render } from '@testing-library/react'
import CardItem from './CardItem'

import { Provider } from 'react-redux';

import {store} from '../../redux/store'
import { BrowserRouter } from 'react-router-dom';

const Wrapper = (props) => (
    <Provider store={store}>
    <BrowserRouter>
        <CardItem {...props} />
    </BrowserRouter>
    </Provider>
)

test('render', () => {
    const data = {
        id: 1,
        name: 'Test Card',
        thumbnail: {
            path: '',
            extension: ''
        }
    }

    const { container  } = render(<Wrapper result={data}/>)
    const cardItem = container.getElementsByClassName('cardItem')

    expect(cardItem).toBeTruthy()
})
