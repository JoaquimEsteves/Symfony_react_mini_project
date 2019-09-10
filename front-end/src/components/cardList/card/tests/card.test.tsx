import React from 'react';


import { shallow } from 'enzyme';
import Card from '../card';
import '../../../../setupTests';

it('try out the snapshot yo', () => {
    const example = { id: 1, name: "", email: "", username: "" };
    expect(shallow(<Card {...example} />).debug()).toMatchSnapshot();
})