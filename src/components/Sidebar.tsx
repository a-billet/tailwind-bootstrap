import VaultinumLogo from "./VaultinumLogo";

export default function Sidebar(): JSX.Element {
    return (
        <div className="w-64 bg-slate-primary text-white">
            <div className="flex place-content-center py-2 border-b h-18">
                <VaultinumLogo width={56} />
            </div>
            <button className="p-6 w-full hover:bg-slate-light text-sm font-semibold">
                Deposits
            </button>
            <button className="p-6 w-full hover:bg-slate-light text-sm font-semibold">
                Overview
            </button>
        </div>
    );
}
