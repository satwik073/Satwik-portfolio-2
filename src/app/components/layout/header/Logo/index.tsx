import Link from 'next/link';

interface HeaderProps { }
const Logo: React.FC<HeaderProps> = () => {
    return (
        <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple_blue text-white font-bold text-lg">
                SK
            </div>
            <span className="font-semibold text-xl text-dark_black dark:text-white">
                Satwik<span className="text-purple_blue">.</span>
            </span>
        </Link>
    );
};

export default Logo;
