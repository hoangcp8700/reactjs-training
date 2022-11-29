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

const dataSelectDummy = new Array(10).fill(true).map((_, idx) => ({
  id: (idx + 1).toString(),
  value: (idx + 11).toString(),
  label: `value ${idx + 11} ${Math.floor(Math.random() * 1000)}`,
}));

const Home: React.FC = () => {
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [select, setSelect] = useState<OptionType>();
  const [dataSelect, setDataSelect] = useState<OptionType[]>(dataSelectDummy);

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
              url: "/",
              target: "_self",
            }}
            sales={[
              { label: "Giảm 30%" },
              { label: "Free ship", style: { background: "#fafa", color: "#000" } },
            ]}
            price={500000}
            originPrice={1000000}
            handleFavorite={() => console.log("favorite")}
          />
        </div>
      </header>
    </div>
  );
};

export default Home;
