import './button.scss';
import { ButtonProps } from './Button.interface';
import { Button as AntdButton, ButtonProps as AntdButtonProps } from 'antd';

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  label,
  ...props
}: ButtonProps) => {
  return (
    <AntdButton
      {...props as AntdButtonProps}
    >
      {label + ' test'}
    </AntdButton>
  );
};
