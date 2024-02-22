import { Divider, Stack, StackProps, Typography } from '@mui/material';

interface ICountsPanelProps {
  count: {
    [key: string]: number | undefined;
    select?: number;
    search?: number;
    total?: number;
  };
  containerProps?: StackProps;
}

const COUNTER_MAP: Record<string, string> = {
  total: '전체',
  search: '검색',
  select: '선택',
};

const Component = ({ count, containerProps }: ICountsPanelProps) => {
  return (
    <Stack
      flexDirection="row"
      gap={1}
      paddingY={0.5}
      alignItems="center"
      divider={<Divider orientation="vertical" variant="middle" flexItem />}
      {...containerProps}
    >
      {Object.keys(count).map((key: string) => (
        <Typography key={key} variant="subtitle2">
          {`${COUNTER_MAP[key]} ${count[key]}`}
        </Typography>
      ))}
    </Stack>
  );
};

export default Component;
