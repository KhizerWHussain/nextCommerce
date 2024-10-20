import React, { Fragment } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/react";
import { Close as XMarkIcon } from "@mui/icons-material";
import { navigationData } from "@/data/header";

type MobileHeaderProp = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
};

const MobileHeader = ({ setOpen, open = false }: MobileHeaderProp) => {
  return (
    <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
      />

      <div className="fixed inset-0 z-40 flex">
        <DialogPanel
          transition
          className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full"
        >
          <div className="flex px-4 pb-2 pt-5">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
            >
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>

          <TabGroup className="mt-2">
            <div className="border-b border-gray-200">
              <TabList className="-mb-px flex space-x-8 px-4">
                {navigationData.categories.map((category) => (
                  <Tab
                    key={category.name}
                    className="flex-1 whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-base font-medium text-gray-900 data-[selected]:border-indigo-600 data-[selected]:text-indigo-600"
                  >
                    {category.name}
                  </Tab>
                ))}
              </TabList>
            </div>
            <TabPanels as={Fragment}>
              {navigationData.categories.map((category) => (
                <TabPanel
                  key={category.name}
                  className="space-y-10 px-4 pb-8 pt-10"
                >
                  <div className="grid grid-cols-2 gap-x-4">
                    {category.featured.map((item) => (
                      <div key={item.name} className="group relative text-sm">
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
                  {category.sections.map((section: any, i: number) => (
                    <div key={section.name}>
                      <p
                        id={`${category.id}-${section.id}-heading-mobile`}
                        className="font-medium text-gray-900"
                      >
                        {section.name}
                      </p>
                      <ul
                        role="list"
                        aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                        className="mt-6 flex flex-col space-y-6"
                      >
                        {section.items.map((item: any, i: number) => (
                          <li key={item.name} className="flow-root">
                            <a
                              href={item.href}
                              className="-m-2 block p-2 text-gray-500"
                            >
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </TabPanel>
              ))}
            </TabPanels>
          </TabGroup>

          <div className="space-y-6 border-t border-gray-200 px-4 py-6">
            {navigationData.pages.map((page: any, i: number) => (
              <div key={page.name} className="flow-root">
                <a
                  href={page.href}
                  className="-m-2 block p-2 font-medium text-gray-900"
                >
                  {page.name}
                </a>
              </div>
            ))}
          </div>

          <div className="space-y-6 border-t border-gray-200 px-4 py-6">
            <div className="flow-root">
              <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                Sign in
              </a>
            </div>
            <div className="flow-root">
              <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                Create account
              </a>
            </div>
          </div>

          <div className="border-t border-gray-200 px-4 py-6">
            <a href="#" className="-m-2 flex items-center p-2">
              <img
                alt=""
                src="https://tailwindui.com/plus/img/flags/flag-canada.svg"
                className="block h-auto w-5 flex-shrink-0"
              />
              <span className="ml-3 block text-base font-medium text-gray-900">
                CAD
              </span>
              <span className="sr-only">, change currency</span>
            </a>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default MobileHeader;
