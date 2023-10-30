import React from "react";
import { useTable } from "react-table";
import styled from "styled-components";

const Table = styled.table`
	width: 100%;
	border-collapse: collapse;
	margin: 20px 0;
	padding: 20px;
`;

const Th = styled.th`
	background-color: #ffffff;
	padding: 8px;
	text-align: left;
	color: #a8a8a8;
`;

const Td = styled.td`
	padding: 8px;
`;

function TabelaDeDados({ columns, data }) {
	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
		useTable({
			columns,
			data
		});

	return (
		<Table {...getTableProps()}>
			<thead>
				{headerGroups.map((headerGroup) => (
					<tr {...headerGroup.getHeaderGroupProps()}>
						{headerGroup.headers.map((column) => (
							<Th {...column.getHeaderProps()}>
								{column.render("Header")}
							</Th>
						))}
					</tr>
				))}
			</thead>
			<tbody {...getTableBodyProps()}>
				{rows.map((row, index) => {
					prepareRow(row);
					return (
						<tr
							{...row.getRowProps()}
							style={{
								background:
									index % 2 === 0 ? "white" : "#f2f2f2"
							}}
						>
							{row.cells.map((cell) => {
								return (
									<Td {...cell.getCellProps()}>
										{cell.render("Cell")}
									</Td>
								);
							})}
						</tr>
					);
				})}
			</tbody>
		</Table>
	);
}

export default TabelaDeDados;
