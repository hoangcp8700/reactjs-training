import React from "react";
// import logo from "logo.svg";
import Text from "components/atoms/Text";
import Heading from "components/atoms/Heading";
import Button from "components/atoms/Button";

const Home: React.FC = () => (
  <div className='App'>
    <header className='App-header'>
      <Text>text component</Text>
      <Heading>Heading component</Heading>
      <Button variants='primary'>
        <Text className='text-white'>Button component</Text>
      </Button>
      {/* <img src={logo} className='App-logo' alt='logo' /> */}
      <p> to ReactJS</p>
      <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
        Learn React
      </a>
    </header>
  </div>
);

export default Home;
