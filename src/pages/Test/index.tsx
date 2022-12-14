import React, { useState } from "react";
import Text from "components/atoms/Text";
import Heading from "components/atoms/Heading";
import Button from "components/atoms/Button";
import Image from "components/atoms/Image";
import { IMAGE_DUMMY } from "utils/constants";
import Checkbox from "components/atoms/Checkbox";
import Input from "components/atoms/Input";
import Link from "components/atoms/Link";
import Radio from "components/atoms/Radio";
import Select from "components/atoms/Select";
import TextArea from "components/atoms/TextArea";
import Card from "components/molecules/Card";
import Accordion, { AccordionWrapper } from "components/organisms/Accordion";
import Tabs, { Tab, TabPanel } from "components/organisms/Tabs";
import clsx from "clsx";

const dataSelectDummy = new Array(10).fill(true).map((_, idx) => ({
  id: (idx + 1).toString(),
  value: (idx + 11).toString(),
  label: `value ${idx + 11} ${Math.floor(Math.random() * 1000)}`,
}));

const dummyTabsData = new Array(10).fill(true).map((_, idx) => ({
  id: idx,
  value: "tin-tuc",
  label: `Tin tức ${idx}`,
}));

const About: React.FC = () => {
  const [checked, setChecked] = useState(false); // radio
  const [loading, setLoading] = useState(false);
  const [select, setSelect] = useState<OptionType>(); // select
  const [dataSelect, setDataSelect] = useState<OptionType[]>(dataSelectDummy); // select
  const [indexActive, setIndexActive] = useState(0); // tabs

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setDataSelect((prev) => [...prev, ...dataSelectDummy]);
      setLoading(false);
    }, 5000);
  };
  return (
    <div className='App'>
      <header className='App-header'>
        <div style={{ minHeight: "200vh", background: "#fafafa" }}>
          <Tabs indexActive={indexActive} classTabsActive='home-active'>
            {dummyTabsData.map((item, index) => (
              <Tab
                classTabsActive='home-active'
                key={`tab-${index.toString()}`}
                active={index === indexActive}
                onClick={() => setIndexActive(index)}
              >
                <Text
                  className={clsx(indexActive === index && "!text-blue-700", "hover:text-blue-700")}
                >
                  {item.label}
                </Text>
              </Tab>
            ))}
          </Tabs>

          <TabPanel className='tabpanel-active'>
            {/* // TODO: add animation here!!!! */}
            {/* // TODO: update data */}
            <div style={{ backgroundColor: "blue", padding: 50 }}>
              {dummyTabsData[indexActive].label}
            </div>
          </TabPanel>
        </div>

        <Text>text component</Text>
        <Heading>Heading component</Heading>
        <Image src={IMAGE_DUMMY} alt='test' ratio={[16, 9]} className='object-cover' />
        <Button variants='primary'>
          <Text className='text-white'>Button component</Text>
        </Button>
        <p> to ReactJS</p>
        <Link href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
          Learn React
        </Link>
        <Checkbox id='gender' checked={checked} onChange={() => setChecked(!checked)} />
        <Input id='gender1' placeholder='test' error='error' isSearch />
        <Radio id='gender2' checked={checked} onChange={() => setChecked(!checked)} />
        <Radio
          id='gender2'
          checked={!checked}
          onChange={() => setChecked(!checked)}
          error
          sizes='md'
        />
        <Select
          option={select}
          optionData={dataSelect}
          placeholder='chon di'
          handleSelect={(value) => setSelect(value)}
          isSearch
          isLoading={loading}
          handleLoadMore={() => dataSelect.length < 31 && handleLoadMore()}
        />
        <TextArea id='test' name='descriptiop' placeholder='12321' label='tesT' />
        <div style={{ maxWidth: 300 }}>
          <Card.Product
            thumbnail={{
              alt: "card",
              src: IMAGE_DUMMY,
            }}
            title={{
              text: "New Balance 67/212 Men's Sneakers - Mindful Grey New Balance 67/212 Men's Sneakers",
              href: "/",
              target: "_self",
            }}
            sales={[
              { label: "Giảm 30%" },
              {
                label: "Free ship",
                style: {
                  background: "#fafa",
                  color: "#000",
                },
              },
            ]}
            price={500000}
            originPrice={1000000}
            handleFavorite={() => console.log("favorite")}
          />
        </div>
        <AccordionWrapper>
          <Accordion
            headingNode='subtitle 1'
            classProps={{
              wrapper: "wrapper-1",
              body: "body-1",
              item: "item-1",
            }}
          >
            <Accordion
              headingNode={
                <Link href='/1a' isDecoration>
                  1a
                </Link>
              }
            />
            <Accordion
              headingNode={
                <Link href='/1b' isDecoration>
                  1b
                </Link>
              }
            />
            <Accordion
              headingNode={
                <Link href='/1c' isDecoration>
                  1c
                </Link>
              }
            />
            <Accordion
              headingNode={
                <Link href='/1d' isDecoration>
                  1d
                </Link>
              }
            />
          </Accordion>
          <Accordion
            headingNode={
              <Link href='/subtitle-2' isDecoration>
                subtitle 2
              </Link>
            }
          />
          <Accordion
            headingNode={
              <Link href='/subtitle-3' isDecoration>
                subtitle 3
              </Link>
            }
          />
          <Accordion headingNode={<Text>subtitle 4</Text>} />
        </AccordionWrapper>
      </header>
    </div>
  );
};

export default About;
