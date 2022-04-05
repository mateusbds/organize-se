import NextLink from 'next/link';
import {
  Box,
  Link,
  Card,
  Button,
  TextField,
  TableHead,
  TableRow,
  TableCell,
  TableSortLabel,
  TableBody,
  TableFooter,
  TablePagination,
} from '@mui/material';
import { Table } from '@presentation/components/Table';

export type WorkspaceListProps = {
  workspaces: any[];
};

export const WorkspaceList: React.FC<WorkspaceListProps> = ({ workspaces }) => {
  return (
    <Card sx={{ p: 3, mt: 2, flex: 1 }}>
      <Box sx={{ mb: 3 }} display="flex" justifyContent="space-between">
        <TextField label="Pesquisar" />
        <Box>
          <Button variant="contained">Novo Workspace</Button>
        </Box>
      </Box>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <TableSortLabel>Nome</TableSortLabel>
            </TableCell>
            <TableCell width="20%">
              <TableSortLabel>Data de criação</TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {workspaces.map(({ name, id }) => (
            <TableRow key={id}>
              <TableCell>
                <NextLink href="#" passHref>
                  <Link underline="hover">{name}</Link>
                </NextLink>
              </TableCell>
              <TableCell>01/01/2020</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination count={1} onPageChange={(e) => {}} page={0} rowsPerPage={10} />
          </TableRow>
        </TableFooter>
      </Table>
    </Card>
  );
};
