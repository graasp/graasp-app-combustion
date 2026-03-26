import { Typography } from '@mui/material';

interface Props {
  caption: string;
}

const captionStyles = {
  color: '#48505d',
  fontWeight: 500,
};

const Caption = ({ caption }: Props): JSX.Element => (
  <Typography variant="caption" sx={captionStyles}>
    {caption.toUpperCase()}
  </Typography>
);

export default Caption;
