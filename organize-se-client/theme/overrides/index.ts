import { merge } from 'lodash';
import { Components, Theme } from '@mui/material';

import Card from './Card';

import Icon from './Icon';
import List from './List';
import Table from './Table';
import Button from './Button';
import Drawer from './Drawer';
import Baseline from './Baseline';
import TextField from './TextField';
import LoadingButton from './LoadingButton';

export default function componentsOverrides(theme: Theme): Components<Theme> {
  return merge(
    Icon(theme),
    Card(theme),
    List(theme),
    Table(theme),
    Button(theme),
    Drawer(theme),
    Baseline(theme),
    TextField(theme),
    LoadingButton(theme)
  );
}
