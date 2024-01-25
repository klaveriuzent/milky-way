export interface ButtonProps {
    /**
     * Disable state of button
     */
    disabled: boolean;
    /**
     * Button contents
     */
    label: string;
    /**
     * Button contents
     */
    loading: boolean;
    /**
     * Set the size of button
     */
    size?: 'large' | 'middle' | 'small';
    /**
     * Set button type
     */
    type?: 'default' | 'primary' | 'dashed' | 'link' | 'text';
    /**
     * Optional click handler
     */
    onClick?: () => void;
}