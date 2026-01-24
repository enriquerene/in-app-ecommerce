import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Header } from './Header';

// Mock Iconify to avoid network requests and ensure predictable rendering in tests
vi.mock('@iconify/react', () => ({
  Icon: ({ icon, width, height, className, color }: any) => (
    <svg
      data-icon={icon}
      width={width}
      height={height}
      className={className}
      style={{ color }}
    >
      <rect />
    </svg>
  ),
}));

describe('Header', () => {
  it('renders the app name', () => {
    render(<Header />);
    expect(screen.getByText('InstaShop')).toBeDefined();
  });

  it('renders cart and user icons', () => {
    const { container } = render(<Header />);
    const icons = container.querySelectorAll('svg');
    expect(icons.length).toBe(2);
    
    const iconNames = Array.from(icons).map(icon => icon.getAttribute('data-icon'));
    expect(iconNames).toContain('lucide:shopping-cart');
    expect(iconNames).toContain('lucide:user');
  });

  it('has sticky positioning', () => {
    const { container } = render(<Header />);
    const header = container.querySelector('header');
    expect(header?.className).toContain('sticky top-0');
  });
});
