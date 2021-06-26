import React from 'react';

interface Props {
	name: string;
}
export default function GitTestFile({ name }: Props) {
	return (
		<div>
			<p>
				git file test, its not working properly <h1>Developer: {name}</h1>
			</p>
		</div>
	);
}
