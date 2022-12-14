import { Home } from 'components/pages/Home';
import { Show } from 'components/pages/Show';
import { Layout } from 'components/ui/Layout';
import { NotFound } from 'components/ui/NotFound';
import { createBrowserRouter } from 'react-router-dom';
import { showLoader } from './loaders/showLoader';
import { initializeQueryClient } from 'lib/queryClient';

const queryClient = initializeQueryClient();

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <NotFound />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/show/:nasa_id',
				element: <Show />,
				loader: showLoader(queryClient),
			},
		],
	},
]);

export { router };
