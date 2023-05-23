import { SearchIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Tag,
  Text,
  useOutsideClick,
} from '@chakra-ui/react';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { inputGroup } from './Style';
;


export const Search = () => {
  const ref = useRef<any>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  //const [products, setProducts] = useState<IProduct[]>([]);

  useOutsideClick({
    ref: ref,
    handler: () => {
      setIsModalOpen(false);
      //setProducts([]);
    },
  });

  

  

  return (
    <Box pos="relative" w={{ base: '100%', lg: '32rem' }} ref={ref}>
      <InputGroup {...inputGroup}>
        <InputLeftElement
          pointerEvents="none"
          //children={<SearchIcon color="gray.400" />}
        />
        <Input
          type="text"
          placeholder="Search..."
          focusBorderColor="brand.primaryLight"
          borderWidth="1px"
          borderColor="gray.400"
          value={searchText}
          onClick={() => setIsModalOpen(true)}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </InputGroup>

      {isModalOpen && (
        <Box
          pos="absolute"
          bg="white"
          shadow="md"
          padding="0.5rem"
          w="100%"
          boxSizing="border-box"
          maxH="500px"
          overflowY="auto"
        >
         
        </Box>
      )}
    </Box>
  );
};

const SearchedProductList = () => {
  return (
    <>
     
        <Link key={''} href={`/products/${''}`}>
          <Box
            borderBottomWidth="1px"
            borderBottomColor="gray.200"
            p="2"
            _hover={{ bgColor: 'gray.100' }}
          >
            <Flex align="center">
              <Image
                alt={''}
                src={''}
                boxSize="24px"
                mr="10px"
              />
              <Text>{''}</Text>
            </Flex>
            <Flex justify="flex-end">
              <Tag size="sm">{''}</Tag>
            </Flex>
          </Box>
        </Link>
  
    </>
  );
};