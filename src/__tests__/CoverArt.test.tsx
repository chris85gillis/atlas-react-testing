import { render } from '@testing-library/react';
import CoverArt from '../components/CoverArt';

describe('CoverArt', () => {
  it('renders correctly with a valid artwork URL', () => {
    const { asFragment } = render(<CoverArt artwork="https://example.com/artwork.jpg" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly with an empty artwork URL', () => {
    const { asFragment } = render(<CoverArt artwork="" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly with a missing artwork prop', () => {
    const { asFragment } = render(<CoverArt artwork={undefined} />);
    expect(asFragment()).toMatchSnapshot();
  });
});