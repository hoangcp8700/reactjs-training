import * as yup from "yup";

export const phoneRegExp = /^(\+\d{1,3}[- ]?)?\d{10}$/;

// export const registerSchema = yup.object().shape({
//   invitation_code: yup.string().required("Mã thư mời là bắt buộc !"),
// });
export const loginSchema = yup.object({
  user: yup.string().required("Vui lòng nhập số điện thoại hoặc email"),
  password: yup.string().required("Vui lòng nhập mật khẩu"),
});

export const registerSchema = yup.object({
  fullName: yup.string().required("Vui lòng nhập đầy đủ họ tên"),
  email: yup.string().required("Vui lòng nhập email").email("Email không hợp lệ"),
  password: yup.string().required("Vui lòng nhập mật khẩu"),
  passwordConfirmation: yup
    .string()
    .required("Yêu cầu nhập lại mật khẩu")
    .oneOf([yup.ref("password"), null], "Mật khẩu không trùng khớp"),
});

export const forgotPasswordSchema = yup.object({
  email: yup.string().required("Vui lòng nhập email").email("Email không hợp lệ"),
});

export const resetPasswordSchema = yup.object({
  password: yup.string().required("Vui lòng nhập mật khẩu"),
  passwordConfirmation: yup
    .string()
    .required("Yêu cầu nhập lại mật khẩu")
    .oneOf([yup.ref("password"), null], "Mật khẩu không trùng khớp"),
});

export const verifySchema = yup.object({
  code: yup.string().required("Vui lòng nhập code"),
});
export default undefined;
