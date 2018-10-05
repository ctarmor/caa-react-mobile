/**
 * Asynchronously loads the component
 * https: //github.com/jamiebuilds/react-loadable
 */
import Loadable from 'react-loadable';

import LoadingIndicator from '../../components/LoadingIndicator';

const LoadableFeeds = Loadable({
    loader: () => import('./feeds'),
    loading: LoadingIndicator,
});

export default LoadableFeeds;




