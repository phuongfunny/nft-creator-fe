"use client";
import { Buy, ItemBattlePass, Seasion } from "@/assets/images";
import LoadingModal from "@/components/LoadingModal";
import { GamingToken, NFTCreatorFactory } from "@/contracts";
import MainLayout, { MarketplaceLayout } from "@/layout";
import { contractGamingToken, contractNftCreatorFactory } from "@/services";
import { showErrorToast, showSuccessToast, toEth, toWei } from "@/utils/helper";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useAccount } from "wagmi";

const Marketplace = () => {
  const { address, isConnected } = useAccount();
  const { openConnectModal } = useConnectModal();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("Processing...");

  const user = address?.toString();

  const getRandomCollection = async () => {
    try {
      const contract = await contractNftCreatorFactory();
      if (contract) {
        const transaction = await contract.getAllCollections();
        const listRandom = [];
        for (let i = 0; i < 4; i++) {
          // const randomIndex = Math.floor(Math.random() * transaction.length);
          const selectedRandomItem = await transaction[i];

          listRandom.push(selectedRandomItem);
        }
        return listRandom;
      }
    } catch (error) {
      console.error("err", error);
    }
  };

  const getTokenContract = async () => {
    try {
      const contract = await contractGamingToken();
      if (contract) {
        const transaction = await contract.balanceOf(user);
        const balance = await transaction.toString();
      }
    } catch (error) {
      console.error("err", error);
    }
  };

  const approveToken = async () => {
    try {
      setLoading(true);
      setMessage("Processing approve...")
      const contract = await contractGamingToken();
      if (contract) {
        const transaction = await contract.approve(
          NFTCreatorFactory.address,
          5 * 10 ** 6
        );
        await transaction.wait();
      }
    } catch (error) {
      console.error("err", error);
    }
  };

  const buyBattlePass = async () => {
    try {
      await approveToken();
      const listCollection = await getRandomCollection();
      const contract = await contractNftCreatorFactory();
      setMessage("Processing buy...")

      if (contract) {
        const transaction = await contract.buyNFT(listCollection, {
          gasLimit: 7000000,
        });
        await transaction.wait();
        showSuccessToast("Buy successful");
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      showErrorToast("Buy is failed");
    }
  };

  useEffect(() => {
    getTokenContract();
  }, []);

  return (
    <MarketplaceLayout>
        <LoadingModal isLoading={loading} message={message}/>

      <Wrapper>
        <ContainerBuyBattle>
          <Image src={Seasion} alt="seasion" />
          <ButtonBuy onClick={isConnected ? buyBattlePass : openConnectModal}>
            <Image src={Buy} alt="buy" />
          </ButtonBuy>
        </ContainerBuyBattle>
        <ContainerNFT>
          <Image src={ItemBattlePass} alt="ibp" />
        </ContainerNFT>
      </Wrapper>
    </MarketplaceLayout>
  );
};

export default Marketplace;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  padding: 65px 90px;
  gap: 58px;
`;

const ContainerBuyBattle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 58px;
`;

const ButtonBuy = styled.button`
  position: absolute;
  bottom: 0;
  margin-bottom: 30px;
`;

const ContainerNFT = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
