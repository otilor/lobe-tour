/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  ChartBarIcon,
  CursorClickIcon,
  DocumentReportIcon,
  MenuIcon,
  RefreshIcon,
  ShieldCheckIcon,
  ViewGridIcon,
  XIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";

const solutions = [
  {
    name: "Analytics",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#",
    icon: ChartBarIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: CursorClickIcon,
  },
  {
    name: "Security",
    description: "Your customers' data will be safe and secure.",
    href: "#",
    icon: ShieldCheckIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
    icon: ViewGridIcon,
  },
  {
    name: "Automations",
    description:
      "Build strategic funnels that will drive your customers to convert",
    href: "#",
    icon: RefreshIcon,
  },
  {
    name: "Reports",
    description:
      "Get detailed reports that will help you make more informed decisions ",
    href: "#",
    icon: DocumentReportIcon,
  },
];
const resources = [
  {
    name: "Help Center",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "#",
  },
  {
    name: "Guides",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "#",
  },
  {
    name: "Events",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "#",
  },
  {
    name: "Security",
    description: "Understand how we take your privacy seriously.",
    href: "#",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Popover className="relative bg-white">
      <div className="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10 -mt-3">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <a href="#" className="ml-20">
            {/* <span className="sr-only">Workflow</span> */}
            <svg
              width="80px"
              height="52px"
              viewBox="0 0 196 52"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <path
                  d="M14.7318403,-3.55271368e-15 L23.7444592,-3.13837756e-15 C27.3105342,-3.7934549e-15 28.6036791,0.371302445 29.9073828,1.06853082 C31.2110865,1.76575919 32.2342408,2.78891348 32.9314692,4.09261719 C33.6286976,5.39632089 34,6.68946584 34,10.2555408 L34,23.7444592 C34,27.3105342 33.6286976,28.6036791 32.9314692,29.9073828 C32.2342408,31.2110865 31.2110865,32.2342408 29.9073828,32.9314692 C28.6036791,33.6286976 27.3105342,34 23.7444592,34 L10.2555408,34 C6.68946584,34 5.39632089,33.6286976 4.09261719,32.9314692 C2.78891348,32.2342408 1.76575919,31.2110865 1.06853082,29.9073828 C0.371302445,28.6036791 -1.02954229e-16,27.3105342 1.77192988e-16,23.7444592 L0,15.0409072 L0,15.0409072 L14.7318403,-3.55271368e-15 Z"
                  id="header-logo-path-1"
                ></path>
                <path
                  d="M10.2555408,-3.9670498e-15 L23.7444592,-3.13837756e-15 C27.3105342,-3.7934549e-15 28.6036791,0.371302445 29.9073828,1.06853082 C31.2110865,1.76575919 32.2342408,2.78891348 32.9314692,4.09261719 C33.6286976,5.39632089 34,6.68946584 34,10.2555408 L34,19 L34,19 L19.5,34 L10.2555408,34 C6.68946584,34 5.39632089,33.6286976 4.09261719,32.9314692 C2.78891348,32.2342408 1.76575919,31.2110865 1.06853082,29.9073828 C0.371302445,28.6036791 1.60494146e-16,27.3105342 -2.76224082e-16,23.7444592 L2.76224082e-16,10.2555408 C-1.60494146e-16,6.68946584 0.371302445,5.39632089 1.06853082,4.09261719 C1.76575919,2.78891348 2.78891348,1.76575919 4.09261719,1.06853082 C5.39632089,0.371302445 6.68946584,-3.31197246e-15 10.2555408,-3.9670498e-15 Z"
                  id="header-logo-path-3"
                ></path>
                <path
                  d="M33.999,18 L34,23.7444592 C34,27.3105342 33.6286976,28.6036791 32.9314692,29.9073828 C32.2342408,31.2110865 31.2110865,32.2342408 29.9073828,32.9314692 C28.6036791,33.6286976 27.3105342,34 23.7444592,34 L18,34 L18,28.2555408 C18,24.6894658 18.3713024,23.3963209 19.0685308,22.0926172 C19.7657592,20.7889135 20.7889135,19.7657592 22.0926172,19.0685308 C23.3963209,18.3713024 24.6894658,18 28.2555408,18 L33.999,18 Z"
                  id="header-logo-path-5"
                ></path>
              </defs>
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g>
                  <path
                    d="M9.13638752,50.1738853 L9.13638752,0.275153484 L-4.54747351e-13,0.275153484 L-4.54747351e-13,50.1738853 L9.13638752,50.1738853 Z M32.6507879,51.2983638 C43.4738931,51.2983638 51.2749625,43.5675744 51.2749625,32.1822299 C51.2749625,20.7968855 43.4738931,13.066096 32.6507879,13.066096 C21.7574028,13.066096 13.9563335,20.7968855 13.9563335,32.1822299 C13.9563335,43.5675744 21.7574028,51.2983638 32.6507879,51.2983638 Z M32.6507879,43.5675744 C26.9581157,43.5675744 23.2332808,39.1399404 23.2332808,32.1822299 C23.2332808,25.3650792 26.9581157,20.7968855 32.6507879,20.7968855 C38.2731802,20.7968855 41.9980152,25.3650792 41.9980152,32.1822299 C41.9980152,39.1399404 38.2731802,43.5675744 32.6507879,43.5675744 Z M75.8435614,51.157804 C84.979949,51.157804 91.7970997,43.7081342 91.7970997,32.1822299 C91.7970997,20.7968855 85.1205088,13.2066558 75.9138414,13.2066558 C71.2753677,13.2066558 67.6910926,14.8230936 65.0907361,18.0559692 L65.0907361,0.275153484 L55.9543486,0.275153484 L55.9543486,50.1738853 L64.458217,50.1738853 L64.458217,45.6056916 C66.9882935,49.3305265 70.7834084,51.157804 75.8435614,51.157804 Z M73.7351643,43.2161748 C68.4641715,43.2161748 64.7393366,38.9993806 64.7393366,32.1822299 C64.7393366,25.4353591 68.4641715,21.0780051 73.8054442,21.0780051 C79.1467169,21.0780051 82.5201523,25.4353591 82.5201523,32.1822299 C82.5201523,38.9291007 79.0061571,43.2161748 73.7351643,43.2161748 Z M113.976182,51.2983638 C120.090534,51.2983638 124.939847,49.4008064 130,44.2703734 L124.869567,38.6479811 C122.62061,40.5455385 120.793333,41.8105768 119.317455,42.5133758 C117.911857,43.2161748 116.225139,43.5675744 114.187022,43.5675744 C108.21323,43.5675744 104.910074,40.1238591 104.066715,34.5717466 L129.85944,34.5717466 C129.92972,33.5175481 130,32.3227897 130,30.9874715 C130,19.7426869 123.955928,13.066096 113.203103,13.066096 C102.028598,13.066096 95.1411676,21.2185649 95.1411676,32.3930696 C95.1411676,43.848694 102.379998,51.2983638 113.976182,51.2983638 Z M121.074452,28.0357156 L104.277555,28.0357156 C105.331754,23.1864022 108.21323,20.2346462 112.921983,20.2346462 C117.771297,20.2346462 120.723053,23.1864022 121.074452,28.0357156 Z"
                    fill-opacity="0.80345826"
                    fill="#000000"
                    fill-rule="nonzero"
                  ></path>
                  <g transform="translate(144.000000, 0.000000)">
                    <g transform="translate(18.000000, 18.000000)">
                      <mask fill="white">
                        <use xlinkHref="#header-logo-path-1"></use>
                      </mask>
                      <use
                        fill="#F34747"
                        fill-rule="nonzero"
                        transform="translate(17.000000, 17.000000) rotate(-360.000000) translate(-17.000000, -17.000000) "
                        xlinkHref="#header-logo-path-1"
                      ></use>
                    </g>
                    <g>
                      <mask fill="white">
                        <use xlinkHref="#header-logo-path-3"></use>
                      </mask>
                      <use
                        fill="#00DDB3"
                        fill-rule="nonzero"
                        transform="translate(17.000000, 17.000000) rotate(-360.000000) translate(-17.000000, -17.000000) "
                        xlinkHref="#header-logo-path-3"
                      ></use>
                    </g>
                    <mask fill="white">
                      <use xlinkHref="#header-logo-path-5"></use>
                    </mask>
                    <use
                      fill="#333333"
                      fill-rule="nonzero"
                      xlinkHref="#header-logo-path-5"
                    ></use>
                  </g>
                </g>
              </g>
            </svg>
          </a>
        </div>
        <div className="-mr-2 -my-2 md:hidden">
          <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span className="sr-only">Open menu</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <Popover.Group as="nav" className="hidden md:flex space-x-10">
          <a
            href="#"
            className="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            Overview
          </a>
          <a
            href="#"
            className="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            Examples
          </a>
          <a
            href="#"
            className="text-base font-medium text-gray-900 hover:text-gray-900"
          >
            Tour
          </a>
          <a
            href="#"
            className="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            Blog
          </a>
          <a
            href="#"
            className="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            Help
          </a>
        </Popover.Group>
        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0"></div>
      </div>
      

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid grid-cols-1 gap-7">
                  {solutions.map((solution) => (
                    <a
                      key={solution.name}
                      href={solution.href}
                      className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                    >
                      <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white">
                        <solution.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <div className="ml-4 text-base font-medium text-gray-900">
                        {solution.name}
                      </div>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5">
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Pricing
                </a>

                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Docs
                </a>

                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Enterprise
                </a>
                {resources.map((resource) => (
                  <a
                    key={resources.name}
                    href={resource.href}
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    {resource.name}
                  </a>
                ))}
              </div>
              <div className="mt-6">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Sign up
                </a>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?{" "}
                  <a href="#" className="text-indigo-600 hover:text-indigo-500">
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
