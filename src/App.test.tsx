import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders shared layout and home page sections', () => {
  render(<App />);
  expect(screen.getByRole('banner')).toBeInTheDocument();
  expect(screen.getByRole('main')).toBeInTheDocument();
  expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Progress ThroughEducation');
  ['Our Campuses', 'Our Vision', 'Our Mission', 'Academic Programs', 'Admissions', 'Affiliations & Accreditations'].forEach(name => expect(screen.getByRole('heading', { name })).toBeInTheDocument());
  expect(screen.getAllByRole('article')).toHaveLength(6);
});

test('mobile navigation closes after choosing a section', () => {
  render(<App />);
  const toggle = screen.getByRole('button', { name: 'Menu' });
  fireEvent.click(toggle);
  expect(toggle).toHaveAttribute('aria-expanded', 'true');
  fireEvent.click(screen.getByRole('link', { name: 'Learning' }));
  expect(toggle).toHaveAttribute('aria-expanded', 'false');
});

test('unconfigured actions show an honest notice', () => {
  HTMLDialogElement.prototype.showModal = function () { this.setAttribute('open', ''); };
  HTMLDialogElement.prototype.close = function () { this.removeAttribute('open'); this.dispatchEvent(new Event('close')); };
  render(<App />);
  fireEvent.click(screen.getByRole('button', { name: 'Apply for Yangon' }));
  expect(screen.getByRole('dialog')).toHaveAttribute('open');
  expect(screen.getByText(/destination has not been provided/i)).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: 'Close' }));
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
});
