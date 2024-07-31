import readImg from "../../assets/mostawa1.jpg";
import writeImg from "../../assets/mostawa2.jpg";
import listenImg from "../../assets/mostawa3.jpg";
import speakImg from "../../assets/mostawa4.jpg";
import drosImg from "../../assets/mostawa5.jpg";

function MostawaSection() {
  return (
    <section className="text-gray-800 body-font">
      <div className="container px-5 py-10 mx-auto flex flex-wrap lg:flex-nowrap justify-center items-center gap-11">
        <div className="lg:w-1/3 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
          <img
            alt="feature"
            className="object-cover object-center w-full h-full lg:h-auto"
            src={readImg}
          />
        </div>
        <div className="flex flex-col flex-wrap lg:py-1 lg:w-1/2 lg:pl-12 text-center">
          <h1 className="text-3xl text-center text-primary font-semibold">
            القراءة
          </h1>
          <hr className="w-[35%] md:w-[40%] h-[2px] my-2 mx-auto bg-primary border-none rounded-xl animate" />
          <p className="text-xl leading-relaxed text-center text-gray-600">
            اكتساب المفردات ذكر مرادفات المفردات الجديدة وتحديد المعنى المناسب
            لها مستخدماً السياق ووضعها في سياقات أخرى. تمييز المفردات المتشابهة
            في المعنى واستخدامها في جمل تامة استنتاج مرادفات المفردات الجديدة
            ووضعها في سياقات زمنية ومكانية مختلفة. فهم المقروء وتحليله وتقويمه:
            استنتاج الأفكار الرئيسة والفرعية والمعلومات الواردة في النص المقروء،
            وإعادة ترتيبها وتنظيمها. استخراج الأساليب اللغوية الشائعة، كالدعاء
            والتعجب، والأمر والنهي استنتاج القيم والاتجاهات الإيجابية من النص
            المقروء وتوضيح أثرها في الفرد والمجتمع، مع القدرة على تصنيفها طرح
            أسئلة تتطلب إجابات تحليلية ونقدية حول النص المقروء، وتمييز نوع النص
            وخصائصه وغرضه التفريق بين الرأي والحقيقة معرفة عناصر القصة الأربعة
            من خلال النص واستخراجها
          </p>
        </div>
      </div>

      <div className="container px-5 py-24 mx-auto flex flex-wrap lg:flex-nowrap justify-center items-center gap-11">
        <div className="flex flex-col flex-wrap lg:py-1 lg:w-1/2 lg:pl-12 text-center order-1 lg:order-first">
          <h1 className="text-3xl text-center text-primary font-semibold">
            الكتابة
          </h1>
          <hr className="w-[35%] md:w-[40%] h-[2px] my-2 mx-auto bg-primary border-none rounded-xl animate" />
          <p className="text-xl leading-relaxed text-center text-gray-600">
            مهارات الكتابة الأساسية: كتابة كلمات وجمل قصيرة، مضبوطة بالشكل،
            وإدخال بعض الحروف على الكلمات(الباء- واللام – والفاء) والتمييز بين
            كتابة التاء المفتوحة والمربوطة التفريق بين اللام القمرية والشمسية
            والتنوين في حال ورودها في النص. عمليات الكتابة وتنظيم عناصرها. كتابة
            الفقرة كتابة صحيحة، وتحديد الفكرة الرئيسة والفرعية كتابة العناوين
            كتابة صحيحة وترتيب الجمل، وملء الفراغات بجمل قصيرة وخط واضح الكتابة
            في أغراض وأنواع مختلفة: كتابة فقرة قصيرة عن مشاهداته اليومية استخدام
            الجمل والعبارات المناسبة في المناسبات والمواقف المختلفة معرفة دلالات
            علامات الترقيم واستخدامها معرفة الظواهر الإملائية الأساسية وتوظيفها
            في الكتابة( همزة الوصل والقطع، والهمزة المتوسطة والمتطرفة، والاسم
            المقصور والممدود والمنقوص، والجمل المثبتة والمنفية،والألف اللينة في
            آخر الأسماء والأفعال والحروف) إلخ
          </p>
        </div>
        <div className="lg:w-1/3 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
          <img
            alt="feature"
            className="object-cover object-center w-full h-full lg:h-auto"
            src={writeImg}
          />
        </div>
      </div>

      <div className="container px-5 py-10 mx-auto flex flex-wrap lg:flex-nowrap justify-center items-center gap-11">
        <div className="lg:w-1/3 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
          <img
            alt="feature"
            className="object-cover object-center w-full h-full lg:h-auto"
            src={listenImg}
          />
        </div>
        <div className="flex flex-col flex-wrap lg:py-1 lg:w-1/2 lg:pl-12 text-center">
          <h1 className="text-3xl text-center text-primary font-semibold">
            الاستماع
          </h1>
          <hr className="w-[35%] md:w-[40%] h-[2px] my-2 mx-auto bg-primary border-none rounded-xl animate" />
          <p className="text-xl leading-relaxed text-center text-gray-600">
            الانتباه للرسائل السمعية: تحديد المعلومات والتفاصيل(تواريخ وأحداث
            وشخصيات وأماكن) حسب تسلسل ورودها في النص المسموع تطبيق آداب
            الاستماع، وتنفيذ التعليمات الواردة في النص المسموع بشكل صحيح. فهم
            المسموع وتحليله وتقويمه: توضيح العلاقة بين المستوى الصوتي والمعاني
            والأساليب اللغوية والعواطف في النص المسموع. تحليل مكونات النص
            (العنوان والأفكار والمغزى) استنتاج الأفكار الرئيسة والفرعية ، وإيجاد
            المترادفات للكلمات الجديدة، وتحديد المعنى المناسب لها. تذوق النص
            المسموع، وإبداء رأيه فيها. تقويم مضمون النص المسموع وتحديد الصحيح من
            الخطأ، والرأي من الحقيقة.
          </p>
        </div>
      </div>

      <div className="container px-5 py-24 mx-auto flex flex-wrap lg:flex-nowrap justify-center items-center gap-11">
        <div className="flex flex-col flex-wrap lg:py-1 lg:w-1/2 lg:pl-12 text-center order-1 lg:order-first">
          <h1 className="text-3xl text-center text-primary font-semibold">
            التحدث
          </h1>
          <hr className="w-[35%] md:w-[40%] h-[2px] my-2 mx-auto bg-primary border-none rounded-xl animate" />
          <p className="text-xl leading-relaxed text-center text-gray-600">
            آداب الحديث والتواصل الشفهي تطبيق آداب التحدث بطلاقة، والتحكم في لغة
            الجسد ونبرة الصوت، والتزام الوقت المخصص للتحدث. استخدام أساليب لغوية
            محددة للحصول على معلومات مهمة التعبير شفهيا عن الأفكار والمشاعر
            والحاجات والخبرات. توظيف بعض الأساليب التي درسها(الاستفهام
            والاستثناء، والأمر والنهي، والدعاء، والتفضيل والتعجب، والتوكيد،
            والترجي والتمني) التعبير عن الصور من خلال وصفها.
          </p>
        </div>
        <div className="lg:w-1/3 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
          <img
            alt="feature"
            className="object-cover object-center w-full h-full lg:h-auto"
            src={speakImg}
          />
        </div>
      </div>

      <div className="container px-5 py-10 mx-auto flex flex-wrap lg:flex-nowrap justify-center items-center gap-11">
        <div className="lg:w-1/3 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
          <img
            alt="feature"
            className="object-cover object-center w-full h-full lg:h-auto"
            src={drosImg}
          />
        </div>
        <div className="flex flex-col flex-wrap lg:py-1 lg:w-1/2 lg:pl-12 text-center">
          <h1 className="text-3xl text-center text-primary font-semibold">
            الدروس النحويه
          </h1>
          <hr className="w-[35%] md:w-[40%] h-[2px] my-2 mx-auto bg-primary border-none rounded-xl animate" />
          <p className="text-xl leading-relaxed text-center text-gray-600">
            تمييز الرفع والنصب والجر في الاسماء والافعال. تمييز أنماط الجملة
            الاسمية والفعلية والتركيبات الشائعة. فهم وظائف الكلمات والعبارات في
            الجملة. التمييز بين الكلمات الأساسية والكلمات الفرعية (حروف الجر،
            والضمائر، والأفعال) تطبيق قواعد النحو في الكتابة والتحدث
          </p>
        </div>
      </div>
    </section>
  );
}

export default MostawaSection;
