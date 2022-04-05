import { object, string } from 'yup';
import { FormikProvider, Form, useFormik } from 'formik';
import { LoadingButton } from '@mui/lab';
import { Card, Stack, Typography, TextField } from '@mui/material';

import Page from '@presentation/components/Page';
import { Authenticate } from '@domain/useCases/Authenticate';

const validationSchema = object().shape({
  email: string().email('Email inválido').required('Email é obrigatório'),
  password: string()
    .min(8, 'Sua senha deve ter ${min} no mínimo digitos')
    .max(32, 'Sua senha deve ter ${max} no máximo digitos')
    .required('Senha é obrigatória'),
});

interface Props {
  authenticate: Authenticate;
}

interface FormValues {
  email: string;
  password: string;
}

const LoginPage: React.FC<Props> = ({ authenticate }) => {
  const formik = useFormik<FormValues>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
      } catch (error) {
      } finally {
        // setSubmitting(false);
      }
    },
  });

  const { handleSubmit, touched, errors, getFieldProps, isSubmitting } = formik;

  return (
    <Page title="Entrar">
      <Card sx={{ p: 3, m: 'auto', width: '480px' }}>
        <FormikProvider value={formik}>
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <Typography variant="h3">Entrar</Typography>

              <TextField
                label="Email"
                type="email"
                fullWidth
                {...getFieldProps('email')}
                error={Boolean(touched.email && errors.email)}
                helperText={touched.email && errors.email}
              />

              <TextField
                label="Senha"
                type="password"
                fullWidth
                {...getFieldProps('password')}
                error={Boolean(touched.password && errors.password)}
                helperText={touched.password && errors.password}
              />

              <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
                Entrar
              </LoadingButton>
            </Stack>
          </Form>
        </FormikProvider>
      </Card>
    </Page>
  );
};

export default LoginPage;
