import React from 'react';
import {shallow} from 'enzyme';
import App from './App';

describe("App", () => {

  it("Debe renderear correctamente", () =>{

      const component = shallow(<App/>)

      expect (component).toMatchSnapshot();
  })

})
