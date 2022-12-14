import React from 'react';
import ReactDOM from 'react-dom/client';
import 'styles/tailwind.css';
import { RouterProvider } from 'react-router-dom';
import { router } from 'routes/router';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { QueryClientProvider } from '@tanstack/react-query';
import { initializeQueryClient } from 'lib/queryClient';

const queryClient = initializeQueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<ReactQueryDevtools initialIsOpen={false} />
			<RouterProvider router={router} />
		</QueryClientProvider>
	</React.StrictMode>,
);
