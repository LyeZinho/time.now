//Next / React
import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script';

//Styles
import styles from '../styles/Home.module.css'

//Chakra UI
import { Button } from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure
} from '@chakra-ui/react'
import { useColorMode } from "@chakra-ui/react";





export default function SponsorModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { colorMode, toggleColorMode } = useColorMode()
    return (
      <>
        <Button 
        colorScheme='teal'
        onClick={onOpen}>❤ Sponsor</Button>
        <Modal 
        closeOnOverlayClick={false} 
        isOpen={isOpen} 
        onClose={onClose}
        size='sm'
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Support this project</ModalHeader>
            <ModalCloseButton />
            <ModalBody 
              padding={0}
              borderColor={colorMode}
            >
              <iframe 
                id='kofiframe' 
                src='https://ko-fi.com/lyepedro/?hidefeed=true&widget=true&embed=true&preview=true' 
                className={styles.sponsorIframe} 
                title='lyepedro'
                >
              </iframe>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
  }
