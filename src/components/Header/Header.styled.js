import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


export const StyledNavLink = styled(NavLink)`
	color: green;

	&.active {
		background-color: orange;
	}
`