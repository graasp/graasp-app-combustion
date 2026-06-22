import { Box } from '@mui/material';

import { generateOffsets } from '@/utils';

const container = {
  position: 'relative',
  width: '4.5rem',
  height: '3.5rem',
};

const Stack = ({
  icon,
  iconCount,
}: {
  icon: React.ReactNode;
  iconCount: number;
}): JSX.Element => (
  <Box sx={container}>
    {generateOffsets(iconCount).map((pos, i) => (
      <Box
        key={i}
        component="span"
        aria-hidden
        sx={{
          position: 'absolute',
          bottom: pos.bottom,
          left: pos.left,
          zIndex: pos.zIndex,
        }}
      >
        {icon}
      </Box>
    ))}
  </Box>
);

export default Stack;
