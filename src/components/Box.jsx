import styled from 'styled-components';
import {
  space,
  color,
  typography,
  layout,
  flexbox,
  border,
} from 'styled-system';

const Box = styled('div')(space, color, typography, layout, flexbox, border);

export default Box;
