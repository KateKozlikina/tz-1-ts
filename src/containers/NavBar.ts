import { connect } from 'react-redux';
import { RouteComponentProps } from '@reach/router';
import NavBar from '../components/NavBar';
import { logout } from '../actions/userAction';

export interface NavBarProps extends RouteComponentProps {
  logout: () => any,
}


const mapDispatchToProps = (dispatch: any) => ({
  logout: () => dispatch(logout()),
})

export default connect(null, mapDispatchToProps)(NavBar);