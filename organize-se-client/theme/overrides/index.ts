import { merge } from 'lodash';
import { Components, Theme } from '@mui/material';

import Card from './Card';
import List from './List';
import Baseline from './Baseline';
import LoadingButton from './LoadingButton';

export default function componentsOverrides(theme: Theme): Components<Theme> {
  return merge(Card(theme), List(theme), Baseline(theme), LoadingButton(theme));
}
