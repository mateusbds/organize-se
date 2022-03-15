import { merge } from 'lodash';
import { Components, Theme } from '@mui/material';

import Card from './Card';
import Baseline from './Baseline';

export default function componentsOverrides(theme: Theme): Components<Theme> {
  return merge(Card(theme), Baseline(theme));
}
