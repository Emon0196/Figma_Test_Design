import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './FacebookCircle.module.css';
import { VectorIcon } from './VectorIcon';

interface Props {
  className?: string;
  swap?: {
    vector?: ReactNode;
  };
}
/* @figmaId 1:16 */
export const FacebookCircle: FC<Props> = memo(function FacebookCircle(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.vector}>{props.swap?.vector || <VectorIcon className={classes.icon} />}</div>
    </div>
  );
});
