"use client";
import MainLayout from "@/layout";
import React, { useState } from "react";
import styled from "styled-components";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/navigation";
import { IconBack } from "@/assets/icons";

interface StyledLabelProps {
  fontSize: string;
  textColor: string;
}

interface UploadForm {
  assetType: string;
  image: string;
  name: string;
  description: string;
}

const UploadAsset = () => {
  const route = useRouter();
  const { register, control, handleSubmit } = useForm<UploadForm>();
  console.log(register("name"));

  const [imageNft, setImageNft] = useState("");
  const onChangFile = async (e: any) => {
    var file = e.target.files[0];
    const reader = new FileReader();
    if (file) reader.readAsDataURL(file);

    reader.onload = (readerEvent: any) => {
      const file = readerEvent.target.result;
      setImageNft(file);
    };
  };

  const removeImage = () => {
    setImageNft("");
  };

  const onSubmit = (data: any) => {
    console.log("Form submitted with data:", data);
  };

  return (
    <MainLayout>
      <Wrapper>
      <ContainerBack >
                <ButtonBack onClick={() => route.push('/upload-asset')}><IconBack /></ButtonBack>
            
            </ContainerBack>
      <WrapperUpload>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Label textColor="" fontSize="32px">
            Upload Asset
          </Label>
          <br />
          <Label textColor="" fontSize="">
            Asset Type
          </Label>

          <SelectInput {...register("assetType")}>
            {OPTIONS.map((option) => (
              <option key={option.value} value={option.label}>
                {option.label}
              </option>
            ))}
          </SelectInput>
          <Label fontSize="12px" textColor="yellow">
            Learn more
          </Label>
          <br />

          <ContainerSelectImage>
            {!!imageNft ? (
              <ContainerImage>
                <img
                  src={imageNft}
                  className=" rounded-xl  object-cover w-[129px] h-[129px]  "
                />
              </ContainerImage>
            ) : (
              <ContainerImage />
            )}
            <SelectImageRight>
              <ContainerButtonSelect>
                <ImageUploadButton>
                  Change
                  <Controller
                    name="image"
                    control={control}
                    render={({ field }) => (
                      <HiddenInput
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={(e) => {
                          field.onChange(e);
                          onChangFile(e);
                        }}
                      />
                    )}
                  />
                </ImageUploadButton>
                <ImageUploadButton onClick={removeImage}>
                  Remove
                </ImageUploadButton>
              </ContainerButtonSelect>
              <ContainerLabel>
                <Label textColor="" fontSize="">
                  Filename: curve-arrow-pointing-left.psd
                </Label>
                <Label textColor="" fontSize="">
                  Format: *.psd
                </Label>
                <Label textColor="" fontSize="">
                  Max size per file: 20 MB
                </Label>
                <Label textColor="" fontSize="">
                  Image will be visible to others after moderation.
                </Label>
              </ContainerLabel>
            </SelectImageRight>
          </ContainerSelectImage>

          <Label textColor="" fontSize="">
            Name*
          </Label>

          <Input
            type="text"
            placeholder="curve-arrow-pointing-left"
            {...register("name")}
          />

          <Label textColor="" fontSize="12px">
            25/50 characters
          </Label>
          <br />
          <Label textColor="" fontSize="">
            Description*
          </Label>

          <TextArea
            placeholder="curve-arrow-pointing-left"
            {...register("description")}
          />
          <Label textColor="" fontSize="12px">
            5/1000 characters
          </Label>

          <ContainerButton>
            <Button type="submit">Upload NFT</Button>
          </ContainerButton>
        </Form>
      </WrapperUpload>
      </Wrapper>
        
    </MainLayout>
  );
};

export default UploadAsset;
const Wrapper = styled.div`
display: flex;
  align-items: start;
  
   width: 100%;
  padding: 81px 90px;
  max-width: 1847px;
`
const WrapperUpload = styled.div`
  /* margin: 64px 0 105px 0; */
  color: white;
  width: 850px;
  /* margin: 0 auto; */
  padding: 24px 36px;
  border: 1px solid #1647cf;

  /* border-color: linear-gradient(90deg, #021491 -16.29%, #1647CF 106.35%); */

  border-radius: 8px;
  background: linear-gradient(0deg, #00062b, #00062b),
    linear-gradient(90deg, #021491 -16.29%, #1647cf 106.35%);
`;

const ContainerBack = styled.div`
    margin-right: 391px;
`
const ButtonBack = styled.button`
   
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label<StyledLabelProps>`
  font-size: ${(props) => props.fontSize || "14px"};
  color: ${(props) => (props.textColor !== "yellow" ? "#FFFFFF" : "#FED73B")};
`;

const ImageUploadButton = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 304px;
  padding: 10px;
  border: 1px solid #fed73b;
  background: linear-gradient(0deg, #000000, #000000),
    linear-gradient(0deg, #fed73b, #fed73b);

  color: #fed73b;

  border-radius: 4px;
  cursor: pointer;
`;

const ContainerSelectImage = styled.div`
  display: flex;
  gap: 24px;
`;

const SelectImageRight = styled.div``;
const ContainerLabel = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 17px;
`;
const ContainerButtonSelect = styled.div`
  display: flex;
  gap: 13px;
`;
const ContainerImage = styled.div`
  width: 129px;
  height: 129px;
  border: 1px solid rgba(62, 111, 255, 1);
  background: linear-gradient(0deg, #121949, #121949),
    linear-gradient(0deg, #3e6fff, #3e6fff);
  border-radius: 8px;
`;

const HiddenInput = styled.input`
  display: none;
`;

const Input = styled.input`
  margin: 8px 0 13px 0;
  padding: 16px 12px;
  font-size: 16px;
  background: linear-gradient(0deg, #121949, #121949),
    linear-gradient(0deg, #3e6fff, #3e6fff);
  option {
    background-color: #fff;
    color: #333;
  }
  border: 0.5px solid rgba(62, 111, 255, 1);
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  height: 130px;
  margin: 8px 0 13px 0;
  padding: 16px 12px;
  font-size: 16px;
  background: linear-gradient(0deg, #121949, #121949),
    linear-gradient(0deg, #3e6fff, #3e6fff);
  option {
    background-color: #fff;
    color: #333;
  }
  border: 0.5px solid rgba(62, 111, 255, 1);
  border-radius: 4px;
`;

const ContainerButton = styled.div`
  display: flex;

  margin: 24px 0;
  justify-content: end;
`;
const Button = styled.button`
  width: 137px;
  height: 53px;
  padding: 10px;
  background-color: #fed73b;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 24px;
  color: #000000;
`;

const SelectInput = styled.select`
  margin: 8px 0 13px 0;
  padding: 16px 12px;
  font-size: 16px;
  background: linear-gradient(0deg, #121949, #121949),
    linear-gradient(0deg, #3e6fff, #3e6fff);
  option {
    background-color: #fff;
    color: #333;
  }
  border: 0.5px solid rgba(62, 111, 255, 1);
  border-radius: 4px;
  &:focus {
    outline: none;
  }
`;

const OPTIONS = [
  {
    value: "1",
    label: "NFT Skins",
  },
  {
    value: "2",
    label: "Character weapons",
  },
  {
    value: "3",
    label: "Map",
  },
  {
    value: "4",
    label: "Worlds",
  },
];