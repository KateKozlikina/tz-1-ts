import { connect } from 'react-redux';
import { RouteComponentProps } from '@reach/router';
import { AppState } from '../reducers/index';
import News from '../pages/News';
import { getNews } from '../actions/newsAction';
import { INewsItem } from '../models/news';

export interface NewsProps extends RouteComponentProps {
  news: INewsItem[] | null,
  getNews: () => any,
}
const mapStateToProps = ( store: AppState ) => ({
  news: store.news.data,
});

const mapDispatchToProps = (dispatch: any) => ({
  getNews: () => dispatch(getNews()),
})

export default connect(mapStateToProps, mapDispatchToProps)(News);