import styled from "@emotion/styled";
import IconButton from "components/atoms/IconButton";
import Input from "components/atoms/Input";
import Loading from "components/atoms/Loading";
import Text from "components/atoms/Text";
import Container from "components/common/Container";
import useDebounce from "hooks/useDebounce";
import useDropdown from "hooks/useDropdown";
import React, { useCallback, useState } from "react";
import STYLES from "styles";

export interface NavSearchProps {
  onSubmit?: (search: string) => void;
}

const NavSearchWrapper = styled.div`
  height: ${STYLES.VARIABLES["header-nav-search"]}px;
`;

const ResultSearchBox = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
`;

const NavSearch: React.FC<NavSearchProps> = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const { active, wrapRef, bodyRef, handleToggle } = useDropdown();

  const handleSearch = useCallback(() => {
    // TODO: use useQuery to replace
    if (search) {
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
    return undefined;
  }, [search]);

  useDebounce(handleSearch, 350, [search]);

  return (
    <NavSearchWrapper className='relative bg-gray-200'>
      {active && (
        <div
          className={STYLES.MIXINS.overlay("bg-transparent")}
          onClick={handleToggle}
          role='button'
          aria-label='overlay'
          aria-hidden
        />
      )}
      <Container>
        <div>
          <div className='ml-auto max-w-full md:max-w-[240px] relative '>
            <div
              role='button'
              className='py-1'
              onClick={() => !active && handleToggle()}
              aria-hidden
            >
              <Input
                id='header-search'
                value={search}
                placeholder='Tìm kiếm'
                onChange={(e) => setSearch(e.target.value)}
                className='pr-8 sm:pr-10 h-[32px] text-sm'
              />
              <div className='absolute right-1 top-[50%] translate-y-[-50%]'>
                {/* // TODO: onclick then redirect to page */}
                <IconButton
                  size={16}
                  iconName='search'
                  buttonProps={{ className: "shadow-none" }}
                />
              </div>
            </div>

            <ResultSearchBox
              className='rounded-md shadow-md overflow-hidden transition-all w-full'
              ref={wrapRef}
            >
              <div
                className='bg-white max-h-[50vh] overflow-y-auto relative p-2 z-max'
                ref={bodyRef}
              >
                <div>
                  {search ? (
                    <Text>
                      <Text type='span' className='text-sm'>
                        Từ khóa{" "}
                      </Text>
                      <Text type='span' className='text-sm font-medium' content={`"${search}"`} />
                    </Text>
                  ) : (
                    <Text className='text-sm text-gray-400' content='Nhập từ khóa tìm kiếm' />
                  )}
                </div>
                {loading && <Loading />}
                <Loading />
              </div>
            </ResultSearchBox>
          </div>
        </div>
      </Container>
    </NavSearchWrapper>
  );
};
export default NavSearch;
