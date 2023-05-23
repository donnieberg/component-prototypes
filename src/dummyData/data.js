const accounts = [
    {
        id: '8IKZHZZV80',
        type: 'accounts',
        opportunityName: 'Cloudhub',
        accountName: 'Cloudhub',
        closeDate: '4/14/2015',
        stage: 'Prospecting',
        confidence: '20%',
        amount: '$25k',
        contact: 'jrogers@cloudhub.com',
    },
    {
        id: '5GJOOOPWU7',
        type: 'accounts',
        opportunityName: 'Cloudhub + Anypoint Connectors',
        accountName: 'Cloudhub',
        closeDate: '4/14/2015',
        stage: 'Prospecting',
        confidence: '20%',
        amount: '$25k',
        contact: 'jrogers@cloudhub.com',
    },
    {
        id: '8IKZHZZV81',
        type: 'accounts',
        opportunityName: 'Cloudhub',
        accountName: 'Cloudhub',
        closeDate: '4/14/2015',
        stage: 'Prospecting',
        confidence: '20%',
        amount: '$25k',
        contact: 'jrogers@cloudhub.com',
    },
];

const cases = [
    {
        id: '8IKZHZZV80',
        type: 'cases',
        opportunityName: 'High Priority',
        accountName: 'Top Customer',
        closeDate: '4/14/2023',
        stage: 'Prospecting',
        confidence: '20%',
        amount: '$25k',
        contact: 'jrogers@cloudhub.com',
    },
    {
        id: '5GJOOOPWU7',
        type: 'cases',
        opportunityName: 'High Priority',
        accountName: 'Amazon',
        closeDate: '6/7/23',
        stage: 'Prospecting',
        confidence: '20%',
        amount: '$25k',
        contact: 'jrogers@cloudhub.com',
    },
    {
        id: '8IKZHZZV81',
        type: 'cases',
        opportunityName: 'Medium Priority',
        accountName: 'Buzzfeed',
        closeDate: '5/24/2023',
        stage: 'Prospecting',
        confidence: '20%',
        amount: '$25k',
        contact: 'jrogers@cloudhub.com',
    },
    {
        id: '5GJOOOPWU7',
        type: 'cases',
        opportunityName: 'High Priority',
        accountName: 'Amazon',
        closeDate: '6/7/23',
        stage: 'Prospecting',
        confidence: '20%',
        amount: '$25k',
        contact: 'jrogers@cloudhub.com',
    },
];

const companyDetails = [
    { id: 'details-1', label: 'Last Updated', value: 'May 21, 2023 at 2:30pm', readOnly: true },
    { id: 'details-2', label: 'Updated by', value: 'Darnell Johnson', readOnly: true  },
    { id: 'details-3', label: 'Company ID', value: 'GwIG2803-NeWI7391', disabled: true  },
    { id: 'details-4', label: 'Company Name', value: 'Roe Construction', },
    { id: 'details-5', label: 'CEO', value: 'Tiana Jones' },
    { id: 'details-6', label: 'Address', value: '135 Main Street, Chicago, IL 60185' },
    { id: 'details-7', label: 'Phone', value: '630-356-8495' },
    { id: 'details-8', label: 'Email', value: 'info@roe-construction.com' },
];

const companyHeader = {
    label: 'Roe Construction',
    imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.9qA5rhWrP9BLNjO_I2eikwD5D6%26pid%3DApi&f=1&ipt=726272091737fdada1fb8539e90db340d015b588c45fe9a4010c17da96fc030d&ipo=images',
    subtitle1: 'B2B Company',
    subtitle2: "5,000-10,000 employees",
};

const favorites = [
    {
        id: '5GJOOOPWU7',
        type: 'favorites',
        opportunityName: 'Favorite 1',
        accountName: 'Amazon',
        closeDate: '6/7/23',
        stage: 'Prospecting',
        confidence: '20%',
        amount: '$25k',
        contact: 'jrogers@cloudhub.com',
    },
    {
        id: '5GJOOOPWU7',
        type: 'favorites',
        opportunityName: 'Favorite 2',
        accountName: 'Amazon',
        closeDate: '6/7/23',
        stage: 'Prospecting',
        confidence: '20%',
        amount: '$25k',
        contact: 'jrogers@cloudhub.com',
    },
];

const navItems = [
    { label: 'Home', },
    { label: 'Chatter', },
    { label: 'Accounts', },
    { label: 'Opportunities', },
    { label: 'Users', },
];

