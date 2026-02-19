import {
  Navbar as HeroUINavebar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Dropdown,
  DropdownTrigger,
  Avatar,
  DropdownMenu,
  DropdownItem,
} from "@heroui/react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function NavBar() {
  const { UserToken, removeToken } = useContext(AuthContext);

  const navigate = useNavigate();

  function handelLogout() {
    console.log("click");
    removeToken();
    navigate("/login");
  }
  return (
    <HeroUINavebar className="border-b-1 border-b-gray-500">
      <NavbarBrand as={Link} to="/">
        <p className="font-bold text-inherit">Kudo</p>
      </NavbarBrand>

      <NavbarContent justify="end">
        {UserToken ? (
          <Dropdown placement="bottom-end">
            <DropdownTrigger >
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="secondary"
                name="Jason Hughes"
                size="sm"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">zoey@example.com</p>
              </DropdownItem>
              <DropdownItem key="user_profile" as={Link} to="/profile">
                Profile
              </DropdownItem>
              <DropdownItem key="logout" color="danger" onClick={handelLogout}>
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        ) : (
          <>
            <NavbarItem className="">
              <Link className="text-blue-700" to="/login">
                Login
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} color="primary" to="/register" variant="flat">
                Sign Up
              </Button>
            </NavbarItem>
          </>
        )}
      </NavbarContent>
    </HeroUINavebar>
  );
}
