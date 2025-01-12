import Link from "next/link";
import { Button } from "../ui/button";
import UserMenu from "./user-menu";
import { User } from "@supabase/supabase-js";

interface NavbarProps {
  user: User | null;
}

const Navbar = ({ user }: NavbarProps) => {
  return (
    <div className="bg-white">
      <div className="flex max-w-7xl mx-auto p-8 items-center">
        <div className="flex-1">
          <Link href="/">logo</Link>
        </div>

        <div>
          {user ? (
            <div className="flex gap-8 items-center">
              <Link
                href="/courses"
                className="uppercase font-bold underline hover:no-underline"
              >
                Corsi
              </Link>
              <UserMenu user={user} />
            </div>
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
