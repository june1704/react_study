function DataListLayout2( { dataList } ) {
    return <ul>
        {
            dataList.map((a, index) =>
                <li key={index}>{a}</li>
            )
        }
    </ul>
}

export default DataListLayout2;