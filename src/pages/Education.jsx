const customStyles = {
    rows: {
        style: {
            minHeight: '72px', // override the row height
        },
    },
    headCells: {
        style: {
            paddingLeft: '8px', // override the cell padding for head cells
            paddingRight: '8px',
        },
    },
    cells: {
        style: {
            paddingLeft: '8px', // override the cell padding for data cells
            paddingRight: '8px',
        },
    },
};

const columns = [
    {
        name: 'Education',
        selector: row => row.title,
        wrap:true,
        center: true
    },

    {
        name: 'Percentage',
        selector: row => row.percentage,
        wrap:true,
        center: true
    },
    {
        name: 'Month & Year',
        selector:row=>row.Year,
        wrap:true,
        center:true
    }
];

const data = [
    {
        id: 1,
        title: 'HSC',
        percentage: '77%',
        Year: 'February 2020'
    },
    {
        id: 2,
        title: 'SSC',
        percentage: '83%',
        Year: 'March 2018'
    }
    
]

export default function Education() {
    return (
        <>
        <div className='bg-education-container'>
            <div>
                <div className='education-title'>
                    <h1>Results</h1>
                </div>
            </div>
            <div className="education-table">
                <table id="College">
                    <tr>
                        <th>SEM V(Aggregate)</th>
                        <th>SEM V</th>
                        <th>SEM IV</th>
                        <th>SEM III</th>
                        <th>SEM II</th>
                        <th>SEM I</th>
                    </tr>
                    <tr>
                        <td>8.52</td>
                        <td>7.7</td>
                        <td>8.04</td>
                        <td>10</td>
                        <td>9.3</td>
                        <td>7.8</td>
                    </tr>
                </table>
            </div>
            <div className="education-table-2">
                <table id="school">
                    <tr>
                        <th>SSC</th>
                        <th>HSC</th>
                        <th>MHCET</th>
                    </tr>
                    <tr>
                        <td>83%</td>
                        <td>77%</td>
                        <td>93.7%</td>
                    </tr>
                </table>
            </div>
        </div>
        </>
    );
};