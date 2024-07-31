import { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { ConfigContext } from "../../Context/ConfigeApi";
import loginImg from "../../assets/wired-lineal-1725-exit-sign.gif";
import axios from "axios";

function Navbar() {
  const { apiData, isLoading, error, change, SetChanges } =
    useContext(ConfigContext);

  const [bgOpacity, setBgOpacity] = useState(0);
  const [padding, setPadding] = useState("py-3");
  const [linkColor, setLinkColor] = useState("text-gray-600");
  const [menuOpen, setMenuOpen] = useState(false);
  const [pages, setPages] = useState([]); // حالة لتخزين العناوين

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setBgOpacity(0.8);
        setPadding("py-4");
        setLinkColor("text-white");
      } else {
        setBgOpacity(0);
        setPadding("py-3");
        setLinkColor("text-gray-600");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    axios
      .get("https://admin.dr-eissa.com/api/v1/pages")
      .then((response) => {
        setPages(response.data);
        // console.log("response.data-pages", response.data);
      })
      .catch((error) => {
        console.error("هناك خطأ في جلب البيانات:", error);
      });
  }, []);

  const handleNavLinkClick = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  if (error) return <div>Error: {error}</div>;

  return (
    <div
      className={`sticky top-0 z-50 w-full text-primary text-xl font-medium transition-all duration-1000 ${padding} ${
        menuOpen ? "" : "shadow-md"
      }`}
      style={{
        backgroundColor: `rgba(0, 0, 0, ${bgOpacity})`,
        transition: "background-color 0.3s ease-in, padding 0.3s ease-in",
      }}
    >
      <div className="container mx-auto flex justify-between items-center px-4 lg:px-8 max-w-screen-xl">
        {/* اسم الموقع على اليمين */}
        <div className="order-1 md:order-none flex items-center">
          {isLoading ? (
            <Skeleton circle={true} height={56} width={56} />
          ) : (
            apiData?.image_url && (
              <img
                src={`${apiData?.image_url}/${apiData?.logo}`}
                className="w-16 h-fit object-cover ml-4"
                alt="logo"
              />
            )
          )}
        </div>

        {/* زر القائمة في الشاشات الصغيرة */}
        <div
          className="text-primary text-3xl md:hidden order-3"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* القوائم في المنتصف للشاشات الكبيرة وفوق */}
        <ul
          className={`fixed top-0 left-0 w-full h-full bg-black flex flex-col items-center justify-center transition-transform duration-300 transform ${
            menuOpen ? "translate-y-0" : "-translate-y-full"
          } md:flex-row md:static md:w-auto md:h-auto md:bg-transparent md:transform-none md:p-0 md:flex md:gap-4 lg:gap-10 order-2 md:order-none`}
        >
          {menuOpen && (
            <div
              className="absolute top-4 left-4 text-3xl text-white md:hidden"
              onClick={() => setMenuOpen(false)}
            >
              <FaTimes />
            </div>
          )}
          {sessionStorage.getItem("account_id") !== null && change ? (
            // خروج
            <li className="mt-4 md:mt-0">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-primary border-b-2 pb-2 border-primary text-[19px] font-medium"
                    : `${linkColor} hover:text-gray-400 transition-colors text-[19px]`
                }
                onClick={() => {
                  handleNavLinkClick();
                  setMenuOpen(false);
                  sessionStorage.clear();
                  SetChanges((curr) => !curr);
                }}
              >
                خروج
              </NavLink>
            </li>
          ) : (
            <>
              {/* الرئيسيه */}
              <li className="mt-10 md:mt-0">
                {isLoading ? (
                  <Skeleton width={100} height={24} />
                ) : (
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "text-primary border-b-2 pb-2 border-primary text-[19px] font-medium"
                        : `${linkColor} hover:text-gray-400 transition-colors text-[19px]`
                    }
                    onClick={() => {
                      handleNavLinkClick();
                      setMenuOpen(false);
                    }}
                  >
                    الــرئــيــســيــة
                  </NavLink>
                )}
              </li>
              {/* وصف مستويات المقياس */}
              <li className="mt-4 md:mt-0">
                {isLoading ? (
                  <Skeleton width={150} height={24} />
                ) : (
                  <NavLink
                    to="/mostawa"
                    className={({ isActive }) =>
                      isActive
                        ? "text-primary border-b-2 pb-2 border-primary text-[19px] font-medium"
                        : `${linkColor} hover:text-gray-400 transition-colors text-[19px]`
                    }
                    onClick={() => {
                      handleNavLinkClick();
                      setMenuOpen(false);
                    }}
                  >
                    وصف مستويات المقياس
                  </NavLink>
                )}
              </li>
              {/* عن الموقع
              <li className="mt-4 md:mt-0">
                {isLoading ? (
                  <Skeleton width={150} height={24} />
                ) : (
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive
                        ? "text-primary border-b-2 pb-2 border-primary text-[19px] font-medium"
                        : `${linkColor} hover:text-gray-400 transition-colors text-[19px]`
                    }
                    onClick={() => {
                      handleNavLinkClick();
                      setMenuOpen(false);
                    }}
                  >
                    عن الموقع
                  </NavLink>
                )}
              </li> */}
              {/* عرض العناوين المسترجعة من الـ API */}
              {pages.map((page) => (
                <li key={page.id} className="mt-4 md:mt-0">
                  {isLoading ? (
                    <Skeleton width={150} height={24} />
                  ) : (
                    <NavLink
                      to={`/${page.title.replace(/\s+/g, "-").toLowerCase()}`} // تحويل العنوان إلى رابط
                      // to={`/${page.id}`}
                      className={({ isActive }) =>
                        isActive
                          ? "text-primary border-b-2 pb-2 border-primary text-[19px] font-medium"
                          : `${linkColor} hover:text-gray-400 transition-colors text-[19px]`
                      }
                      onClick={() => {
                        handleNavLinkClick();
                        setMenuOpen(false);
                      }}
                    >
                      {page.title}
                    </NavLink>
                  )}
                </li>
              ))}
              {/* دخول */}
              <li className="mt-4 md:mt-0">
                {isLoading ? (
                  <Skeleton width={150} height={24} />
                ) : (
                  <a href={apiData?.admin_url}>
                    <img
                      src={loginImg}
                      alt="Login-Image"
                      className="h-[45px]"
                    />
                  </a>
                )}
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
