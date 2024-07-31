import "./App.css";
import { useContext, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayOut from "./components/LayOut/LayOut";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import TalematAlMekyas from "./components/TalematAlMekyas/TalematAlMekyas";
import Exam from "./components/Exam/Exam";
import MostawaSection from "./components/MostawaSection/MostawaSection";
import { ConfigContext } from "./Context/ConfigeApi";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import { Helmet } from "react-helmet";
import Result from "./components/Result/Result";
import NotFound from "./pages/404/404";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import AboutSection from "./components/AboutSection/AboutSection";
import axios from "axios";

function App() {
  // const [pages, setPages] = useState([]); // حالة لتخزين العناوين
  const { apiData, loading } = useContext(ConfigContext);
  if (loading) {
    return <LoadingScreen />;
  }

  // useEffect(() => {
  //   axios
  //     .get("https://admin.dr-eissa.com/api/v1/pages")
  //     .then((response) => {
  //       setPages(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("هناك خطأ في جلب البيانات:", error);
  //     });
  // }, []);
  // console.log("pages", pages);

  return (
    <>
      <Helmet>
        <title>{apiData?.site_name}</title>
        <link
          rel="icon"
          type="image/png"
          href={`${apiData?.image_url}/${apiData?.logo}`}
        />
      </Helmet>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayOut />}>
            <Route index element={<Home />} />
            <Route path="register" element={<Register />} />
            <Route path="talemat-mekyas" element={<TalematAlMekyas />} />
            <Route path="mostawa" element={<MostawaSection />} />
            {/* <Route path="/:id" element={<AboutSection />} /> */}
            <Route path="/:title" element={<AboutSection />} />
            <Route
              path="exam"
              element={
                <ProtectedRoute>
                  <Exam />
                </ProtectedRoute>
              }
            />
            <Route
              path="result"
              element={
                <ProtectedRoute>
                  <Result />
                </ProtectedRoute>
              }
            />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
