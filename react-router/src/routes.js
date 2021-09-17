const routes = [
  {
    path: '/',
    redirect: '/quotes',
    component: '',
    exact: true,
  },
  {
    path: '/quotes',
    component: 'AllQuotes',
    exact: true,
  },
  {
    path: '/quotes/:quoteId',
    component: 'QuoteDetail',
  },
  {
    path: '/new-quote',
    component: 'NewQuote',
    exact: true,
  },
];

export default routes;
