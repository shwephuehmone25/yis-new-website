import { fireEvent, render, screen, within } from '@testing-library/react';
import App from '../App';

beforeEach(() => { window.history.replaceState({}, '', '/mandalay'); });
afterEach(() => { window.history.replaceState({}, '', '/'); });

test('Mandalay uses one shared header, main, and footer', () => {
  render(<App />);
  expect(screen.getAllByRole('banner')).toHaveLength(1);
  expect(screen.getAllByRole('main')).toHaveLength(1);
  expect(screen.getAllByRole('contentinfo')).toHaveLength(1);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('School Mandalay');
  expect(screen.getByRole('heading', { name: 'Academic programs' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Schoolwide events' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'In their own words' })).toBeInTheDocument();
  expect(screen.getAllByRole('link', { name: 'Yangon International School home' })[0]).toHaveAttribute('href', '/#home');
  expect(document.title).toBe('Mandalay Campus | Yangon International School');
});

test('contact form prepares an email draft without claiming delivery', () => {
  render(<App />);
  fireEvent.change(screen.getByLabelText('First name'), { target: { value: 'Test' } });
  fireEvent.change(screen.getByLabelText('Last name'), { target: { value: 'Parent' } });
  fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'parent@example.com' } });
  fireEvent.change(screen.getByLabelText('Phone'), { target: { value: '+959123456789' } });
  fireEvent.change(screen.getByLabelText('Preferred tour date'), { target: { value: '2026-10-01' } });
  fireEvent.change(screen.getByLabelText('Grade level'), { target: { value: 'Elementary' } });
  fireEvent.change(screen.getByLabelText('Questions or comments'), { target: { value: 'Please arrange a visit.' } });
  fireEvent.click(screen.getByRole('button', { name: 'Submit tour request' }));
  const status = screen.getByRole('status');
  expect(status).toHaveTextContent('has not been sent');
  expect(within(status).getByRole('link')).toHaveAttribute('href', expect.stringContaining('mailto:admissions.mdy@yismyanmar.com?subject=Campus%20tour%20request'));
  fireEvent.change(screen.getByLabelText('Phone'), { target: { value: '+959987654321' } });
  expect(screen.queryByRole('status')).not.toBeInTheDocument();
});

test('all campus photo references reuse supplied public assets', () => {
  render(<App />);
  document.querySelectorAll('main img').forEach(img => expect(img.getAttribute('src')).toMatch(/^\/(mandalay|partners)\/.+\.(jpg|png|webp)$/));
});
