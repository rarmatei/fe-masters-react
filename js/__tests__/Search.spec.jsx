import React from 'react';
import { shallow } from 'enzyme';
import Search from '../Search';
import preload from '../../data.json';
import ShowCard from '../ShowCard';

test('Search renders correctly', () => {
  const component = shallow(<Search />);
  expect(component).toMatchSnapshot();
});

test('renders the correct number of cards', () => {
  const component = shallow(<Search />);
  expect(component.find(ShowCard).length).toBe(preload.shows.length);
});

test('correctly filters the list of shows', () => {
  const component = shallow(<Search />);
  const searchTerm = 'black';

  component.find('input').simulate('change', { target: { value: searchTerm } });
  const showCount = preload.shows.filter(show =>
    `${show.title} ${show.description}`
      .toUpperCase()
      .includes(searchTerm.toUpperCase())
  ).length;

  expect(component.find(ShowCard).length).toBe(showCount);
});
