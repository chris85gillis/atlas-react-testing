import { render, fireEvent } from '@testing-library/react';
import VolumeControl from '../components/VolumeControl';
import '@testing-library/jest-dom';

describe('VolumeControl', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<VolumeControl />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('changes volume when slider is adjusted', () => {
    const { getByRole } = render(<VolumeControl />);
    const slider = getByRole('slider');
    fireEvent.change(slider, { target: { value: '80' } });
    expect(slider).toHaveValue('80');
  });
});