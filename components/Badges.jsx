import { BADGE_ICONS } from '../constants';
import styles from './badges.module.css';
import Badge from './Badge';

function Badges({ tags }) {
  return (
    <div className={styles['badge-wrapper']}>
      {tags.map((technology, index) => {
        const graphic = BADGE_ICONS[technology];

        if (graphic == null) return null;

        if (graphic.devicon) {
          return <Badge icon={graphic.link} text={technology} key={index} />;
        } else {
          return <Badge image={graphic.link} text={technology} key={index} />;
        }
      })}
    </div>
  );
}

export default React.memo(Badges);
