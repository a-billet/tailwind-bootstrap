import LargeLogo from "./logo-vaultinum-light.png";

export default function VaultinumLogo({ width = 300, className }: { width?: number; className?: string }): JSX.Element {
    return <img src={LargeLogo} alt="Vaultinum Logo" width={width} className={className} />;
}
