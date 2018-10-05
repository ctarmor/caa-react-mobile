/**
 * Asynchronously loads the component
 * https: //github.com/jamiebuilds/react-loadable
 */
import Loadable from 'react-loadable';
import LoadingIndicator from '../../components/LoadingIndicator';

const LoadableHome = Loadable({
    loader: () =>
        import('./home'),
    loading: LoadingIndicator,
});

export default LoadableHome;
