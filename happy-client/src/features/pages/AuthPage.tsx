import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { observer } from "mobx-react-lite";
import { useStore } from "../../app/stores/store";


export default function AuthPage() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="border border-[#ebeece] w-full max-w-md bg-white ">
        <div className="flex justify-center mb-6 ">
          <button
            className={`w-1/2 py-3  ${showLogin
              ? "bg-white text-[#344f24]"
              : "bg-[#f3f3f3] text-gray-600 hover:bg-gray-300"
              }`}
            onClick={() => setShowLogin(true)}
          >
            Giriş Yap
          </button>
          <button
            className={`w-1/2 py-3  ${!showLogin
              ? "bg-white text-[#344f24]"
              : "bg-[#f3f3f3] text-gray-600 hover:bg-gray-300"
              }`}
            onClick={() => setShowLogin(false)}
          >
            Üye Ol
          </button>
        </div>
        {showLogin ? <SignIn /> : <SignUp />}
      </div>
    </div>
  );
}

const SignInSchema = Yup.object().shape({
  email: Yup.string().email("Geçerli bir e-posta girin").required("E-posta gerekli"),
  password: Yup.string().required("Şifre gerekli"),
});

const SignIn = observer(() => {
  const navigate = useNavigate();

  const { userStore } = useStore();

  return (
    <Formik
      initialValues={{ email: "", password: "", error: null }}
      validationSchema={SignInSchema}
      onSubmit={(values, { setErrors }) => userStore.login(values).catch(error =>
        setErrors({ error: "E-posta adresi veya şifre geçersiz" }))}
    >
      {({ errors, touched }) => (
        <Form>
          <div className="mb-4 px-6 mt-14">
            <label>E-posta</label>
            <Field
              name="email"
              type="email"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 shadow-sm focus:outline-none focus:border-[#344f24]"
            />
            {errors.email && touched.email && (
              <div className="text-red-500 text-sm mt-1">{errors.email}</div>
            )}
          </div>
          <div className="mb-6 px-6">
            <label>Şifre</label>
            <Field
              name="password"
              type="password"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 shadow-sm focus:outline-none focus:border-[#344f24]"
            />
            {errors.password && touched.password && (
              <div className="text-red-500 text-sm mt-1">{errors.password}</div>
            )}
          </div>
          <ErrorMessage name="error">
            {msg => <div className="text-red-600 text-sm">{msg}</div>}
          </ErrorMessage>
          <div className="px-6">
            <button
              type="submit"
              className="w-full bg-[#73845e] text-white px-6 py-3 rounded-lg hover:bg-[#5a6d46] transition duration-300"
            >
              GİRİŞ YAP
            </button>
          </div>
          <div className="mt-6 text-center text-sm text-gray-500">veya</div>
          <div className="mt-4 text-center px-6 mb-8">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="flex justify-center items-center w-full py-3 px-4 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100"
            >
              <FaGoogle /> <span className="ml-2">Google ile Giriş Yap</span>
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
});

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email("Geçerli bir e-posta girin").required("E-posta gerekli"),
  firstname: Yup.string()
    .min(2, "Ad en az 2 karakter olmalı")
    .max(50, "Ad en fazla 50 karakter olabilir")
    .required("Ad gerekli"),
  lastname: Yup.string()
    .min(2, "Soyad en az 2 karakter olmalı")
    .max(50, "Soyad en fazla 50 karakter olabilir")
    .required("Soyad gerekli"),
  password: Yup.string()
    .min(10, "Şifre en az 10 karakter olmalı")
    .matches(/[A-Z]/, "En az bir büyük harf içermeli")
    .matches(/[0-9]/, "En az bir rakam içermeli")
    .required("Şifre gerekli"),
});

const SignUp = observer(() => {
  const navigate = useNavigate();

  const { userStore } = useStore();

  return (
    <Formik
      initialValues={{ email: "", firstname: "", lastname: "", password: "", error: null }}
      validationSchema={SignUpSchema}
      onSubmit={(values, { setErrors }) => userStore.register(values).catch(error =>
        setErrors({ error }))}
    >
      {({ errors, touched, isValid, dirty, isSubmitting }) => (
        <Form>
          <div className="mb-4 px-6 mt-14">
            <label>E-posta</label>
            <Field
              name="email"
              type="email"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 shadow-sm focus:outline-none focus:border-[#344f24]"
            />
            {errors.email && touched.email && (
              <div className="text-red-500 text-sm mt-1">{errors.email}</div>
            )}
          </div>
          <div className="mb-6 px-6">
            <label>İsim</label>
            <Field
              name="firstname"
              type="text"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 shadow-sm focus:outline-none focus:border-[#344f24]"
            />
            {errors.firstname && touched.firstname && (
              <div className="text-red-500 text-sm mt-1">{errors.firstname}</div>
            )}
          </div>
          <div className="mb-6 px-6">
            <label>Soyisim</label>
            <Field
              name="lastname"
              type="text"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 shadow-sm focus:outline-none focus:border-[#344f24]"
            />
            {errors.lastname && touched.lastname && (
              <div className="text-red-500 text-sm mt-1">{errors.lastname}</div>
            )}
          </div>
          <div className="mb-6 px-6">
            <label>Şifre</label>
            <Field
              name="password"
              type="password"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 shadow-sm focus:outline-none focus:border-[#344f24]"
            />
            {errors.password && touched.password && (
              <div className="text-red-500 text-sm mt-1">{errors.password}</div>
            )}
          </div>
          <ErrorMessage name="error" render={() => <label className="text-red-600">{errors.error}</label>} />
          <div className="px-6">
            <button
              disabled={!isValid || !dirty || isSubmitting}
              type="submit"
              className="w-full bg-[#73845e] text-white px-6 py-3 rounded-lg hover:bg-[#5a6d46] transition duration-300"
            >
              ÜYE OL
            </button>
            <div className="text-xs text-[#666] mt-1">
              *Şifreniz en az 10 karakter olmalı. 1 büyük harf ve rakam içermelidir.
            </div>
          </div>
          <div className="mt-6 text-center text-sm text-gray-500">veya</div>
          <div className="mt-4 text-center px-6 mb-8">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="flex justify-center items-center w-full py-3 px-4 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100"
            >
              <FaGoogle /> <span className="ml-2">Google ile Kaydol</span>
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
});