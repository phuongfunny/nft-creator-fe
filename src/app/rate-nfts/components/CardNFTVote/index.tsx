import { IconStarBlack } from "@/assets/icons";
import { Hero } from "@/assets/images";
import useModal from "@/hooks/useModal";
import Image from "next/image";
import styled from "styled-components";
import ModalConfirmVote from "../ModalConfirmVote";

export interface ICardNFTVoteProps {}

export default function CardNFTVote(props: ICardNFTVoteProps) {
  const { toggle } = useModal();
  return (
    <WrapperCard>
      <BoxImage>
        <Image src={Hero} width={327} height={327} alt="hero1" />
      </BoxImage>

      <BoxTitle>
        <Title>Asset No.1</Title>
        <TypeAsset>Type: NFT Skin</TypeAsset>
      </BoxTitle>
      <ButtonShowDetail onClick={toggle}>
        <p>Rating</p>
        <IconStarBlack />
      </ButtonShowDetail>
      <ModalConfirmVote />
    </WrapperCard>
  );
}

const BoxImage = styled.div`
  background-image: url("/images/bg_card.png");
  background-size: cover;
  width: 100%;
  border-radius: 24px;
  border: 1px solid var(--PRIMARY, #3e6fff);
`;

const WrapperCard = styled.div`
  display: flex;
  height: 463px;
  width: 329px;
  min-width: 329px;
  max-width: 329px;
  padding: 24px;
  flex-direction: column;
  align-items: center;
  gap: 27px;
  flex: 1 0 0;
  border-radius: 24px;
  background: linear-gradient(
    90deg,
    rgba(2, 20, 145, 0.4) -16.29%,
    rgba(22, 71, 207, 0.4) 106.35%
  );
  backdrop-filter: blur(15px);
`;

const BoxTitle = styled.div``;

const Title = styled.h1`
  color: #fff;
  text-align: center;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
`;
const TypeAsset = styled.p`
  margin: 0;
  color: #fff;
  text-align: center;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
`;

const ButtonShowDetail = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 56px;
  border-radius: 4px;
  border: 1px solid var(--SECONDARY, #fed73b);
  background: var(--SECONDARY, #fed73b);
  cursor: pointer;
  p {
    color: #000;
    text-align: center;
    font-family: Montserrat;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: capitalize;
  }
`;