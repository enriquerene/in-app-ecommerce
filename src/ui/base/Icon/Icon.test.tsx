import { render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Icon } from './Icon';

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

describe('Icon', () => {
  it('renders correctly', () => {
    const { container } = render(<Icon name="cart" />);
    const svg = container.querySelector('svg');
    expect(svg).toBeDefined();
    expect(svg?.getAttribute('data-icon')).toBe('lucide:shopping-cart');
  });

  it('applies custom size', () => {
    const { container } = render(<Icon name="cart" size={32} />);
    const svg = container.querySelector('svg');
    expect(svg?.getAttribute('width')).toBe('32');
    expect(svg?.getAttribute('height')).toBe('32');
  });

  it('applies custom className', () => {
    const { container } = render(<Icon name="cart" className="text-red-500" />);
    const svg = container.querySelector('svg');
    expect(svg?.classList.contains('text-red-500')).toBe(true);
  });

  it('renders direct Iconify name', () => {
    const { container } = render(<Icon name="mdi:home" />);
    const svg = container.querySelector('svg');
    expect(svg?.getAttribute('data-icon')).toBe('mdi:home');
  });
});
