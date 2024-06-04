import { useState, useCallback } from 'react';

type FetchStatus = 'none' | 'loading' | 'hasData'

type BaseFetchResult = {
	status: FetchStatus
	error: string | null
	fetchData: () => Promise<void>
}

type HasDataFetchResult<T> = BaseFetchResult & {
	status: 'hasData'
	data: T
}

type NoDataFetchResult = BaseFetchResult & {
	status: 'none' | 'loading'
	data: undefined
}

type UseFetchResult<T> = HasDataFetchResult<T> | NoDataFetchResult;

const useFetch = <T, >(origin: string): UseFetchResult<T> => {
	const [status, setStatus] = useState<FetchStatus>('none');
	const [error, setError] = useState<string | null>(null);
	const [data, setData] = useState<T | undefined>(undefined);

	const fetchData = useCallback(async () => {
		setStatus('loading');
		setError(null);
		try {
			const response = await fetch(origin);
			if (!response.ok) {
				throw new Error(`Error: ${response.statusText}`);
			}
			const responseData = await response.json() as T;
			setData(responseData);
			setStatus(responseData && Object.keys(responseData).length > 0 ? 'hasData' : 'none');
		} catch (err) {
			setStatus('none');
			setError((err as { message: string }).message);
		}
	}, [origin]);

	if (status === 'hasData' && data) {
		return { status, error, data, fetchData };
	}

	return { status, error, data: undefined, fetchData } as NoDataFetchResult;
};

export default useFetch;
