import './button.scss';
import { ButtonProps } from './Button.interface';
import { Button as AntdButton, ButtonProps as AntdButtonProps, ConfigProvider } from 'antd';

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  disabled,
  label,
  ...props
}: ButtonProps) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          colorPrimary: '#00b96b',
          borderRadius: 2,

          // Alias Token
          colorBgContainer: '#f6ffed',
        },
      }}
    >
      <AntdButton className='storybook-button'
        {...props as AntdButtonProps}
      >
        {label}
      </AntdButton>
    </ConfigProvider>
  );
};
