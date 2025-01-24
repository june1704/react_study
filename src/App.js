import { Route, Routes, useLocation } from "react-router-dom";
import IndexPage from "./pages/IndexPage/IndexPage";
import WritePage from "./pages/WritePage/WritePage";
import { Global } from "@emotion/react";
import { global } from "./styles/global";
import MainLayout from "./components/MainLayout/MainLayout";
import ListPage from "./pages/ListPage/ListPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import SigninPage from "./pages/SigninPage/SigninPage";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { accessTokenAtomState } from "./atoms/authAtom";
import { useQuery } from "react-query";

function App() {
  const [ accessToken, setAccessToken ] = useRecoilState(accessTokenAtomState);

  const authenticatedUser = async () => {
    return await axios.get("http://localhost:8080/servlet_study_war/api/authenticated", {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("AccessToken")}`,
      }
    });
  }

  const authenticatedUserQuery  = useQuery( // 1번
    ["authenticatedUserQuery"], // 키값
    authenticatedUser,
    {
      retry: 0, // 요청날렸을 때 실패하면 다시 요청날림
      refetchOnWindowFocus: false,
      enabled: !!accessToken, 
    }
  );

  // console.log(authenticatedUserQuery.isLoading);

  return (
    <>
      <Global styles={global} /> 

      {
        authenticatedUserQuery.isLoading // 4번 로딩중이면 true, 로딩이 끝나면 false
        ?
         <></> // 화면 안 보임
        :
      <MainLayout>
        <Routes>
          <Route path="/" element={ <IndexPage /> } />
          <Route path="/write" element={ <WritePage /> } />
          <Route path="/list" element={ <ListPage /> } />
          <Route path="/signup" element={ <SignupPage /> } />
          <Route path="/signin" element={ <SigninPage /> } />
        </Routes>
      </MainLayout>
      }
    </>
  );
}

export default App;