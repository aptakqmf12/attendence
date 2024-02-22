import { forwardRef } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';

export interface ILinkBehaviorProps extends Omit<NavLinkProps, 'to'> {
  href: NavLinkProps['to'];
}

const LinkBehavior = forwardRef<HTMLAnchorElement, ILinkBehaviorProps>(
  (props, ref) => {
    const { href, children, ...other } = props;

    return (
      <NavLink ref={ref} to={href} {...other}>
        {children}
      </NavLink>
    );
  },
);
LinkBehavior.displayName = 'Link';

export default LinkBehavior;
