import React from 'react';
import Homepage from '../client/components/homepage.jsx'
describe('Will test', function(){
  it('will do', function(){
    const wrapper = shallow(
      <Homepage />
    );
    expect(wrapper.html()).toEqual("<div>Hello World!</div>");
  })
});

