import React from 'react'
import { render } from '@testing-library/react'
import Header from './index'

import { Provider } from 'react-redux';

import {store} from '../../redux/store'
import { BrowserRouter } from 'react-router-dom';

const Wrapper = () => (
    <Provider store={store}>
    <BrowserRouter>
        <Header />
    </BrowserRouter>
    </Provider>
)

test('render', () => {
    const { container  } = render(<Wrapper />)
    const header = container.getElementsByTagName('header')
    const input = container.getElementsByTagName('input-search')

    expect(header).toBeTruthy()
    expect(input).toBeTruthy()
})
