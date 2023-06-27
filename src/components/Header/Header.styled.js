import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


export const StyledNavLink = styled(NavLink)`
	display:flex;
	justify-content:space-between;
	width: 120px;
	color: green;

	&.active {
		color: orange;
	}
`

export const StyledHeader = styled.header`
	padding: 15px;
	margin-bottom: 30px;
	display:flex;
	justify-content: space-between;
	/* height: 60px; */
	width: 100%;
	box-shadow: 0 2px 5px rgba(0,0,0,0.2), 0 4px 6px rgba(0,0,0,0.2);

`