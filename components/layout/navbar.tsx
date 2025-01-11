import Link from "next/link";
import { Button } from "../ui/button";
import UserMenu from "./user-menu";

interface NavbarProps {
  isLoggedIn: boolean;
}

const Navbar = ({ isLoggedIn }: NavbarProps) => {
  return (
    <div className="bg-white">
      <div className="flex max-w-7xl mx-auto p-8 items-center">
        <div className="flex-1">logo</div>
        <div>
          {isLoggedIn ? (
            <UserMenu />
          ) : (
            <Button variant="outline" asChild>
              <Link href="/login">login</Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
