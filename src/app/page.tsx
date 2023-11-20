"use client";
import { Character, NewMap, NewWorld, NftSkin } from "@/assets/images";
import CreatorItem from "@/components/CreatorItem";
import { technoRaceFont } from "@/font";
import MainLayout from "@/layout";
import styled from "styled-components";

export interface IAppProps {}

export default function App(props: IAppProps) {
  return (
    <MainLayout>
      <Wrapper>
      <ContainerTitle>
        <Title >Create your own world on</Title>
        <SubTitle className={technoRaceFont.className}>PAWCIFIC RIM</SubTitle>
      </ContainerTitle>
      <ContainerItemCreator>
        {ITEMS.map((item, index) => (
          <CreatorItem item={item} key={index} />
        ))}
      </ContainerItemCreator>
      </Wrapper>
      
    </MainLayout>
  );
}


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
   width: 100%;
  padding: 78px 90px;
`

const ContainerItemCreator = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 49px;
`;

const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 61px;
`;

const Title = styled.p`
  font-size: 24px;
  line-height: 32px;

  color: #b9c2f2;
`;

const SubTitle = styled(Title)`
  font-size: 60px;
  line-height: 72px;
  color: #FFFFFF;
`;
const ITEMS = [
  {
    title: "NFT Skins",
    image: NftSkin,
    href: "#",
  },
  {
    title: "Character Weapons",
    image: Character,
    href: "#",
  },
  {
    title: "New Map On Paw",
    image: NewMap,
    href: "#",
  },
  {
    title: "New Worlds On Paw",
    image: NewWorld,
    href: "#",
  },
];
