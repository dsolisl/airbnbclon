import React from 'react';
import {shallow} from 'enzyme';

import PropiedadesList from './PropiedadesList';

describe("Propiedades", () => {

    it("Debe renderear correctamente", () =>{

        const component = shallow(<PropiedadesList/>)

        expect (component).toMatchSnapshot();
    })

})