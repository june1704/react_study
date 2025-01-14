function DataListLayout({ children }) {

    console.log(children);

    const liList = [
        <li>5번 리스트</li>,
        <li>6번 리스트</li>,
        <li>7번 리스트</li>,
        <li>8번 리스트</li>,
    ];

    return <ul>
        {children}
        {liList}
        {
            children.map((li, index) =>
                <li key={index}>{"1" + li.props.children}</li>
            )   
        }
        {
            liList.map((li, index) =>
                <li key={index}>{"2" + li.props.children}</li>
            )
        }
    </ul>
}

export default DataListLayout;