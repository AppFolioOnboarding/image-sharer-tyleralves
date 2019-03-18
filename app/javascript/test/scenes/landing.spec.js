import React from 'react';
import {configure, mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Landing from '../../scenes/Landing';

configure({ adapter: new Adapter() });

const mockImages = [{
  id: 1,
  url: 'http://test.com'
}, {
  id: 2,
  url: 'http://test2.com'
}];
let landing;

beforeAll(() => {
  global.fetch = jest.fn().mockImplementation(() => Promise.resolve([]));
});

test('Renders images when images state is non-null', () => {
  const landing = shallow(<Landing />);
  expect(landing.find('.landing-img')).toHaveLength(0);

  landing.setState({images: mockImages});

  expect(landing.find('.landing-img')).toHaveLength(2);
});

test('Displays modal when isModalOpen is true, closes when false', async () => {
  const landing = mount(<Landing />);
  expect(landing.find('.modal-header')).toHaveLength(0);
  landing.setState({isModalOpen: true});
  expect(landing.find('.modal-header')).toHaveLength(1);
  landing.setState({isModalOpen: false});
  // Modal takes some amount of time to fade out
  setTimeout(() => expect(landing.find('.modal-header')).toHaveLength(0), 1000);
});

test('onSubmit updates component state', async () => {
  const landing = shallow(<Landing />);
  const aLink = 'https://testlink.com';

  landing.instance().postImage = jest.fn().mockImplementation(() => Promise.resolve({id: 1}));

  landing.setState({linkInput: aLink});
  await landing.instance().onSubmit({ preventDefault: () => {} });

  expect(landing.state().linkInput).toBe('');
  expect(landing.state().images).toHaveLength(1);
});
