import { getSearchParams } from 'helpers/searchParams';
import { axiosInstance } from 'lib/axiosInstance';
import { ICollectionResponse } from 'types/collection';
import { ISearchParams } from 'types/search';

const searchByQuery = async (searchParams: ISearchParams, nextPage?: string) => {
	const params = getSearchParams(searchParams);
	const { data } = await axiosInstance.get<ICollectionResponse>(nextPage ?? '/search', {
		...(!nextPage && {
			params: {
				media_type: 'image',
				...params,
			},
		}),
	});
	return data;
};

export { searchByQuery };
