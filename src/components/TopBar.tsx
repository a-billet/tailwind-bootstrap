import { AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

export default function TopBar(): JSX.Element {
    return (
        <div className="flex justify-between items-center p-4 h-18">
            <div className="flex items-center gap-4">
                <button className="p-2 bg-blue-extra-light rounded-md">
                    <AppstoreOutlined />
                </button>
                <span className="text-slate-primary text-sm font-semibold">
                    IP DEPOSIT
                </span>
            </div>
            <div className="flex items-center">
                <button className="p-2 bg-blue-extra-light rounded-md">
                    <SettingOutlined className='text-slate-primary' />
                </button>
            </div>
        </div>
    );
}