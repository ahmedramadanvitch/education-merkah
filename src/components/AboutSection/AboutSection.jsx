// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import aboutImage from "../../assets/dros.jpg";
// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";
// import MainTitle from "../MainTitle/MainTitle";

// function AboutSection({ pages }) {
//   // const { id } = useParams();
//   const { title } = useParams();
//   const [pageData, setPageData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   console.log("pageData", pageData);
//   // console.log("id-Url", id);
//   // useEffect(() => {
//   //   axios
//   //     .get(`https://admin.dr-eissa.com/api/v1/pages/${id}`)
//   //     .then((response) => {
//   //       setPageData(response.data);
//   //       setLoading(false);
//   //     })
//   //     .catch((error) => {
//   //       setError(error);
//   //       setLoading(false);
//   //     });
//   // }, [id]);

//   useEffect(() => {
//     const page = pages.find((p) => p.title === title);
//     if (page) {
//       axios
//         .get(`https://admin.dr-eissa.com/api/v1/pages/${page.id}`)
//         .then((response) => {
//           setPageData(response.data);
//         })
//         .catch((error) => {
//           console.error("هناك خطأ في جلب بيانات الصفحة:", error);
//         });
//     }
//   }, [title, pages]);

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }
//   return (
//     <div className="flex flex-col min-h-screen">
//       {loading ? (
//         <Skeleton width={300} height={40} />
//       ) : (
//         <MainTitle head_text={pageData?.title} />
//       )}
//       <div className="bg-gray-50 p-1 md:p-10 my-3">
//         <p className="text-center text-gray-800 text-lg md:text-xl lg:text-2xl xl:text-3xl w-4/5 md:w-3/4 mx-auto leading-relaxed">
//           {loading ? <Skeleton count={5} /> : pageData?.content}
//         </p>
//       </div>
//     </div>
//   );
// }

// export default AboutSection;

// {
//   /* {loading ? (
//   <Skeleton width="100%" height={500} />
// ) : (
//   <div className="relative w-full h-[400px]">
//     <img
//       src={aboutImage}
//       alt="About"
//       className="object-cover w-full h-full"
//     />
//     <div className="absolute inset-0 bg-black bg-opacity-60"></div>
//     <div className="absolute inset-0 flex items-center justify-center text-white"></div>
//   </div>
// )} */
// }
// {
//   /* <h2 className="text-center text-2xl md:text-5xl font-bold w-[80%] md:w-[50%] mb-3 mx-auto text-primary my-7">
//   {loading ? <Skeleton width={300} height={40} /> : pageData?.title}
// </h2> */
// }

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import aboutImage from "../../assets/dros.jpg";
// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";
// import MainTitle from "../MainTitle/MainTitle";

// function AboutSection({ pages }) {
//   const { title } = useParams();
//   const [pageData, setPageData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const page = pages.find(
//       (p) => p.title.replace(/\s+/g, "-").toLowerCase() === title
//     );
//     if (page) {
//       axios
//         .get(`https://admin.dr-eissa.com/api/v1/pages/${page.id}`)
//         .then((response) => {
//           setPageData(response.data);
//           setLoading(false);
//         })
//         .catch((error) => {
//           setError(error);
//           setLoading(false);
//         });
//     } else {
//       setError(new Error("Page not found"));
//       setLoading(false);
//     }
//   }, [title, pages]);

//   if (loading) {
//     return (
//       <div className="flex flex-col min-h-screen">
//         <Skeleton width={300} height={40} />
//         <div className="bg-gray-50 p-1 md:p-10 my-3">
//           <Skeleton count={5} />
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <div className="flex flex-col min-h-screen">
//       <MainTitle head_text={pageData?.title} />
//       <div className="bg-gray-50 p-1 md:p-10 my-3">
//         <p className="text-center text-gray-800 text-lg md:text-xl lg:text-2xl xl:text-3xl w-4/5 md:w-3/4 mx-auto leading-relaxed">
//           {pageData?.content}
//         </p>
//       </div>
//     </div>
//   );
// }

// export default AboutSection;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import MainTitle from "../MainTitle/MainTitle";

function AboutSection() {
  const { title } = useParams(); // استخدم useParams لاستخراج عنوان الصفحة من الرابط
  const [pageData, setPageData] = useState(null); // حالة لتخزين بيانات الصفحة
  const [loading, setLoading] = useState(true); // حالة لتتبع تحميل البيانات
  const [error, setError] = useState(null); // حالة لتخزين أي خطأ يحدث أثناء جلب البيانات

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        // جلب قائمة الصفحات من الـ API
        const response = await axios.get(
          "https://admin.dr-eissa.com/api/v1/pages"
        );
        const pages = response.data;

        // تحويل العنوان في الرابط إلى صيغة يمكن مقارنتها مع العناوين في الـ API
        const formattedTitle = title.replace(/-/g, " ");
        const page = pages.find(
          (p) => p.title.toLowerCase() === formattedTitle.toLowerCase()
        );

        if (page) {
          // إذا تم العثور على الصفحة، جلب تفاصيل الصفحة باستخدام الـ ID
          const pageResponse = await axios.get(
            `https://admin.dr-eissa.com/api/v1/pages/${page.id}`
          );
          setPageData(pageResponse.data); // تحديث حالة pageData ببيانات الصفحة
        } else {
          // إذا لم يتم العثور على الصفحة، تعيين حالة الخطأ
          setError(new Error("Page not found"));
        }
      } catch (error) {
        // إذا حدث خطأ أثناء جلب البيانات، تعيين حالة الخطأ
        setError(error);
      } finally {
        // عند انتهاء جلب البيانات، تعيين حالة loading إلى false
        setLoading(false);
      }
    };

    fetchPageData(); // استدعاء دالة جلب البيانات عند تحميل المكون
  }, [title]); // تنفيذ هذا التأثير عند تغير قيمة title

  if (loading) {
    // إذا كانت البيانات لا تزال تُحمل، عرض مكون Skeleton لتوضيح تحميل البيانات
    return (
      <div className="flex flex-col min-h-screen">
        <Skeleton width={300} height={40} className="mx-auto block w-56 my-4" />
        <div className="bg-gray-50 p-1 md:p-10 my-3">
          <Skeleton count={5} />
        </div>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    // عرض بيانات الصفحة إذا تم تحميلها بنجاح
    <div className="flex flex-col  min-h-screen">
      <div className="mt-10" data-aos="fade-up" data-aos-duration="2000">
        <MainTitle head_text={pageData?.title} />
      </div>
      <div className=" p-1 md:p-10 my-3">
        <p
          className="text-center text-gray-700 text-lg md:text-xl lg:text-2xl xl:text-3xl w-4/5 md:w-3/4 mx-auto leading-loose"
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          {pageData?.content} {/* عرض محتوى الصفحة */}
        </p>
      </div>
    </div>
  );
}

export default AboutSection;
