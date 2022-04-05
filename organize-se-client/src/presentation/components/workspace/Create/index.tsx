import { Card, Stack, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { Form, FormikProvider, useFormik } from 'formik';

const WorkspaceCreateForm = () => {
  const formik = useFormik({
    initialValues: { name: '' },
    onSubmit: (values) => {},
  });

  const { handleSubmit, getFieldProps } = formik;

  return (
    <Card sx={{ p: 3, mt: 2 }}>
      <FormikProvider value={formik}>
        <Form noValidate onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField {...getFieldProps('name')} fullWidth label="Nome" />
            <Stack flexDirection="row" justifyContent="end">
              <LoadingButton variant="contained" type="submit">
                Criar
              </LoadingButton>
            </Stack>
          </Stack>
        </Form>
      </FormikProvider>
    </Card>
  );
};

export default WorkspaceCreateForm;
