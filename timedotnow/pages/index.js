//Next
import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script';
import Router from "next/router";
import Link from 'next/link'

//React
import React, { useState, useEffect } from 'react';


//Chakra UI
import { Code, color } from '@chakra-ui/react'
import { Box, Container } from '@chakra-ui/react'
import { Switch } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Center, Square, Circle } from '@chakra-ui/react'
import { ColorModeScript } from '@chakra-ui/react'
import { useColorMode } from "@chakra-ui/react";
import { Divider } from '@chakra-ui/react'

//Icons
import {
   PhoneIcon, 
   AddIcon, 
   WarningIcon,
   ChevronRightIcon,
   SunIcon,
   MoonIcon
} from '@chakra-ui/icons'

//Components
import  SponsorModal from '../components/sponsorButton'

// import Redirect from '../components/redirect';

// Color mode
import theme from '../components/theme'

const myLoader = ({ src, width, quality }) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`
}



//Time component
// Api endpoint /api/v1/time/timezone/:timezone
const axios = require('axios');

const TimeTZ = () => {
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [timeZone, setTimeZone] = useState('');
  const tz = "America-New_York";

  useEffect(() => {
    setInterval(() => {
      async function getTime() {
        const response = await axios.get('/api/v1/time/timezone/' + tz);
        setTime(response.data.time);
        setDate(response.data.date);
        setTimeZone(response.data.timezone);
      }
      getTime();
    }, 1000);
  }, []);

  return (
    <Text fontSize='xl'>
      Time: {time} <br />
      Date: {date} <br />
      Timezone: {timeZone}
    </Text>
  )
}

const TimeGEO = () => {
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [timezone, setTimezone] = useState('');
  const geo = "40.730610*-73.935242";

  useEffect(() => {
    setInterval(() => {
      async function getTime() {
        const response = await axios.get('/api/v1/time/location/' + geo);
        setTime(response.data.time);
        setDate(response.data.date);
        setTimezone(response.data.timezone);
      }
      getTime();
    }, 1000);
  }, []);

  return (
    <Text fontSize='xl'>
      Time: {time} <br />
      Date: {date} <br />
      Timezone: {timezone}
    </Text>
  )
}
  

function Example() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <header>
      <Button onClick={toggleColorMode}
        colorScheme='teal'
      >
        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      </Button>
    </header>
  )
}


export default function Home() {
  return (
    <div>
      <Head>
        <title>time.now api</title>
        <meta name="description" content="🕖 Time dot now - api" />
        <link rel="icon" href="icon/favicon.ico" />
      </Head>

      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      {/*Nav bar content*/}
      <Box bg='black' w='100%' h='100px' color='white'>
        <Flex color='white'>
          <Box p='4' paddingTop={5}>
            <Link href="/">
              <Image
                src="/image/logo.png" 
                width='60px' 
                height='60px' 
                alt="logo"
                />
            </Link>
          </Box>
          <Box p='7'>
            <Heading
              as='h1'
              size='lg'
              color='white'
              marginTop={1}
              marginLeft={5}
              marginRight={10}
              _hover={{ color: '#b0acac' }}
            >
              <Link href="/times">
                    Time list
              </Link>
          </Heading>
          </Box>
          <Spacer />
          <Box p='7'>
            <Example />
          </Box>
          <Box p='7' paddingLeft={0}>
            <SponsorModal />
          </Box>
          
        </Flex>
      </Box>


      {/* Main content header */}
      <Container maxWidth="lg" paddingTop={10}>
        <Box>
          <Stack spacing={6}>
            <Heading as='h1' size='4xl' noOfLines={1}>
              Time.now
            </Heading>
          </Stack>
          <br /><br />
          <Text fontSize='3xl'>
            Minimal API for getting the current time.
          </Text>
        </Box>
      </Container>

      {/* Main content */}
      <Container maxWidth="lg" paddingTop={40}>
        <Box>
          <Stack spacing={59}>
            <Box>
              <Box
                paddingBottom={5}
              >
                <Code
                  fontSize='xl'
                  bg='black'
                  color='white'
                  borderRadius={5}
                >
                  /api/v1/time/timezone/:timezone  
                </Code>
              </Box>
              <Box
                  padding={5} 
                  bg='black'
                  color='white'
                  borderRadius='10px'
                >
                <TimeTZ />
              </Box>
            </Box>  
            <br />

          <Box>
            <Box
              paddingBottom={5}
            >   
              <Code
                fontSize='xl'
                bg='black'
                color='white'
                borderRadius={5}
              >
               /api/v1/time/location/:geo
              </Code>
            </Box>
              <Box
                padding={5}
                bg='black'
                color='white'
                borderRadius='10px'
              >
                <TimeGEO />
              </Box>          
            </Box>  
          </Stack>
        </Box>
      </Container>



      {/* Footer */}
      <footer
        style={{
          paddingTop: '100px',
        }} 
      >
        <Box
          as="footer"
          bg="black"
          color="white"
          fontSize="sm"
          p={4}
          textAlign="center"
        >
          <Text fontSize='lg'>
            © {new Date().getFullYear()}, Built by <a href="https://github.com/LyeZinho">LyeZinho 📚</a>
          </Text>
        </Box>
      </footer>
    </div>
  )
}
