export interface InputProps {
    /*
     * Disable state of Input
     */
    disabled?: boolean;
    /**
     * contents
     */
    placeholder?: string;
    /**
     * Set the size of Input
     */
    size?: 'large' | 'middle' | 'small';
    /**
     * contents
     */
    status?: 'error' | 'warning';
    /**
     * contents
     */
    showCount?: boolean;
    /**
     * contents
     */
    defaultValue?: string;
    /**
     * Set the variant of Input
     */
    variant?: 'outlined' | 'borderless' | 'filled';
}