const news = [
    { id: 'news-1', title: 'Roe Construction (RCLT) up 2% since Q2', url: 'https://www.wsj.com/', source: 'Wall Street Journal', timestamp: 'Monday, May 22nd 2:33pm EST', content: 'Excellent news for the end of Q2 for local business, Roe Construction. They surprised Wall Street with higher than expected earnings, and grew their revenue by 10%...' },
    { id: 'news-2', title: 'Higher than expected Q2 Returns for Roe Construction', url: 'https://www.nytimes.com/', source: 'New York Times', timestamp: 'Tuesday, May 23rd 9:00am EST', content: 'Invesors were super happy this morning with better than expected Q2 results from Roe Construction. Things are turning around for the Chicago based...' },
    { id: 'news-3', title: 'Roe Construction spends 5M on Commercial', url: 'https://www.buzzfeed.com/', source: 'Buzzfeed', timestamp: 'Tuesday, May 23rd 11:03am EST', content: 'The Behive is swarming with this news. Roe Construction hires Beyonce and Jay-Z for biggest commercial yet...' },
    { id: 'news-4', title: 'Top 5 Undervalued Stocks to Buy Now', url: 'https://www.wsj.com/', source: 'Wall Street Journal', timestamp: 'Wednesday, May 24th 8:00am EST', content: 'Markets are up overall but a handful of stocks have surpassed their peers. We have the latest on which stocks...' },
];

const opptys = [
    {
        id: '5GJOOOPWU7',
        type: 'opptys',
        opportunityName: 'Databricks',
        accountName: 'Amazon',
        closeDate: '6/7/23',
        stage: 'Prospecting',
        confidence: '20%',
        amount: '$25k',
        contact: 'jrogers@cloudhub.com',
    },
    {
        id: '5GJOOOPWU7',
        type: 'opptys',
        opportunityName: 'HMI stocks',
        accountName: 'Microsoft',
        closeDate: '6/7/23',
        stage: 'Prospecting',
        confidence: '20%',
        amount: '$25k',
        contact: 'jrogers@cloudhub.com',
    },
    {
        id: '5GJOOOPWU7',
        type: 'opptys',
        opportunityName: 'Google',
        accountName: 'Campus One',
        closeDate: '6/7/23',
        stage: 'Prospecting',
        confidence: '20%',
        amount: '$25k',
        contact: 'jrogers@cloudhub.com',
    },
    {
        id: '5GJOOOPWU7',
        type: 'opptys',
        opportunityName: 'Netflix',
        accountName: 'Lower campus Two',
        closeDate: '6/7/23',
        stage: 'Prospecting',
        confidence: '20%',
        amount: '$25k',
        contact: 'jrogers@cloudhub.com',
    },
];

const pills = [
    { id: 'pill0', title: 'Darrell Johnson'},
    { id: 'pill1', title: 'Amy Weissman'},
    { id: 'pill2', title: 'Ana Ortega'},
    { id: 'pill3', title: 'Jamir Crowley'},
    { id: 'pill4', title: 'John Goodman'},
    { id: 'pill5', title: 'Tiffany Tsang'},
    { id: 'pill6', title: 'Michael Kwon'},
];

const reports = [
    {
        id: '5GJOOOPWU7',
        type: 'reports',
        opportunityName: 'Top 100 Salespeople in NW region',
        accountName: 'Roe Construction',
        closeDate: '6/7/23',
        stage: 'Prospecting',
        confidence: '20%',
        amount: '$25k',
        contact: 'jrogers@cloudhub.com',
    },
    {
        id: '5GJOOOPWU7',
        type: 'reports',
        opportunityName: 'Top Opporunities for small mid market',
        accountName: 'Campus One',
        closeDate: '6/7/23',
        stage: 'Prospecting',
        confidence: '20%',
        amount: '$25k',
        contact: 'jrogers@cloudhub.com',
    },
    {
        id: '5GJOOOPWU7',
        type: 'reports',
        opportunityName: 'Top 50 cases to cause red alert',
        accountName: 'Lower campus Two',
        closeDate: '6/7/23',
        stage: 'Prospecting',
        confidence: '20%',
        amount: '$25k',
        contact: 'jrogers@cloudhub.com',
    },
];



export default { 
    accounts, 
    cases, 
    companyDetails, 
    companyHeader, 
    favorites, 
    navItems,
    news,
    opptys, 
    pills,
    reports, 
};

