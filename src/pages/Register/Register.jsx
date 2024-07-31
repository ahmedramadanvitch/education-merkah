import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ConfigContext } from "../../Context/ConfigeApi";
import Skeleton from "react-loading-skeleton";

function Register() {
  const [nationalities, setNationalities] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedNationality, setSelectedNationality] = useState("");
  const [loading, setLoading] = useState(false); // حالة التحميل
  const { change, SetChanges, apiData, isLoading } = useContext(ConfigContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNationalities = async () => {
      try {
        const response = await axios.get(
          "https://admin.dr-eissa.com/api/v1/get-countries"
        );
        const countries = response.data;
        setNationalities(countries);
      } catch (error) {
        console.error("خطأ في جلب الجنسيات:", error);
      }
    };

    fetchNationalities();
  }, []);

  useEffect(() => {
    if (selectedNationality) {
      const fetchCities = async () => {
        try {
          const response = await axios.get(
            `https://admin.dr-eissa.com/api/v1/get-states/${selectedNationality}`
          );
          const citiesData = response.data;
          setCities(citiesData);
        } catch (error) {
          console.error("خطأ في جلب المدن:", error);
        }
      };

      fetchCities();
    }
  }, [selectedNationality]);

  const validationSchema = Yup.object({
    name: Yup.string().required("الاسم مطلوب"),
    phone: Yup.string().required("رقم الجوال مطلوب"),
    gender: Yup.string().required("الجنس مطلوب"),
    status: Yup.string().required("الحالة مطلوبة"),
    age: Yup.string().required("العمر مطلوب"),
    nationality: Yup.string().required("الجنسية مطلوبة"),
    city: Yup.string().required("المدينة مطلوبة"),
    education: Yup.string().required("المرحلة الدراسية مطلوبة"),
  });

  const handleSubmit = async (values) => {
    // تحويل القيم إلى الصيغة المطلوبة
    const formattedData = {
      name: values.name,
      phone: values.phone,
      gender: values.gender,
      age: values.age,
      country_id: values.nationality,
      state_id: values.city,
      educational_level: values.education,
      employment_status: values.status,
    };
    // console.log("formattedData", formattedData);
    setLoading(true); // تعيين حالة التحميل إلى true

    try {
      const response = await axios.post(
        "https://admin.dr-eissa.com/api/v1/store-profile",
        formattedData
      );

      sessionStorage.setItem("account_id", response.data.id); // تخزين الـ id في sessionStorage
      SetChanges(true);
      navigate("/talemat-mekyas");
      window.scrollTo(0, 0);
    } catch (error) {
      console.error("Error submitting data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-10 flex justify-center items-center min-h-screen bg-gray-200 px-2">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-3xl">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-primary">
            البيانات الشخصية
          </h2>
          {isLoading ? (
            <Skeleton circle={true} height={56} width={56} />
          ) : (
            apiData?.image_url && (
              <img
                src={`${apiData?.image_url}/${apiData?.logo}`}
                className="w-16 h-fit object-cover mr-4"
                alt="logo"
              />
            )
          )}
        </div>
        <Formik
          initialValues={{
            name: "",
            phone: "",
            gender: "",
            status: "",
            age: "",
            nationality: "",
            city: "",
            education: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue }) => (
            <Form>
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <div className="w-full md:w-1/2">
                  <label
                    className="block text-HoverPrimary mb-1"
                    htmlFor="name"
                  >
                    <i className="fa-solid text-primary fa-user mx-2"></i>
                    الاسم:
                  </label>
                  <Field
                    className="w-full p-2 border border-gray-300 rounded"
                    type="text"
                    id="name"
                    name="name"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <label
                    className="block text-HoverPrimary mb-1"
                    htmlFor="phone"
                  >
                    <i className="fa-solid text-primary fa-phone mx-2"></i>
                    رقم الجوال:
                  </label>
                  <Field
                    className="w-full p-2 border border-gray-300 rounded"
                    type="text"
                    id="phone"
                    name="phone"
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <div className="w-full md:w-1/2">
                  <label className="block text-HoverPrimary mb-1">
                    <i className="fa-solid text-primary fa-person-half-dress mx-2 text-xl"></i>
                    الجنس:
                  </label>
                  <div className="flex items-center gap-4">
                    <label className="flex items-center">
                      <Field
                        type="radio"
                        name="gender"
                        value="male"
                        className="mr-2 ml-1 mt-2"
                      />
                      ذكر
                    </label>
                    <label className="flex items-center">
                      <Field
                        type="radio"
                        name="gender"
                        value="female"
                        className="mr-2 mt-2 ml-1"
                      />
                      أنثى
                    </label>
                  </div>
                  <ErrorMessage
                    name="gender"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <label className="block text-HoverPrimary mb-1">
                    <i className="fa-solid text-primary fa-graduation-cap mx-2"></i>
                    الحالة:
                  </label>
                  <div className="flex items-center gap-4">
                    <label className="flex items-center">
                      <Field
                        type="radio"
                        name="status"
                        value="طالب"
                        className="mr-2 mt-2 ml-1"
                      />
                      طالب
                    </label>
                    <label className="flex items-center">
                      <Field
                        type="radio"
                        name="status"
                        value="غير ذلك"
                        className="mr-2 mt-2 ml-1"
                      />
                      غير ذلك
                    </label>
                  </div>
                  <ErrorMessage
                    name="status"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-HoverPrimary mb-1" htmlFor="age">
                  <i className="fa-brands fa-magento mx-2"></i>
                  العمر:
                </label>
                <Field
                  className="w-full p-2 border border-gray-300 rounded"
                  type="text"
                  id="age"
                  name="age"
                />
                <ErrorMessage
                  name="age"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <div className="w-full md:w-1/2">
                  <label
                    className="block text-HoverPrimary mb-1"
                    htmlFor="nationality"
                  >
                    <i className="fa-solid text-primary fa-flag-checkered mx-2"></i>
                    الجنسية:
                  </label>
                  <Field
                    as="select"
                    className="w-full p-2 border border-gray-300 rounded"
                    id="nationality"
                    name="nationality"
                    value={selectedNationality}
                    onChange={(e) => {
                      const value = e.target.value;
                      setSelectedNationality(value);
                      setFieldValue("nationality", value);
                      setCities([]);
                    }}
                  >
                    <option value="">اختر الجنسية</option>
                    {nationalities.map((nat) => (
                      <option key={nat.id} value={nat.id}>
                        {nat.name}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage
                    name="nationality"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <label
                    className="block text-HoverPrimary mb-1"
                    htmlFor="city"
                  >
                    <i className="fa-solid text-primary fa-house-flag mx-2"></i>
                    المدينة:
                  </label>
                  <Field
                    as="select"
                    className="w-full p-2 border border-gray-300 rounded"
                    id="city"
                    name="city"
                  >
                    <option value="">اختر المدينة</option>
                    {cities.map((city) => (
                      <option key={city.id} value={city.id}>
                        {city.name}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage
                    name="city"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  className="block text-HoverPrimary mb-1"
                  htmlFor="education"
                >
                  <i className="fa-solid text-primary fa-school mx-2"></i>
                  المرحلة الدراسية:
                </label>
                <Field
                  as="select"
                  className="w-full p-2 border border-gray-300 rounded"
                  id="education"
                  name="education"
                >
                  <option value="">اختر المرحلة الدراسية</option>
                  <option value="صف رابع">صف رابع</option>
                  <option value="صف خامس">صف خامس</option>
                  <option value="صف سادس">صف سادس</option>
                  <option value="اخرى">اخرى</option>
                </Field>
                <ErrorMessage
                  name="education"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-primary text-white px-4 py-2 rounded w-1/2"
                  disabled={loading} // تعطيل الزر أثناء التحميل
                >
                  {loading ? "جاري الإرسال..." : "تسجيل"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Register;
