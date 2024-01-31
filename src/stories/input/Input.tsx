import { Input as AntdInput, InputProps as AntdInputProps, ConfigProvider } from 'antd';
import { colorGroup, border } from '../../theme';
import { InputProps } from './Input.interface';

/**
 * Primary UI component for user interaction
 */
export const Input = ({
  disabled = false,
  size = 'middle',
  ...props
}: InputProps) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          colorPrimary: colorGroup.Primary,
          borderRadius: border.radius,
        },
      }}
    >
      <AntdInput
        {...props as AntdInputProps} />
    </ConfigProvider>
  );
};
