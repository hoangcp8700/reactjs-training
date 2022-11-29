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

const Home: React.FC = () => {
  const [checked, setChecked] = useState(false);

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
      </header>
    </div>
  );
};

export default Home;
