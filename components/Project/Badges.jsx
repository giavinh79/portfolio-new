import React from 'react';
import { BADGE_ICONS } from '../../constants';
import { Badge } from './Badge';
import styles from './badges.module.css';

const BadgesComponent = ({ tags }) => {
  return (
    <div className={styles['badge-wrapper']}>
      {tags.map((technology) => {
        const graphic = BADGE_ICONS[technology];

        if (graphic == null) return null;

        return graphic.devicon ? (
          <Badge icon={graphic.link} text={technology} key={technology} />
        ) : (
          <Badge image={graphic.link} text={technology} key={technology} />
        );
      })}
    </div>
  );
};

export const Badges = React.memo(BadgesComponent);
