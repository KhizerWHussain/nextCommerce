import React from "react";
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  Menu as Bars3Icon,
  Search as MagnifyingGlassIcon,
  ShoppingBagOutlined as ShoppingBagIcon,
} from "@mui/icons-material";
import { navigationData } from "@/data/header";

type WebHeaderProp = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const WebHeader = ({ setOpen }: WebHeaderProp) => {
  return (
    <header className="relative bg-white">
      <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
        Get free delivery on orders over $100
      </p>

      <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-b border-gray-200">
          <div className="flex h-16 items-center">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
            >
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>

            {/* Logo */}
            <div className="ml-4 flex lg:ml-0">
              <a href="#">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                />
              </a>
            </div>

            {/* Flyout menus */}
            <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
              <div className="flex h-full space-x-8">
                {navigationData.categories.map((category: any, i: number) => (
                  <Popover key={category.name} className="flex">
                    <div className="relative flex">
                      <PopoverButton className="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800 data-[open]:border-indigo-600 data-[open]:text-indigo-600">
                        {category.name}
                      </PopoverButton>
                    </div>

                    <PopoverPanel
                      transition
                      className="absolute inset-x-0 top-full text-sm text-gray-500 transition data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                      {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 top-1/2 bg-white shadow"
                      />

                      <div className="relative bg-white">
                        <div className="mx-auto max-w-7xl px-8">
                          <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                            <div className="col-start-2 grid grid-cols-2 gap-x-8">
                              {category.featured.map((item: any, i: number) => (
                                <div
                                  key={item.name}
                                  className="group relative text-base sm:text-sm"
                                >
                                  <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                    <img
                                      alt={item.imageAlt}
                                      src={item.imageSrc}
                                      className="object-cover object-center"
                                    />
                                  </div>
                                  <a
                                    href={item.href}
                                    className="mt-6 block font-medium text-gray-900"
                                  >
                                    <span
                                      aria-hidden="true"
                                      className="absolute inset-0 z-10"
                                    />
                                    {item.name}
                                  </a>
                                  <p aria-hidden="true" className="mt-1">
                                    Shop now
                                  </p>
                                </div>
                              ))}
                            </div>
                            <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                              {category.sections.map(
                                (section: any, i: number) => (
                                  <div key={section.name}>
                                    <p
                                      id={`${section.name}-heading`}
                                      className="font-medium text-gray-900"
                                    >
                                      {section.name}
                                    </p>
                                    <ul
                                      role="list"
                                      aria-labelledby={`${section.name}-heading`}
                                      className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                    >
                                      {section.items.map(
                                        (item: any, i: number) => (
                                          <li key={item.name} className="flex">
                                            <a
                                              href={item.href}
                                              className="hover:text-gray-800"
                                            >
                                              {item.name}
                                            </a>
                                          </li>
                                        )
                                      )}
                                    </ul>
                                  </div>
                                )
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </PopoverPanel>
                  </Popover>
                ))}

                {navigationData.pages.map((page: any, i: number) => (
                  <a
                    key={page.name}
                    href={page.href}
                    className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    {page.name}
                  </a>
                ))}
              </div>
            </PopoverGroup>

            <div className="ml-auto flex items-center">
              <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                <a
                  href="#"
                  className="text-sm font-medium text-gray-700 hover:text-gray-800"
                >
                  Sign in
                </a>
                <span aria-hidden="true" className="h-6 w-px bg-gray-200" />
                <a
                  href="#"
                  className="text-sm font-medium text-gray-700 hover:text-gray-800"
                >
                  Create account
                </a>
              </div>

              <div className="hidden lg:ml-8 lg:flex">
                <a
                  href="#"
                  className="flex items-center text-gray-700 hover:text-gray-800"
                >
                  <img
                    alt=""
                    src="https://tailwindui.com/plus/img/flags/flag-canada.svg"
                    className="block h-auto w-5 flex-shrink-0"
                  />
                  <span className="ml-3 block text-sm font-medium">CAD</span>
                  <span className="sr-only">, change currency</span>
                </a>
              </div>

              {/* Search */}
              <div className="flex lg:ml-6">
                <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Search</span>
                  <MagnifyingGlassIcon aria-hidden="true" className="h-6 w-6" />
                </a>
              </div>

              {/* Cart */}
              <div className="ml-4 flow-root lg:ml-6">
                <a href="#" className="group -m-2 flex items-center p-2">
                  <ShoppingBagIcon
                    aria-hidden="true"
                    className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                  />
                  <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                    0
                  </span>
                  <span className="sr-only">items in cart, view bag</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default WebHeader;
