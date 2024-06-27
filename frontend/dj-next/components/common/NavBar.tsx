'use client'

import { Disclosure, Menu, Transition } from "@headlessui/react";
import { FunctionComponent, Fragment, useEffect, useState } from "react";
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from "next/link";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { useLogoutMutation } from "@/redux/features/authApiSlice";
import { logout as setLogout } from "@/redux/features/authSlice";
import { usePathname, useRouter } from "next/navigation";
import NavLink from "./NavLink";

interface NavBarProps {
    
}


const NavBar: FunctionComponent<NavBarProps> = () => {

    const dispatch = useAppDispatch();

    const pathName = usePathname();

    const router = useRouter();

    const [logout]= useLogoutMutation();

    const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated);

    const isLoading = useAppSelector(state => state.auth.isLoading);

    const [authLoading, setAuthLoading] = useState<boolean>(isLoading);

    useEffect(()=>{
      setAuthLoading(isLoading);
    }, [isLoading])

    const handleLogout = () =>{
        logout(undefined)
            .unwrap()
            .then(()=>{
                dispatch(setLogout());
            })
            .catch(()=>{

            })
            .finally(()=>{
                router.push('/')
            })
    }

    const isSelected = (path: string) => (pathName === path ? true : false);

    const authLinks = (isMobile: boolean) => (
      <>
        <NavLink
          isSelected={isSelected('/dashboard')}
          isMobile={isMobile}
          href='/dashboard'
        >
          Dashboard
        </NavLink>
        <NavLink isMobile={isMobile} onClick={handleLogout}>
          Logout
        </NavLink>
      </>
    );

    const guestLinks = (isMobile: boolean) => (
      <>
        <NavLink
          isSelected={isSelected('/auth/login')}
          isMobile={isMobile}
          href='/auth/login'
        >
          Login
        </NavLink>
        <NavLink
          isSelected={isSelected('/auth/register')}
          isMobile={isMobile}
          href='/auth/register'
        >
          Register
        </NavLink>
      </>
    );

    return ( 
        <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link
                  className="text-white rounded-full font-medium px-3 py-2" 
                    href={'/dashboard'}
                    >
                        Django-Next-Auth
                    </Link>
                </div>
                {authLoading ? (
                  <div>
                    Loading...
                  </div>
                ) : (
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {isAuthenticated
                        ? authLinks(false)
                        : guestLinks(false)}
                    </div>
                  </div>
                ) }
                
              </div>
              
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            {authLoading ? (
              <div>
                Loading...
              </div>
            ) : (
              <div className="space-y-1 px-2 pb-3 pt-2">
                {isAuthenticated
                  ? authLinks(true)
                  : guestLinks(true)}
              </div>
            )}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
     );
}
 
export default NavBar;