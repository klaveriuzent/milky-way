export interface ButtonProps {
    /**
     * Disable state of button
     */
    disabled?: boolean;
    /**
     * Button contents
     */
    label: string;
    /**
     * Use this property to indicate that the button is in loading mode.
     * Can be written in a short form (loading) or explicitly (loading={true}).
     */
    loading?: boolean;
    /**
     * Set the size of button
     */
    size?: 'large' | 'middle' | 'small';
    /**
     * Set the button type
     */
    type?: 'default' | 'primary' | 'dashed' | 'link' | 'text';
    /**
     * Optional click handler
     */
    onClick?: () => void;
}