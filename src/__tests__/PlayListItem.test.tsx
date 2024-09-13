import { render } from '@testing-library/react';
import PlayListItem from '../components/PlayListItem';

describe('PlayListItem', () => {
  it('renders correctly with all props', () => {
    const { asFragment } = render(<PlayListItem title="Song Title" genre="Pop" length="3:45" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly with missing genre', () => {
    const { asFragment } = render(<PlayListItem title="Song Title" genre="" length="3:45" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly with missing length', () => {
    const { asFragment } = render(<PlayListItem title="Song Title" genre="Pop" length="" />);
    expect(asFragment()).toMatchSnapshot();
  });
});