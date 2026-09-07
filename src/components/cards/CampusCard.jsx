import Button from '../ui/Button';
import styles from './Cards.module.css';
export default function CampusCard({ name, image, description, onAction, href, variant = 'campus', eyebrow, date, imageAlt, actionLabel = 'Go to site' }) {
  const editorial = variant !== 'campus';
  return <article className={`${styles.campus} ${editorial ? styles.editorial : ''} ${variant === 'news' ? styles.news : ''}`} id={name.toLowerCase().replace(/\s+/g, '-')}>
    <div className={styles.cardImage}><img src={image} alt={imageAlt || `${name} campus ${name === 'Mandalay' ? 'library' : 'school building'}`} width="560" height="220" loading="lazy" />{date && <span className={styles.date}><strong>{date.day}</strong>{date.month}</span>}</div>
    <div className={styles.campusBody}>{eyebrow && <span className={styles.cardEyebrow}>{eyebrow}</span>}<h3>{name}</h3><p>{description}</p><div className={styles.actions}>
      <Button href={href} variant={variant === 'news' ? 'text' : 'primary'} onClick={href ? undefined : () => onAction(editorial ? name : `${name} campus website`)}>{actionLabel}</Button>
      {!editorial && <Button variant="outline" onClick={() => onAction(`${name} campus video`)}>Campus video</Button>}
    </div></div>
  </article>;
}
