import Hello from "./Hello/Hello";
import Hello2 from "./Hello2/Hello2";
import Hello3 from "./hello3/Hello3";
import Hello4 from "./Hello4/Hello4";
import DataListLayout from "./props/DataListLayout/DataListLayout";
import DataListLayout2 from "./props/DataListLayout2/DataListLayout2";
import TextInput from "./props/TextInput/TextInput";

function App() {
    return (
        <>
            <Hello />
            <Hello2 />
            <Hello3 />
            <Hello4 />
            <TextInput id="name" text="이름" />
            <TextInput id="age" text="나이" />
            <TextInput id="address" text="주소" />
            <TextInput id="gender" text="성별" />
            <DataListLayout>
                <li>1번 리스트</li>
                <li>2번 리스트</li>
                <li>3번 리스트</li>
                <li>4번 리스트</li>
            </DataListLayout>
            <DataListLayout2 dataList={ [ 1, 2, 3, 4, 5 ] } />

        </>
    )
}

export default App;