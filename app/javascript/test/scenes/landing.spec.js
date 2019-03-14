import React from 'react';
import {configure, mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Landing from '../../scenes/Landing';

configure({ adapter: new Adapter() });

test('Renders image when imageUrl state is non-null', () => {
  const landing = shallow(<Landing />);
  expect(landing.find('.landing-img')).toHaveLength(0);

  landing.setState({imageUrl: 'http://test.com/test.jpg'});

  expect(landing.find('.landing-img')).toHaveLength(1);
});

test('onSubmit updates component state', async () => {
  const aLink = 'https://testlink.com';

  const landing = shallow(<Landing />);

  landing.instance().postImage = jest.fn().mockImplementation(() => true);

  landing.setState({linkInput: aLink});
  await landing.instance().onSubmit({ preventDefault: () => {} });

  expect(landing.state().linkInput).toBe('');
  expect(landing.state().imageUrl).toBe(aLink)
});
