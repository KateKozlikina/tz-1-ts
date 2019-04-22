import { connect } from 'react-redux';
import { RouteComponentProps } from '@reach/router';
import { AppState } from '../reducers/index';
import Login from '../pages/Login';
import { login } from '../actions/userAction';
import { IUserIdentify } from '../models/user';

export interface loginProps extends RouteComponentProps {
  errorMsg: string,
  login: (user: IUserIdentify) => any,
}
const mapStateToProps = ( store: AppState ) => ({
  errorMsg: store.session.errorMsg,
});

const mapDispatchToProps = (dispatch: any) => ({
  login: (user: IUserIdentify) => dispatch(login(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);