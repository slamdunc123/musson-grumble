import React from 'react';
import Pagination from 'react-js-pagination';
import './paginate.scss';

const Paginate = (props) => {
	const {
		activePage,
		itemsCountPerPage,
		totalItemsCount,
		pageRangeDisplayed,
		handlePageChange,
		prevPageText,
		nextPageText,
		firstPageText,
		lastPageText,
	} = props;
	return (
		<div>
			<Pagination
				activePage={activePage}
				itemsCountPerPage={itemsCountPerPage}
				totalItemsCount={totalItemsCount}
				pageRangeDisplayed={pageRangeDisplayed}
				onChange={handlePageChange}
				prevPageText={prevPageText}
				nextPageText={nextPageText}
				firstPageText={firstPageText}
				lastPageText={lastPageText}
			/>
		</div>
	);
};

export default Paginate;
