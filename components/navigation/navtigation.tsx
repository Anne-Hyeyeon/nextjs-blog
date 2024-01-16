import Link from "next/link";
import PaddingContainer from "../layout/padding-container";

const Navtigation = () => {
  return (
    <PaddingContainer>
      <div>
        <Link href="/">Explorer</Link>
        {/* Category Links */}
        <nav>
          <ul>
            <li>
              <Link href="/cities">Cities</Link>
            </li>
            <li>
              <Link href="/experiences">Experiences</Link>
            </li>
          </ul>
        </nav>
      </div>
    </PaddingContainer>
  );
};

export default Navtigation;
