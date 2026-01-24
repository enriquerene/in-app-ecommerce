import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Logo } from './Logo';

describe('Logo', () => {
  it('renders correctly with default text', () => {
    render(<Logo />);
    expect(screen.getByText('InstaShop')).toBeDefined();
    expect(screen.getByRole('heading', { level: 1 })).toBeDefined();
  });

  it('applies default styles', () => {
    const { container } = render(<Logo />);
    const h1 = container.querySelector('h1');
    expect(h1?.className).toContain('text-xl');
    expect(h1?.className).toContain('font-bold');
    expect(h1?.className).toContain('tracking-tight');
    expect(h1?.className).toContain('italic');
  });

  it('applies custom className', () => {
    const { container } = render(<Logo className="text-red-500" />);
    const h1 = container.querySelector('h1');
    expect(h1?.className).toContain('text-red-500');
  });
});
