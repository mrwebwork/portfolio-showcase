import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { SectionIntro } from '@/components/SectionIntro';

describe('SectionIntro', () => {
  it('renders a heading', () => {
    render(<SectionIntro />);

    const heading = screen.getByRole('heading', { level: 2 });

    expect(heading).toBeInTheDocument();
  });
});
