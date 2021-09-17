import { useParams, useRouteMatch, Route, Link } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Max', text: 'Learning React is fun!' },
  { id: 'q2', author: 'Maximilian', text: 'Learning React is great!' },
];
const QuoteDetail = () => {
  const params = useParams();
  const match = useRouteMatch();

  const quote = DUMMY_QUOTES.find((q) => q.id === params.quoteId);
  return (
    <>
      <HighlightedQuote
        text={quote.text}
        author={quote.author}
      ></HighlightedQuote>
      <Link to={`${match.url}/comment`}>Comment</Link>
      <Route path={`${match.path}/comment`}>
        <Comments></Comments>
      </Route>
    </>
  );
};

export default QuoteDetail;
