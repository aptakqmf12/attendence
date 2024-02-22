import {
  Breadcrumbs,
  BreadcrumbsProps,
  Link,
  LinkProps,
  styled,
} from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const ItemComponent = (props: LinkProps) => {
  return <StyledLink variant="subtitle2" {...props} />;
};

const Component = (props: BreadcrumbsProps) => {
  return (
    <StyledBreadcrumbs
      aria-label="breadcrumb"
      separator={<NavigateNextIcon fontSize="small" />}
      {...props}
    />
  );
};

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration-line: none;
  text-decoration-color: inherit;

  &:hover {
    text-decoration-line: underline;
  }
`;

const StyledBreadcrumbs = styled(Breadcrumbs)`
  text-decoration-color: ${({ theme }) => theme.palette.text.secondary};

  .MuiBreadcrumbs-separator {
    margin-left: 4px;
    margin-right: 4px;
  }
`;

Component.Item = ItemComponent;

export default Component;
