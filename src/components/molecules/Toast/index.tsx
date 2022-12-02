import Icon, { IconName } from "components/atoms/Icon";
import Text from "components/atoms/Text";
import React from "react";
import { ToastContainerProps, ToastContainer, toast as toastInstance, Slide } from "react-toastify";

const notificationIcons = {
  success: "success",
  warning: "warning",
  error: "error",
} as const;

interface ToastifyProps {
  autoClose?: number | false;
  toastfyProps?: ToastContainerProps;
  children?: React.ReactNode;
}

export interface ToastifyBodyProps {
  message?: string;
  content?: React.ReactNode;
  type: "success" | "warning" | "error";
  children?: React.ReactNode;
  once?: boolean;
}

export const ToastifyBody: React.FC<ToastifyBodyProps> = ({ type, message, content, children }) => (
  <div className='toastify_body'>
    <div className='flex items-center mb-1'>
      <div className='flex-shrink-0'>
        <Icon iconName={notificationIcons[type] as IconName} size={32} />
      </div>
      <div className='ml-2 line-clamp-2'>
        <Text className='font-bold'>{message}</Text>
      </div>
    </div>
    <Text className='text-sm'>{content}</Text>
    {children}
  </div>
);

export const toastDismiss = () => toastInstance.dismiss();

// Remove toast before
let currentToastId: React.ReactText | null;
export const toastSingleMode = ({ once, type, ...props }: ToastifyBodyProps) => {
  if (currentToastId && once) {
    toastInstance.dismiss(currentToastId);
  }
  let typeColor: string;
  switch (type) {
    case "error":
      typeColor = "#ff0045";
      break;
    case "warning":
      typeColor = "#ffcc00";
      break;
    default:
      typeColor = "#339900";
  }

  currentToastId = toastInstance(<ToastifyBody type={type} {...props} />, {
    progressStyle: {
      background: typeColor,
      top: 0,
    },
  });

  return currentToastId;
};

export const Toastify: React.FC<ToastifyProps> = ({ children, autoClose = 5000, toastfyProps }) => (
  <div className='toastify'>
    {children}
    <ToastContainer transition={Slide} autoClose={autoClose} pauseOnHover {...toastfyProps} />
  </div>
);

export default Toastify;

// argTypes: {
//     type: {
//       control: {
//         type: "select",
//         options: ["success", "error", "warning"],
//       },
//       defaultValue: "success",
//     },
//     message: {
//       control: {
//         type: "text",
//       },
//       defaultValue: "Message",
//     },
//     content: {
//       control: {
//         type: "text",
//       },
//       defaultValue: "description",
//     },
//     once: {
//       control: {
//         type: "boolean",
//       },
//       defaultValue: false,
//     },
//     autoClose: {
//       control: {
//         type: "number",
//       },
//       defaultValue: 2000,
//     },
//   },
