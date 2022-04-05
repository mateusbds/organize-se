import { styled } from '@mui/material';
import SimpleBar from 'simplebar-react';

const ScrollbarStyled = styled(SimpleBar)({
  width: '100%',
});

const Scrollbar: React.FC = ({ children }) => {
  return <ScrollbarStyled>{children}</ScrollbarStyled>;
};

export default Scrollbar;
