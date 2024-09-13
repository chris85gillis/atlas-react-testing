import { render } from '@testing-library/react';
import SongTitle from '../components/SongTitle';

describe('SongTitle', () => {
  it('renders correctly with title and author', () => {
    const { asFragment } = render(<SongTitle title="Song Title" author="Artist Name" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly with missing author', () => {
    const { asFragment } = render(<SongTitle title="Song Title" author="" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly with missing title', () => {
    const { asFragment } = render(<SongTitle title="" author="Artist Name" />);
    expect(asFragment()).toMatchSnapshot();
  });
});