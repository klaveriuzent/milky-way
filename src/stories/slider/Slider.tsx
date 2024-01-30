import { Input as AntdSlider, SliderBaseProps, ConfigProvider } from 'antd';
import { colorGroup, border } from '../../theme';
import { SliderProps } from './Slider.interface';

/**
 * Primary UI component for user interaction
 */
export const Slider = ({
}: SliderProps) => {
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
        <AntdSlider {...SliderBaseProps} />
    </ConfigProvider>
  );
};
