import { fireEvent, render, screen, within } from '@testing-library/react';
import App from '../App';

beforeEach(() => { window.history.replaceState({}, '', '/mandalay'); });
afterEach(() => { window.history.replaceState({}, '', '/'); });

test('Mandalay uses one shared header, main, and footer', () => {
  render(<App />);
  expect(screen.getAllByRole('banner')).toHaveLength(1);
  expect(screen.getAllByRole('main')).toHaveLength(1);
  expect(screen.getAllByRole('contentinfo')).toHaveLength(1);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('MandalayCampus');
  expect(screen.getByRole('heading', { name: 'Learning' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Latest news' })).toBeInTheDocument();
  expect(screen.getAllByRole('article')).toHaveLength(10);
  expect(screen.getByRole('link', { name: 'Home', exact: false })).toHaveAttribute('href', '/#home');
  expect(document.title).toBe('Mandalay Campus | Yangon International School');
});

test('contact form prepares an email draft without claiming delivery', () => {
  render(<App />);
  fireEvent.change(screen.getByLabelText('First name'), { target: { value: 'Test' } });
  fireEvent.change(screen.getByLabelText('Last name'), { target: { value: 'Parent' } });
  fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'parent@example.com' } });
  fireEvent.change(screen.getByLabelText('Subject'), { target: { value: 'Campus tour' } });
  fireEvent.change(screen.getByLabelText('Message'), { target: { value: 'Please arrange a visit.' } });
  fireEvent.click(screen.getByRole('button', { name: 'Send message' }));
  const status = screen.getByRole('status');
  expect(status).toHaveTextContent('has not been sent');
  expect(within(status).getByRole('link')).toHaveAttribute('href', expect.stringContaining('mailto:admissions.mdy@yismyanmar.com?subject=Campus%20tour'));
  fireEvent.change(screen.getByLabelText('Subject'), { target: { value: 'Updated enquiry' } });
  expect(screen.queryByRole('status')).not.toBeInTheDocument();
});

test('all campus photo references reuse supplied public assets', () => {
  render(<App />);
  document.querySelectorAll('main img').forEach(img => expect(img.getAttribute('src')).toMatch(/^\/(mandalay|partners)\/.+\.(jpg|png|webp)$/));
});
