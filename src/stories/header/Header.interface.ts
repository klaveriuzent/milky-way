export interface HeaderProps {
    user?: {
        name: string;
    };
    onLogin: () => void;
    onLogout: () => void;
    onCreateAccount: () => void;
}