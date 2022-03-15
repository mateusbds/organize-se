import { Card, Stack, Typography, TextField, Button } from '@mui/material';

import Page from '@presentation/components/Page';
import { Authenticate } from '@domain/useCases/Authenticate';

interface Props {
  authenticate: Authenticate;
}

const Login: React.FC<Props> = ({ authenticate }) => {
  return (
    <Page title="Entrar">
      <Card sx={{ p: 3, m: 'auto', width: '480px' }}>
        <Stack spacing={3}>
          <Typography variant="h3">Entrar</Typography>
          <TextField label="Email" fullWidth />
          <TextField label="Senha" fullWidth />

          <Button variant="contained">Entrar</Button>
        </Stack>
      </Card>
    </Page>
  );
};

export default Login;
