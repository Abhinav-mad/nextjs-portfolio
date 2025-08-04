import Link from "next/link";
import { Text,useColorModeValue } from "@chakra-ui/react";
import NameIcon from "./icons/Awordicon";
import styled from "@emotion/styled";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  > svg {
    transition: 400ms ease;
  }

  &:hover > svg {
    transform: rotate(360deg);
  }

`


function Logo() {
  return (
    <Link href="/" scroll={false}>
        <LogoBox>
            <NameIcon/>
            <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily='M PLUS Rounded 1c", sans-serif'
          fontWeight="bold"
          ml={3}
        >
          bhinav
        </Text>

        </LogoBox>
    </Link>
  )
}

export default Logo

