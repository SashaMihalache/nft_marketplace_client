import React, { useCallback, useContext, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { useDropzone } from 'react-dropzone';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { Button, Input } from '../components';

import images from '../assets';

const CreateNFT = () => {
  const { theme } = useTheme();
  const [formInput, setFormInput] = useState({
    price: '',
    name: '',
    description: '',
  });
  const [fileUrl, setFileUrl] = useState(null);

  console.log(formInput);

  const onDrop = useCallback(() => {
    // upload image to IPFS
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragAccept,
    isDragReject,
    isDragActive,
  } = useDropzone({
    onDrop,
    accept: 'image/*',
    maxSize: 5_000_000,
  });

  const fileStyle = useMemo(
    () =>
      `dark:bg-nft-black-1 bg-white border dark:border-white border-nft-gray-2 flex flex-col items-center p-5 rounded-sm border-dashed ${
        isDragActive ? 'border-file-active' : ''
      } ${isDragAccept ? 'border-file-accept' : ''}
      ${isDragReject ? 'border-file-reject' : ''}`,
    [isDragAccept, isDragActive, isDragReject]
  );

  return (
    <div className="flex justify-center sm:px-4 p-12 pt-24">
      <div className="w-3/5 md:w-full">
        <h1 className="font-poppins dark:text-white text-nft-black-1 text-2xl minlg:text-4xl font-semibold sm:mb-4 flex-1">
          Create new NFT
        </h1>

        <div className="mt-16 ">
          <p className="font-poppins dark:text-white text-nft-black-1 font-semibold">
            Upload File
          </p>
          <div className="mt-4">
            <div {...getRootProps()} className={fileStyle}>
              <input {...getInputProps()} />
              <div className="flexCenter flex-col text-center">
                <p className="font-poppins dark:text-white text-nft-black-1 font-semibold">
                  JPG, PNG, GIF, SVG, WEBM, Max 5mb.
                </p>
                <div className="my-12 w-full flex justify-center">
                  <Image
                    src={images.upload}
                    width={100}
                    height={100}
                    alt="file upload"
                    className={theme === 'light' ? 'filter invert' : ''}
                  />
                </div>

                <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-sm">
                  Drag & Drop File
                </p>
                <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-sm mt-2">
                  or Browse media on your computer
                </p>
              </div>
            </div>
            {fileUrl && (
              <aside>
                <div>
                  <img src={fileUrl} alt="asset_file" />
                </div>
              </aside>
            )}
          </div>
        </div>

        <Input
          inputType="input"
          title="Name"
          placeholder="NFT name"
          handleClick={(e) => {
            setFormInput({ ...formInput, name: e.target.value });
          }}
        />
        <Input
          inputType="textarea"
          title="Description"
          placeholder="NFT Description"
          handleClick={(e) => {
            setFormInput({ ...formInput, description: e.target.value });
          }}
        />
        <Input
          inputType="number"
          title="Price"
          placeholder="NFT Price"
          handleClick={(e) => {
            setFormInput({ ...formInput, price: e.target.value });
          }}
        />

        <div className="mt-7 w-full flex justify-end">
          <Button btnName={'Create NFT'} handleClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default CreateNFT;
