import { Route, Routes } from "react-router-dom";
import IndexPage from "./pages/IndexPage/IndexPage";
import WritePage from "./pages/WritePage/WritePage";
import { Global } from "@emotion/react";
import { global } from "./styles/global";
import MainLayout from "./components/MainLayout/MainLayout";
import ListPage from "./pages/ListPage/ListPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import SigninPage from "./pages/SigninPage/SigninPage";

function App() {

  return (
    <>
      <Global styles={global} /> 

      <MainLayout>
        <Routes>
          <Route path="/" element={ <IndexPage /> } />
          <Route path="/write" element={ <WritePage /> } />
          <Route path="/list" element={ <ListPage /> } />
          <Route path="/signup" element={ <SignupPage /> } />
          <Route path="/signin" element={ <SigninPage /> } />
        </Routes>
      </MainLayout>
    </>
  );
}

export default App;