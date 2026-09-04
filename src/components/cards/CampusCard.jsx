import Button from '../ui/Button';
import styles from './Cards.module.css';
export default function CampusCard({ name, image, description, onAction }) {
  return <article className={styles.campus} id={name.toLowerCase()}><img src={image} alt={`${name} campus ${name === 'Mandalay' ? 'library' : 'school building'}`} width="560" height="220" loading="lazy" />
    <div className={styles.campusBody}><h3>{name}</h3><p>{description}</p><div className={styles.actions}><Button onClick={() => onAction(`${name} campus website`)}>Go to site</Button><Button variant="outline" onClick={() => onAction(`${name} campus video`)}>Campus video</Button></div></div>
  </article>;
}
