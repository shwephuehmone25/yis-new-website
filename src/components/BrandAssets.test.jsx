import { render, screen } from '@testing-library/react';
import App from '../App';
import { partners } from '../data/partners';

afterEach(() => window.history.replaceState({}, '', '/'));

test.each(['/', '/mandalay'])('%s reuses the supplied brand and partner images', path => {
  window.history.replaceState({}, '', path);
  render(<App />);
  expect(document.querySelectorAll('img[src="/yis-logo.webp"]')).toHaveLength(2);
  partners.forEach(partner => {
    expect(screen.getByRole('img', { name: `${partner.acronym} logo` })).toHaveAttribute('src', partner.image);
    expect(screen.getByText(partner.name)).toBeInTheDocument();
  });
  expect(document.querySelectorAll('img[src^="/partners/"]')).toHaveLength(5);
  expect(screen.queryByTitle(/placeholder/i)).not.toBeInTheDocument();
});
