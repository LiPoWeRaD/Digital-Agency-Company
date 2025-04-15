import BoxLogo from "../svg/boxLogo";
import SquareUp from "../svg/squareUp";

const Logo = () => {
    return (
        <div className="flex items-center gap-x-2.5">
            <BoxLogo className="px-[11px] py-[9px] bg-green50 rounded-[8px]"/>
            <SquareUp />
        </div>
    );
};

export default Logo;