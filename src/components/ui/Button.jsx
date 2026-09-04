import styles from './UI.module.css';
export default function Button({ children, href, variant = 'primary', ...props }) {
  const className = `${styles.button} ${styles[variant]}`;
  return href ? <a className={className} href={href} {...props}>{children}</a> : <button type="button" className={className} {...props}>{children}</button>;
}
