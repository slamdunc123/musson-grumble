import React from 'react';

const findAndRepaceText = (string) => {
	var newString = string.split('<br>').map((item, index) => {
		return (
			<div key={index}>
				{item}
				<br />
			</div>
		);
	});
	return newString;
};

export default findAndRepaceText;
