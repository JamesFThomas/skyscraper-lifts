import { Box, Stack, Typography } from '@mui/material';
import { Forward, ForwardOutlined } from '@mui/icons-material';

const stackStyles = () => {
  return {
    border: '2px solid grey',
    width: 'fit-content',
  };
};

const textStyles = () => {
  return {
    border: '2px solid grey',
    fontSize: 32,
    padding: '16px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  };
};

const iconBoxStyles = () => {
  return {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  };
};

const upIconStyles = () => {
  return {
    transform: 'rotate(270deg)',
    fontSize: 30,
  };
};
const downIconStyles = () => {
  return {
    transform: 'rotate(90deg)',
    fontSize: 30,
  };
};

const DirectionPanel = (props) => {
  const { direction, currentFloor } = props;

  const up = direction === 'UP';
  const down = direction === 'DOWN';

  return (
    <Stack
      data-testid="DirectionalPanel-container"
      padding={2}
      spacing={2}
      sx={stackStyles}
    >
      <Box data-testid="DirectionalPanel-upIconBox" sx={iconBoxStyles}>
        {up ? (
          <Forward sx={upIconStyles} />
        ) : (
          <ForwardOutlined sx={upIconStyles} />
        )}
      </Box>
      <Typography data-testid="DirectionalPanel-currentFloor" sx={textStyles}>
        {currentFloor}
      </Typography>
      <Box data-testid="DirectionalPanel-downIconBox" sx={iconBoxStyles}>
        {down ? (
          <Forward sx={downIconStyles} />
        ) : (
          <ForwardOutlined sx={downIconStyles} />
        )}
      </Box>
    </Stack>
  );
};

export default DirectionPanel;
