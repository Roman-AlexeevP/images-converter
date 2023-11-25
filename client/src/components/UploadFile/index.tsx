import React from 'react';
import { UploadFileContainer } from './style';

import { InboxOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { message, Upload } from 'antd';
import { RcFile } from 'antd/es/upload';

const { Dragger } = Upload;


export const UploadFile: React.FC = () => {
  const props: UploadProps = {
    name: 'file',
    // accept: '.zip, .tar, .rar',
    multiple: false,
    action: (file: RcFile): string => {
      console.log("action", file);
      message.success(`${file.name} file uploaded successfully.`);
      return ''
    },
    onChange(info) {
      // console.log(info.file);

      // const { status } = info.file;
      // console.log("info", info);
      // if (status !== 'uploading') {
      //   console.log(info.file, info.fileList);
      // }
      // if (status === 'done') {
      //   message.success(`${info.file.name} file uploaded successfully.`);
      // } else if (status === 'error') {
      //   message.error(`${info.file.name} file upload failed.`);
      // }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };
  return (
    <UploadFileContainer>
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">Click or drag file to this area to upload</p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibited from uploading company data or other
          banned files.
        </p>
      </Dragger>
    </UploadFileContainer>
  );
};
