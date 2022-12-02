type ResponseAPIType<T> = {
  data: T;
  message?: {
    [lang: string]: string;
  };
};

type ResponseAPIValidateError = {
  field: string;
  message: string;
};

type UseFormHookType<T> = T & {
  ERROR_GENERAL?: string;
};
