import { ButtonProps } from './Button.interface';
import { Button as AntdButton, ButtonProps as AntdButtonProps, ConfigProvider } from 'antd';
import { colorGroup, border } from '../../theme';

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  label,
  ...props
}: ButtonProps) => {
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
      <AntdButton
        {...props as AntdButtonProps}
      >
        {label}
      </AntdButton>
    </ConfigProvider>
  );
};
