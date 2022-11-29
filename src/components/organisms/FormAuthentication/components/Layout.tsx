import styled from "@emotion/styled";
import Heading from "components/atoms/Heading";
import Link from "components/atoms/Link";
import Text from "components/atoms/Text";
import Container from "components/common/Container";
import React from "react";
import STYLES from "styles";

interface FormAuthenticationStyleProps {
  background?: string;
}

interface FormAuthenticationProps extends FormAuthenticationStyleProps {
  title: string;
  subTitle?: string;
  description?: {
    text: string;
    link: LinkType;
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: React.ReactNode;
}

const FormWrapper = styled.div<FormAuthenticationStyleProps>((props) => ({
  backgroundImage: `url(${props.background})`,
}));

const FormBody = styled.div`
  min-height: calc(100vh - ${STYLES.VARIABLES["header-height-desktop"]}px);
  ${STYLES.BREAKPOINTS.mobileDown(`
  min-height: calc(100vh - ${STYLES.VARIABLES["header-height-tablet"]}px);`)}
`;

const FormAuthenticationLayout: React.FC<FormAuthenticationProps> = ({
  title,
  subTitle,
  description,
  children,
  background,
}) => (
  <FormWrapper className='bg-no-repeat bg-cover' background={background}>
    <Container>
      <FormBody className='flex flex-col justify-center h-screen'>
        <div className='flex items-center justify-center flex-col'>
          {subTitle && (
            <div className='mb-2'>
              <Text className='text-sm text-white/70 font-medium uppercase'>{subTitle}</Text>
            </div>
          )}
          <div className='relative w-fit before:content-[] before:absolute before:bg-blue-600 before:rounded-full before:bottom-1 before:right-[-15px] before:height-[10px]'>
            <Heading className='text-5xl text-white uppercase'>{title}</Heading>
          </div>
          {description && (
            <div className='flex items-center mt-2'>
              <div className='mr-1'>
                <Text type='span' className='text-sm text-white/70'>
                  {description.text}
                </Text>
              </div>

              <Link href={description.link.url} target={description.link.target}>
                <Text className='font-sm text-red-500 font-semibold' type='span'>
                  {description.link.text}
                </Text>
              </Link>
            </div>
          )}
        </div>

        <div className='mt-8'>
          <div className='max-w-[700px] mx-auto'>{children}</div>
        </div>
      </FormBody>
    </Container>
  </FormWrapper>
);

export default FormAuthenticationLayout;

/* <FormAuthentication background={}/> */
