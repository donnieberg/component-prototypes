import {DataTable, DataTableColumn, DataTableCell} from '@salesforce/design-system-react';

const CustomDataTableCell = ({ children, ...props }) => (
	<DataTableCell {...props}>
		<a
			href="#"
			onClick={(event) => {
				event.preventDefault();
			}}
		>
			{children}
		</a>
	</DataTableCell>
);

const columns = [
	<DataTableColumn
		key="opportunity"
		label="Opportunity Name"
		property="opportunityName"
	>
		<CustomDataTableCell />
	</DataTableColumn>,

	<DataTableColumn
		key="account-name"
		label="Account Name"
		property="accountName"
	/>,

	<DataTableColumn key="close-date" label="Close Date" property="closeDate" />,

	<DataTableColumn key="stage" label="Stage" property="stage" />,

	<DataTableColumn key="confidence" label="Confidence" property="confidence" />,

	<DataTableColumn key="amount" label="Amount" property="amount" />,

	<DataTableColumn key="contact" label="Contact" property="contact">
		<CustomDataTableCell />
	</DataTableColumn>,
];

const DatatableExample = ({ data }) => {
    return (
        <div className="mvm">
            <DataTable items={data} id="DataTableExample-1-default">
                {columns}
            </DataTable>
        </div>
    );
}

export default DatatableExample;
