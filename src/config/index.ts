const DOCS_PATH = "/docs";
const COMPONENTS_PATH = "/docs/components";

function getDocsComponentPath(component: string): string {
  return `#${component}`;
  // return `${COMPONENTS_PATH}/${component}`;
}

export const siteConfig = {
  title: "React Aria UI",
  description: "A modern React Aria UI library",

  paths: {
    docs: DOCS_PATH,
    components: {
      index: COMPONENTS_PATH,
      "alert-dialog": getDocsComponentPath("alert-dialog"),
      breadcrumbs: getDocsComponentPath("breadcrumbs"),
      button: getDocsComponentPath("button"),
      calendar: getDocsComponentPath("calendar"),
      "checkbox-group": getDocsComponentPath("checkbox-group"),
      checkbox: getDocsComponentPath("checkbox"),
      combobox: getDocsComponentPath("combobox"),
      "date-field": getDocsComponentPath("date-field"),
      "date-picker": getDocsComponentPath("date-picker"),
      "date-range-picker": getDocsComponentPath("date-range-picker"),
      form: getDocsComponentPath("form"),
      "grid-list": getDocsComponentPath("grid-list"),
      link: getDocsComponentPath("link"),
      "list-box": getDocsComponentPath("list-box"),
      menu: getDocsComponentPath("menu"),
      meter: getDocsComponentPath("meter"),
      "number-field": getDocsComponentPath("number-field"),
      popover: getDocsComponentPath("popover"),
      "progress-bar": getDocsComponentPath("progress-bar"),
      "radio-group": getDocsComponentPath("radio-group"),
      "range-calendar": getDocsComponentPath("range-calendar"),
      "search-field": getDocsComponentPath("search-field"),
      select: getDocsComponentPath("select"),
      slider: getDocsComponentPath("slider"),

      switch: getDocsComponentPath("switch"),
      table: getDocsComponentPath("table"),
      tabs: getDocsComponentPath("tabs"),
      "tag-group": getDocsComponentPath("tag-group"),
      "text-field": getDocsComponentPath("text-field"),
      "time-field": getDocsComponentPath("time-field"),
      "toggle-button": getDocsComponentPath("toggle-button"),
      toolbar: getDocsComponentPath("toolbar"),
      tooltip: getDocsComponentPath("tooltip"),
    },
    blog: "/blog",
    about: "/about",
  },
};

// <section
//             id="product-application-ui-forms"
//             className="grid scroll-mt-12 grid-cols-1 gap-x-8 gap-y-10 py-10 lg:py-12 xl:grid-cols-4"
//           >
//             <h3 className="text-base font-semibold text-slate-900">Forms</h3>
//             <ul className="col-span-3 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 sm:gap-y-10 md:grid-cols-3 xl:gap-x-8">
//               <li>
//                 <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
//                   <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
//                     <img
//                       src="https://tailwindui.com/plus/img/category-thumbnails/application-ui/form-layouts.png"
//                       alt=""
//                       className="absolute inset-0 h-full w-full"
//                     />
//                   </div>
//                   <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
//                     <a href="https://tailwindui.com/components/application-ui/forms/form-layouts">
//                       <span className="absolute -inset-2.5 z-10"></span>
//                       <span className="relative">Form Layouts</span>
//                     </a>
//                   </h4>
//                   <p className="relative mt-1.5 text-xs font-medium text-slate-500">
//                     5 components
//                   </p>
//                 </div>
//               </li>
//               <li>
//                 <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
//                   <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
//                     <img
//                       src="https://tailwindui.com/plus/img/category-thumbnails/application-ui/input-groups.png"
//                       alt=""
//                       className="absolute inset-0 h-full w-full"
//                     />
//                   </div>
//                   <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
//                     <a href="https://tailwindui.com/components/application-ui/forms/input-groups">
//                       <span className="absolute -inset-2.5 z-10"></span>
//                       <span className="relative">Input Groups</span>
//                     </a>
//                   </h4>
//                   <p className="relative mt-1.5 text-xs font-medium text-slate-500">
//                     21 components
//                   </p>
//                 </div>
//               </li>
//               <li>
//                 <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
//                   <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
//                     <img
//                       src="https://tailwindui.com/plus/img/category-thumbnails/application-ui/select-menus.png"
//                       alt=""
//                       className="absolute inset-0 h-full w-full"
//                     />
//                   </div>
//                   <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
//                     <a href="https://tailwindui.com/components/application-ui/forms/select-menus">
//                       <span className="absolute -inset-2.5 z-10"></span>
//                       <span className="relative">Select Menus</span>
//                     </a>
//                   </h4>
//                   <p className="relative mt-1.5 text-xs font-medium text-slate-500">
//                     7 components
//                   </p>
//                 </div>
//               </li>
//               <li>
//                 <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
//                   <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
//                     <img
//                       src="https://tailwindui.com/plus/img/category-thumbnails/application-ui/sign-in-forms.png"
//                       alt=""
//                       className="absolute inset-0 h-full w-full"
//                     />
//                   </div>
//                   <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
//                     <a href="https://tailwindui.com/components/application-ui/forms/sign-in-forms">
//                       <span className="absolute -inset-2.5 z-10"></span>
//                       <span className="relative">Sign-in and Registration</span>
//                     </a>
//                   </h4>
//                   <p className="relative mt-1.5 text-xs font-medium text-slate-500">
//                     5 components
//                   </p>
//                 </div>
//               </li>
//               <li>
//                 <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
//                   <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
//                     <img
//                       src="https://tailwindui.com/plus/img/category-thumbnails/application-ui/textareas.png"
//                       alt=""
//                       className="absolute inset-0 h-full w-full"
//                     />
//                   </div>
//                   <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
//                     <a href="https://tailwindui.com/components/application-ui/forms/textareas">
//                       <span className="absolute -inset-2.5 z-10"></span>
//                       <span className="relative">Textareas</span>
//                     </a>
//                   </h4>
//                   <p className="relative mt-1.5 text-xs font-medium text-slate-500">
//                     5 components
//                   </p>
//                   <p className="pointer-events-none absolute top-3 right-3 z-10 flex items-center justify-center rounded-full bg-gray-900/30 p-1 text-white">
//                     <span className="sr-only">
//                       PNG previews only, upgrade to get the HTML.
//                     </span>
//                     <svg
//                       aria-hidden="true"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       className="size-6"
//                     >
//                       <path
//                         d="M5.75 11.75a1 1 0 011-1h10.5a1 1 0 011 1v5.5a2 2 0 01-2 2h-8.5a2 2 0 01-2-2v-5.5zM7.75 10.5v-.157c0-1.562-.094-3.302.996-4.42C9.368 5.288 10.374 4.75 12 4.75c1.626 0 2.632.537 3.254 1.174 1.09 1.117.996 2.857.996 4.419v.157"
//                         stroke="#fff"
//                         stroke-width="1.5"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                       ></path>
//                     </svg>
//                   </p>
//                 </div>
//               </li>
//               <li>
//                 <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
//                   <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
//                     <img
//                       src="https://tailwindui.com/plus/img/category-thumbnails/application-ui/radio-groups.png"
//                       alt=""
//                       className="absolute inset-0 h-full w-full"
//                     />
//                   </div>
//                   <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
//                     <a href="https://tailwindui.com/components/application-ui/forms/radio-groups">
//                       <span className="absolute -inset-2.5 z-10"></span>
//                       <span className="relative">Radio Groups</span>
//                     </a>
//                   </h4>
//                   <p className="relative mt-1.5 text-xs font-medium text-slate-500">
//                     12 components
//                   </p>
//                   <p className="pointer-events-none absolute top-3 right-3 z-10 flex items-center justify-center rounded-full bg-gray-900/30 p-1 text-white">
//                     <span className="sr-only">
//                       PNG previews only, upgrade to get the HTML.
//                     </span>
//                     <svg
//                       aria-hidden="true"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       className="size-6"
//                     >
//                       <path
//                         d="M5.75 11.75a1 1 0 011-1h10.5a1 1 0 011 1v5.5a2 2 0 01-2 2h-8.5a2 2 0 01-2-2v-5.5zM7.75 10.5v-.157c0-1.562-.094-3.302.996-4.42C9.368 5.288 10.374 4.75 12 4.75c1.626 0 2.632.537 3.254 1.174 1.09 1.117.996 2.857.996 4.419v.157"
//                         stroke="#fff"
//                         stroke-width="1.5"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                       ></path>
//                     </svg>
//                   </p>
//                 </div>
//               </li>
//               <li>
//                 <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
//                   <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
//                     <img
//                       src="https://tailwindui.com/plus/img/category-thumbnails/application-ui/checkboxes.png"
//                       alt=""
//                       className="absolute inset-0 h-full w-full"
//                     />
//                   </div>
//                   <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
//                     <a href="https://tailwindui.com/components/application-ui/forms/checkboxes">
//                       <span className="absolute -inset-2.5 z-10"></span>
//                       <span className="relative">Checkboxes</span>
//                     </a>
//                   </h4>
//                   <p className="relative mt-1.5 text-xs font-medium text-slate-500">
//                     4 components
//                   </p>
//                   <p className="pointer-events-none absolute top-3 right-3 z-10 flex items-center justify-center rounded-full bg-gray-900/30 p-1 text-white">
//                     <span className="sr-only">
//                       PNG previews only, upgrade to get the HTML.
//                     </span>
//                     <svg
//                       aria-hidden="true"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       className="size-6"
//                     >
//                       <path
//                         d="M5.75 11.75a1 1 0 011-1h10.5a1 1 0 011 1v5.5a2 2 0 01-2 2h-8.5a2 2 0 01-2-2v-5.5zM7.75 10.5v-.157c0-1.562-.094-3.302.996-4.42C9.368 5.288 10.374 4.75 12 4.75c1.626 0 2.632.537 3.254 1.174 1.09 1.117.996 2.857.996 4.419v.157"
//                         stroke="#fff"
//                         stroke-width="1.5"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                       ></path>
//                     </svg>
//                   </p>
//                 </div>
//               </li>
//               <li>
//                 <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
//                   <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
//                     <img
//                       src="https://tailwindui.com/plus/img/category-thumbnails/application-ui/toggles.png"
//                       alt=""
//                       className="absolute inset-0 h-full w-full"
//                     />
//                   </div>
//                   <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
//                     <a href="https://tailwindui.com/components/application-ui/forms/toggles">
//                       <span className="absolute -inset-2.5 z-10"></span>
//                       <span className="relative">Toggles</span>
//                     </a>
//                   </h4>
//                   <p className="relative mt-1.5 text-xs font-medium text-slate-500">
//                     5 components
//                   </p>
//                   <p className="pointer-events-none absolute top-3 right-3 z-10 flex items-center justify-center rounded-full bg-gray-900/30 p-1 text-white">
//                     <span className="sr-only">
//                       PNG previews only, upgrade to get the HTML.
//                     </span>
//                     <svg
//                       aria-hidden="true"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       className="size-6"
//                     >
//                       <path
//                         d="M5.75 11.75a1 1 0 011-1h10.5a1 1 0 011 1v5.5a2 2 0 01-2 2h-8.5a2 2 0 01-2-2v-5.5zM7.75 10.5v-.157c0-1.562-.094-3.302.996-4.42C9.368 5.288 10.374 4.75 12 4.75c1.626 0 2.632.537 3.254 1.174 1.09 1.117.996 2.857.996 4.419v.157"
//                         stroke="#fff"
//                         stroke-width="1.5"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                       ></path>
//                     </svg>
//                   </p>
//                 </div>
//               </li>
//               <li>
//                 <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
//                   <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
//                     <img
//                       src="https://tailwindui.com/plus/img/category-thumbnails/application-ui/action-panels.png"
//                       alt=""
//                       className="absolute inset-0 h-full w-full"
//                     />
//                   </div>
//                   <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
//                     <a href="https://tailwindui.com/components/application-ui/forms/action-panels">
//                       <span className="absolute -inset-2.5 z-10"></span>
//                       <span className="relative">Action Panels</span>
//                     </a>
//                   </h4>
//                   <p className="relative mt-1.5 text-xs font-medium text-slate-500">
//                     8 components
//                   </p>
//                   <p className="pointer-events-none absolute top-3 right-3 z-10 flex items-center justify-center rounded-full bg-gray-900/30 p-1 text-white">
//                     <span className="sr-only">
//                       PNG previews only, upgrade to get the HTML.
//                     </span>
//                     <svg
//                       aria-hidden="true"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       className="size-6"
//                     >
//                       <path
//                         d="M5.75 11.75a1 1 0 011-1h10.5a1 1 0 011 1v5.5a2 2 0 01-2 2h-8.5a2 2 0 01-2-2v-5.5zM7.75 10.5v-.157c0-1.562-.094-3.302.996-4.42C9.368 5.288 10.374 4.75 12 4.75c1.626 0 2.632.537 3.254 1.174 1.09 1.117.996 2.857.996 4.419v.157"
//                         stroke="#fff"
//                         stroke-width="1.5"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                       ></path>
//                     </svg>
//                   </p>
//                 </div>
//               </li>
//               <li>
//                 <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
//                   <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
//                     <img
//                       src="https://tailwindui.com/plus/img/category-thumbnails/application-ui/comboboxes.png"
//                       alt=""
//                       className="absolute inset-0 h-full w-full"
//                     />
//                   </div>
//                   <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
//                     <a href="https://tailwindui.com/components/application-ui/forms/comboboxes">
//                       <span className="absolute -inset-2.5 z-10"></span>
//                       <span className="relative">Comboboxes</span>
//                     </a>
//                   </h4>
//                   <p className="relative mt-1.5 text-xs font-medium text-slate-500">
//                     5 components
//                   </p>
//                   <p className="pointer-events-none absolute top-3 right-3 z-10 flex items-center justify-center rounded-full bg-gray-900/30 p-1 text-white">
//                     <span className="sr-only">
//                       PNG previews only, upgrade to get the HTML.
//                     </span>
//                     <svg
//                       aria-hidden="true"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       className="size-6"
//                     >
//                       <path
//                         d="M5.75 11.75a1 1 0 011-1h10.5a1 1 0 011 1v5.5a2 2 0 01-2 2h-8.5a2 2 0 01-2-2v-5.5zM7.75 10.5v-.157c0-1.562-.094-3.302.996-4.42C9.368 5.288 10.374 4.75 12 4.75c1.626 0 2.632.537 3.254 1.174 1.09 1.117.996 2.857.996 4.419v.157"
//                         stroke="#fff"
//                         stroke-width="1.5"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                       ></path>
//                     </svg>
//                   </p>
//                 </div>
//               </li>
//             </ul>
//           </section>
//           <section
//             id="product-application-ui-feedback"
//             className="grid scroll-mt-12 grid-cols-1 gap-x-8 gap-y-10 py-10 lg:py-12 xl:grid-cols-4"
//           >
//             <h3 className="text-base font-semibold text-slate-900">Feedback</h3>
//             <ul className="col-span-3 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 sm:gap-y-10 md:grid-cols-3 xl:gap-x-8">
//               <li>
//                 <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
//                   <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
//                     <img
//                       src="https://tailwindui.com/plus/img/category-thumbnails/application-ui/alerts.png"
//                       alt=""
//                       className="absolute inset-0 h-full w-full"
//                     />
//                   </div>
//                   <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
//                     <a href="https://tailwindui.com/components/application-ui/feedback/alerts">
//                       <span className="absolute -inset-2.5 z-10"></span>
//                       <span className="relative">Alerts</span>
//                     </a>
//                   </h4>
//                   <p className="relative mt-1.5 text-xs font-medium text-slate-500">
//                     6 components
//                   </p>
//                   <p className="pointer-events-none absolute top-3 right-3 z-10 flex items-center justify-center rounded-full bg-gray-900/30 p-1 text-white">
//                     <span className="sr-only">
//                       PNG previews only, upgrade to get the HTML.
//                     </span>
//                     <svg
//                       aria-hidden="true"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       className="size-6"
//                     >
//                       <path
//                         d="M5.75 11.75a1 1 0 011-1h10.5a1 1 0 011 1v5.5a2 2 0 01-2 2h-8.5a2 2 0 01-2-2v-5.5zM7.75 10.5v-.157c0-1.562-.094-3.302.996-4.42C9.368 5.288 10.374 4.75 12 4.75c1.626 0 2.632.537 3.254 1.174 1.09 1.117.996 2.857.996 4.419v.157"
//                         stroke="#fff"
//                         stroke-width="1.5"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                       ></path>
//                     </svg>
//                   </p>
//                 </div>
//               </li>
//               <li>
//                 <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
//                   <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
//                     <img
//                       src="https://tailwindui.com/plus/img/category-thumbnails/application-ui/empty-states.png"
//                       alt=""
//                       className="absolute inset-0 h-full w-full"
//                     />
//                   </div>
//                   <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
//                     <a href="https://tailwindui.com/components/application-ui/feedback/empty-states">
//                       <span className="absolute -inset-2.5 z-10"></span>
//                       <span className="relative">Empty States</span>
//                     </a>
//                   </h4>
//                   <p className="relative mt-1.5 text-xs font-medium text-slate-500">
//                     6 components
//                   </p>
//                   <p className="pointer-events-none absolute top-3 right-3 z-10 flex items-center justify-center rounded-full bg-gray-900/30 p-1 text-white">
//                     <span className="sr-only">
//                       PNG previews only, upgrade to get the HTML.
//                     </span>
//                     <svg
//                       aria-hidden="true"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       className="size-6"
//                     >
//                       <path
//                         d="M5.75 11.75a1 1 0 011-1h10.5a1 1 0 011 1v5.5a2 2 0 01-2 2h-8.5a2 2 0 01-2-2v-5.5zM7.75 10.5v-.157c0-1.562-.094-3.302.996-4.42C9.368 5.288 10.374 4.75 12 4.75c1.626 0 2.632.537 3.254 1.174 1.09 1.117.996 2.857.996 4.419v.157"
//                         stroke="#fff"
//                         stroke-width="1.5"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                       ></path>
//                     </svg>
//                   </p>
//                 </div>
//               </li>
//             </ul>
//           </section>
//           <section
//             id="product-application-ui-navigation"
//             className="grid scroll-mt-12 grid-cols-1 gap-x-8 gap-y-10 py-10 lg:py-12 xl:grid-cols-4"
//           >
//             <h3 className="text-base font-semibold text-slate-900">
//               Navigation
//             </h3>
//             <ul className="col-span-3 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 sm:gap-y-10 md:grid-cols-3 xl:gap-x-8">
//               <li>
//                 <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
//                   <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
//                     <img
//                       src="https://tailwindui.com/plus/img/category-thumbnails/application-ui/navbars.png"
//                       alt=""
//                       className="absolute inset-0 h-full w-full"
//                     />
//                   </div>
//                   <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
//                     <a href="https://tailwindui.com/components/application-ui/navigation/navbars">
//                       <span className="absolute -inset-2.5 z-10"></span>
//                       <span className="relative">Navbars</span>
//                     </a>
//                   </h4>
//                   <p className="relative mt-1.5 text-xs font-medium text-slate-500">
//                     11 components
//                   </p>
//                 </div>
//               </li>
//               <li>
//                 <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
//                   <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
//                     <img
//                       src="https://tailwindui.com/plus/img/category-thumbnails/application-ui/pagination.png"
//                       alt=""
//                       className="absolute inset-0 h-full w-full"
//                     />
//                   </div>
//                   <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
//                     <a href="https://tailwindui.com/components/application-ui/navigation/pagination">
//                       <span className="absolute -inset-2.5 z-10"></span>
//                       <span className="relative">Pagination</span>
//                     </a>
//                   </h4>
//                   <p className="relative mt-1.5 text-xs font-medium text-slate-500">
//                     3 components
//                   </p>
//                 </div>
//               </li>
//               <li>
//                 <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
//                   <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
//                     <img
//                       src="https://tailwindui.com/plus/img/category-thumbnails/application-ui/tabs.png"
//                       alt=""
//                       className="absolute inset-0 h-full w-full"
//                     />
//                   </div>
//                   <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
//                     <a href="https://tailwindui.com/components/application-ui/navigation/tabs">
//                       <span className="absolute -inset-2.5 z-10"></span>
//                       <span className="relative">Tabs</span>
//                     </a>
//                   </h4>
//                   <p className="relative mt-1.5 text-xs font-medium text-slate-500">
//                     9 components
//                   </p>
//                   <p className="pointer-events-none absolute top-3 right-3 z-10 flex items-center justify-center rounded-full bg-gray-900/30 p-1 text-white">
//                     <span className="sr-only">
//                       PNG previews only, upgrade to get the HTML.
//                     </span>
//                     <svg
//                       aria-hidden="true"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       className="size-6"
//                     >
//                       <path
//                         d="M5.75 11.75a1 1 0 011-1h10.5a1 1 0 011 1v5.5a2 2 0 01-2 2h-8.5a2 2 0 01-2-2v-5.5zM7.75 10.5v-.157c0-1.562-.094-3.302.996-4.42C9.368 5.288 10.374 4.75 12 4.75c1.626 0 2.632.537 3.254 1.174 1.09 1.117.996 2.857.996 4.419v.157"
//                         stroke="#fff"
//                         stroke-width="1.5"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                       ></path>
//                     </svg>
//                   </p>
//                 </div>
//               </li>
//               <li>
//                 <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
//                   <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
//                     <img
//                       src="https://tailwindui.com/plus/img/category-thumbnails/application-ui/vertical-navigation.png"
//                       alt=""
//                       className="absolute inset-0 h-full w-full"
//                     />
//                   </div>
//                   <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
//                     <a href="https://tailwindui.com/components/application-ui/navigation/vertical-navigation">
//                       <span className="absolute -inset-2.5 z-10"></span>
//                       <span className="relative">Vertical Navigation</span>
//                     </a>
//                   </h4>
//                   <p className="relative mt-1.5 text-xs font-medium text-slate-500">
//                     6 components
//                   </p>
//                   <p className="pointer-events-none absolute top-3 right-3 z-10 flex items-center justify-center rounded-full bg-gray-900/30 p-1 text-white">
//                     <span className="sr-only">
//                       PNG previews only, upgrade to get the HTML.
//                     </span>
//                     <svg
//                       aria-hidden="true"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       className="size-6"
//                     >
//                       <path
//                         d="M5.75 11.75a1 1 0 011-1h10.5a1 1 0 011 1v5.5a2 2 0 01-2 2h-8.5a2 2 0 01-2-2v-5.5zM7.75 10.5v-.157c0-1.562-.094-3.302.996-4.42C9.368 5.288 10.374 4.75 12 4.75c1.626 0 2.632.537 3.254 1.174 1.09 1.117.996 2.857.996 4.419v.157"
//                         stroke="#fff"
//                         stroke-width="1.5"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                       ></path>
//                     </svg>
//                   </p>
//                 </div>
//               </li>
//               <li>
//                 <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
//                   <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
//                     <img
//                       src="https://tailwindui.com/plus/img/category-thumbnails/application-ui/sidebar-navigation.png"
//                       alt=""
//                       className="absolute inset-0 h-full w-full"
//                     />
//                   </div>
//                   <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
//                     <a href="https://tailwindui.com/components/application-ui/navigation/sidebar-navigation">
//                       <span className="absolute -inset-2.5 z-10"></span>
//                       <span className="relative">Sidebar Navigation</span>
//                     </a>
//                   </h4>
//                   <p className="relative mt-1.5 text-xs font-medium text-slate-500">
//                     5 components
//                   </p>
//                   <p className="pointer-events-none absolute top-3 right-3 z-10 flex items-center justify-center rounded-full bg-gray-900/30 p-1 text-white">
//                     <span className="sr-only">
//                       PNG previews only, upgrade to get the HTML.
//                     </span>
//                     <svg
//                       aria-hidden="true"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       className="size-6"
//                     >
//                       <path
//                         d="M5.75 11.75a1 1 0 011-1h10.5a1 1 0 011 1v5.5a2 2 0 01-2 2h-8.5a2 2 0 01-2-2v-5.5zM7.75 10.5v-.157c0-1.562-.094-3.302.996-4.42C9.368 5.288 10.374 4.75 12 4.75c1.626 0 2.632.537 3.254 1.174 1.09 1.117.996 2.857.996 4.419v.157"
//                         stroke="#fff"
//                         stroke-width="1.5"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                       ></path>
//                     </svg>
//                   </p>
//                 </div>
//               </li>
//               <li>
//                 <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
//                   <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
//                     <img
//                       src="https://tailwindui.com/plus/img/category-thumbnails/application-ui/breadcrumbs.png"
//                       alt=""
//                       className="absolute inset-0 h-full w-full"
//                     />
//                   </div>
//                   <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
//                     <a href="https://tailwindui.com/components/application-ui/navigation/breadcrumbs">
//                       <span className="absolute -inset-2.5 z-10"></span>
//                       <span className="relative">Breadcrumbs</span>
//                     </a>
//                   </h4>
//                   <p className="relative mt-1.5 text-xs font-medium text-slate-500">
//                     4 components
//                   </p>
//                   <p className="pointer-events-none absolute top-3 right-3 z-10 flex items-center justify-center rounded-full bg-gray-900/30 p-1 text-white">
//                     <span className="sr-only">
//                       PNG previews only, upgrade to get the HTML.
//                     </span>
//                     <svg
//                       aria-hidden="true"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       className="size-6"
//                     >
//                       <path
//                         d="M5.75 11.75a1 1 0 011-1h10.5a1 1 0 011 1v5.5a2 2 0 01-2 2h-8.5a2 2 0 01-2-2v-5.5zM7.75 10.5v-.157c0-1.562-.094-3.302.996-4.42C9.368 5.288 10.374 4.75 12 4.75c1.626 0 2.632.537 3.254 1.174 1.09 1.117.996 2.857.996 4.419v.157"
//                         stroke="#fff"
//                         stroke-width="1.5"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                       ></path>
//                     </svg>
//                   </p>
//                 </div>
//               </li>
//               <li>
//                 <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
//                   <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
//                     <img
//                       src="https://tailwindui.com/plus/img/category-thumbnails/application-ui/progress-bars.png"
//                       alt=""
//                       className="absolute inset-0 h-full w-full"
//                     />
//                   </div>
//                   <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
//                     <a href="https://tailwindui.com/components/application-ui/navigation/progress-bars">
//                       <span className="absolute -inset-2.5 z-10"></span>
//                       <span className="relative">Progress Bars</span>
//                     </a>
//                   </h4>
//                   <p className="relative mt-1.5 text-xs font-medium text-slate-500">
//                     8 components
//                   </p>
//                   <p className="pointer-events-none absolute top-3 right-3 z-10 flex items-center justify-center rounded-full bg-gray-900/30 p-1 text-white">
//                     <span className="sr-only">
//                       PNG previews only, upgrade to get the HTML.
//                     </span>
//                     <svg
//                       aria-hidden="true"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       className="size-6"
//                     >
//                       <path
//                         d="M5.75 11.75a1 1 0 011-1h10.5a1 1 0 011 1v5.5a2 2 0 01-2 2h-8.5a2 2 0 01-2-2v-5.5zM7.75 10.5v-.157c0-1.562-.094-3.302.996-4.42C9.368 5.288 10.374 4.75 12 4.75c1.626 0 2.632.537 3.254 1.174 1.09 1.117.996 2.857.996 4.419v.157"
//                         stroke="#fff"
//                         stroke-width="1.5"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                       ></path>
//                     </svg>
//                   </p>
//                 </div>
//               </li>
//               <li>
//                 <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
//                   <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
//                     <img
//                       src="https://tailwindui.com/plus/img/category-thumbnails/application-ui/command-palettes.png"
//                       alt=""
//                       className="absolute inset-0 h-full w-full"
//                     />
//                   </div>
//                   <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
//                     <a href="https://tailwindui.com/components/application-ui/navigation/command-palettes">
//                       <span className="absolute -inset-2.5 z-10"></span>
//                       <span className="relative">Command Palettes</span>
//                     </a>
//                   </h4>
//                   <p className="relative mt-1.5 text-xs font-medium text-slate-500">
//                     9 components
//                   </p>
//                   <p className="pointer-events-none absolute top-3 right-3 z-10 flex items-center justify-center rounded-full bg-gray-900/30 p-1 text-white">
//                     <span className="sr-only">
//                       PNG previews only, upgrade to get the HTML.
//                     </span>
//                     <svg
//                       aria-hidden="true"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       className="size-6"
//                     >
//                       <path
//                         d="M5.75 11.75a1 1 0 011-1h10.5a1 1 0 011 1v5.5a2 2 0 01-2 2h-8.5a2 2 0 01-2-2v-5.5zM7.75 10.5v-.157c0-1.562-.094-3.302.996-4.42C9.368 5.288 10.374 4.75 12 4.75c1.626 0 2.632.537 3.254 1.174 1.09 1.117.996 2.857.996 4.419v.157"
//                         stroke="#fff"
//                         stroke-width="1.5"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                       ></path>
//                     </svg>
//                   </p>
//                 </div>
//               </li>
//             </ul>
//           </section>
//           <section
//             id="product-application-ui-overlays"
//             className="grid scroll-mt-12 grid-cols-1 gap-x-8 gap-y-10 py-10 lg:py-12 xl:grid-cols-4"
//           >
//             <h3 className="text-base font-semibold text-slate-900">Overlays</h3>
//             <ul className="col-span-3 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 sm:gap-y-10 md:grid-cols-3 xl:gap-x-8">
//               <li>
//                 <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
//                   <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
//                     <img
//                       src="https://tailwindui.com/plus/img/category-thumbnails/application-ui/modal-dialogs.png"
//                       alt=""
//                       className="absolute inset-0 h-full w-full"
//                     />
//                   </div>
//                   <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
//                     <a href="https://tailwindui.com/components/application-ui/overlays/modal-dialogs">
//                       <span className="absolute -inset-2.5 z-10"></span>
//                       <span className="relative">Modal Dialogs</span>
//                     </a>
//                   </h4>
//                   <p className="relative mt-1.5 text-xs font-medium text-slate-500">
//                     6 components
//                   </p>
//                 </div>
//               </li>
//               <li>
//                 <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
//                   <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
//                     <img
//                       src="https://tailwindui.com/plus/img/category-thumbnails/application-ui/drawers.png"
//                       alt=""
//                       className="absolute inset-0 h-full w-full"
//                     />
//                   </div>
//                   <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
//                     <a href="https://tailwindui.com/components/application-ui/overlays/drawers">
//                       <span className="absolute -inset-2.5 z-10"></span>
//                       <span className="relative">Drawers</span>
//                     </a>
//                   </h4>
//                   <p className="relative mt-1.5 text-xs font-medium text-slate-500">
//                     12 components
//                   </p>
//                 </div>
//               </li>
//               <li>
//                 <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
//                   <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
//                     <img
//                       src="https://tailwindui.com/plus/img/category-thumbnails/application-ui/notifications.png"
//                       alt=""
//                       className="absolute inset-0 h-full w-full"
//                     />
//                   </div>
//                   <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
//                     <a href="https://tailwindui.com/components/application-ui/overlays/notifications">
//                       <span className="absolute -inset-2.5 z-10"></span>
//                       <span className="relative">Notifications</span>
//                     </a>
//                   </h4>
//                   <p className="relative mt-1.5 text-xs font-medium text-slate-500">
//                     6 components
//                   </p>
//                   <p className="pointer-events-none absolute top-3 right-3 z-10 flex items-center justify-center rounded-full bg-gray-900/30 p-1 text-white">
//                     <span className="sr-only">
//                       PNG previews only, upgrade to get the HTML.
//                     </span>
//                     <svg
//                       aria-hidden="true"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       className="size-6"
//                     >
//                       <path
//                         d="M5.75 11.75a1 1 0 011-1h10.5a1 1 0 011 1v5.5a2 2 0 01-2 2h-8.5a2 2 0 01-2-2v-5.5zM7.75 10.5v-.157c0-1.562-.094-3.302.996-4.42C9.368 5.288 10.374 4.75 12 4.75c1.626 0 2.632.537 3.254 1.174 1.09 1.117.996 2.857.996 4.419v.157"
//                         stroke="#fff"
//                         stroke-width="1.5"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                       ></path>
//                     </svg>
//                   </p>
//                 </div>
//               </li>
//             </ul>
//           </section>
//           <section
//             id="product-application-ui-elements"
//             className="grid scroll-mt-12 grid-cols-1 gap-x-8 gap-y-10 py-10 lg:py-12 xl:grid-cols-4"
//           >
//             <h3 className="text-base font-semibold text-slate-900">Elements</h3>
//             <ul className="col-span-3 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 sm:gap-y-10 md:grid-cols-3 xl:gap-x-8">
//               <li>
//                 <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
//                   <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
//                     <img
//                       src="https://tailwindui.com/plus/img/category-thumbnails/application-ui/avatars.png"
//                       alt=""
//                       className="absolute inset-0 h-full w-full"
//                     />
//                   </div>
//                   <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
//                     <a href="https://tailwindui.com/components/application-ui/elements/avatars">
//                       <span className="absolute -inset-2.5 z-10"></span>
//                       <span className="relative">Avatars</span>
//                     </a>
//                   </h4>
//                   <p className="relative mt-1.5 text-xs font-medium text-slate-500">
//                     11 components
//                   </p>
//                 </div>
//               </li>
//               <li>
//                 <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
//                   <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
//                     <img
//                       src="https://tailwindui.com/plus/img/category-thumbnails/application-ui/badges.png"
//                       alt=""
//                       className="absolute inset-0 h-full w-full"
//                     />
//                   </div>
//                   <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
//                     <a href="https://tailwindui.com/components/application-ui/elements/badges">
//                       <span className="absolute -inset-2.5 z-10"></span>
//                       <span className="relative">Badges</span>
//                     </a>
//                   </h4>
//                   <p className="relative mt-1.5 text-xs font-medium text-slate-500">
//                     18 components
//                   </p>
//                 </div>
//               </li>
//               <li>
//                 <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
//                   <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
//                     <img
//                       src="https://tailwindui.com/plus/img/category-thumbnails/application-ui/dropdowns.png"
//                       alt=""
//                       className="absolute inset-0 h-full w-full"
//                     />
//                   </div>
//                   <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
//                     <a href="https://tailwindui.com/components/application-ui/elements/dropdowns">
//                       <span className="absolute -inset-2.5 z-10"></span>
//                       <span className="relative">Dropdowns</span>
//                     </a>
//                   </h4>
//                   <p className="relative mt-1.5 text-xs font-medium text-slate-500">
//                     5 components
//                   </p>
//                 </div>
//               </li>
//               <li>
//                 <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
//                   <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
//                     <img
//                       src="https://tailwindui.com/plus/img/category-thumbnails/application-ui/buttons.png"
//                       alt=""
//                       className="absolute inset-0 h-full w-full"
//                     />
//                   </div>
//                   <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
//                     <a href="https://tailwindui.com/components/application-ui/elements/buttons">
//                       <span className="absolute -inset-2.5 z-10"></span>
//                       <span className="relative">Buttons</span>
//                     </a>
//                   </h4>
//                   <p className="relative mt-1.5 text-xs font-medium text-slate-500">
//                     10 components
//                   </p>
//                   <p className="pointer-events-none absolute top-3 right-3 z-10 flex items-center justify-center rounded-full bg-gray-900/30 p-1 text-white">
//                     <span className="sr-only">
//                       PNG previews only, upgrade to get the HTML.
//                     </span>
//                     <svg
//                       aria-hidden="true"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       className="size-6"
//                     >
//                       <path
//                         d="M5.75 11.75a1 1 0 011-1h10.5a1 1 0 011 1v5.5a2 2 0 01-2 2h-8.5a2 2 0 01-2-2v-5.5zM7.75 10.5v-.157c0-1.562-.094-3.302.996-4.42C9.368 5.288 10.374 4.75 12 4.75c1.626 0 2.632.537 3.254 1.174 1.09 1.117.996 2.857.996 4.419v.157"
//                         stroke="#fff"
//                         stroke-width="1.5"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                       ></path>
//                     </svg>
//                   </p>
//                 </div>
//               </li>
//               <li>
//                 <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
//                   <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
//                     <img
//                       src="https://tailwindui.com/plus/img/category-thumbnails/application-ui/button-groups.png"
//                       alt=""
//                       className="absolute inset-0 h-full w-full"
//                     />
//                   </div>
//                   <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
//                     <a href="https://tailwindui.com/components/application-ui/elements/button-groups">
//                       <span className="absolute -inset-2.5 z-10"></span>
//                       <span className="relative">Button Groups</span>
//                     </a>
//                   </h4>
//                   <p className="relative mt-1.5 text-xs font-medium text-slate-500">
//                     5 components
//                   </p>
//                   <p className="pointer-events-none absolute top-3 right-3 z-10 flex items-center justify-center rounded-full bg-gray-900/30 p-1 text-white">
//                     <span className="sr-only">
//                       PNG previews only, upgrade to get the HTML.
//                     </span>
//                     <svg
//                       aria-hidden="true"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       className="size-6"
//                     >
//                       <path
//                         d="M5.75 11.75a1 1 0 011-1h10.5a1 1 0 011 1v5.5a2 2 0 01-2 2h-8.5a2 2 0 01-2-2v-5.5zM7.75 10.5v-.157c0-1.562-.094-3.302.996-4.42C9.368 5.288 10.374 4.75 12 4.75c1.626 0 2.632.537 3.254 1.174 1.09 1.117.996 2.857.996 4.419v.157"
//                         stroke="#fff"
//                         stroke-width="1.5"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                       ></path>
//                     </svg>
//                   </p>
//                 </div>
//               </li>
//             </ul>
//           </section>
//           <section
//             id="product-application-ui-layout"
//             className="grid scroll-mt-12 grid-cols-1 gap-x-8 gap-y-10 py-10 lg:py-12 xl:grid-cols-4"
//           >
//             <h3 className="text-base font-semibold text-slate-900">Layout</h3>
//             <ul className="col-span-3 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 sm:gap-y-10 md:grid-cols-3 xl:gap-x-8">
//               <li>
//                 <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
//                   <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
//                     <img
//                       src="https://tailwindui.com/plus/img/category-thumbnails/application-ui/containers.png"
//                       alt=""
//                       className="absolute inset-0 h-full w-full"
//                     />
//                   </div>
//                   <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
//                     <a href="https://tailwindui.com/components/application-ui/layout/containers">
//                       <span className="absolute -inset-2.5 z-10"></span>
//                       <span className="relative">Containers</span>
//                     </a>
//                   </h4>
//                   <p className="relative mt-1.5 text-xs font-medium text-slate-500">
//                     5 components
//                   </p>
//                   <p className="pointer-events-none absolute top-3 right-3 z-10 flex items-center justify-center rounded-full bg-gray-900/30 p-1 text-white">
//                     <span className="sr-only">
//                       PNG previews only, upgrade to get the HTML.
//                     </span>
//                     <svg
//                       aria-hidden="true"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       className="size-6"
//                     >
//                       <path
//                         d="M5.75 11.75a1 1 0 011-1h10.5a1 1 0 011 1v5.5a2 2 0 01-2 2h-8.5a2 2 0 01-2-2v-5.5zM7.75 10.5v-.157c0-1.562-.094-3.302.996-4.42C9.368 5.288 10.374 4.75 12 4.75c1.626 0 2.632.537 3.254 1.174 1.09 1.117.996 2.857.996 4.419v.157"
//                         stroke="#fff"
//                         stroke-width="1.5"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                       ></path>
//                     </svg>
//                   </p>
//                 </div>
//               </li>
//               <li>
//                 <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
//                   <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
//                     <img
//                       src="https://tailwindui.com/plus/img/category-thumbnails/application-ui/cards.png"
//                       alt=""
//                       className="absolute inset-0 h-full w-full"
//                     />
//                   </div>
//                   <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
//                     <a href="https://tailwindui.com/components/application-ui/layout/cards">
//                       <span className="absolute -inset-2.5 z-10"></span>
//                       <span className="relative">Cards</span>
//                     </a>
//                   </h4>
//                   <p className="relative mt-1.5 text-xs font-medium text-slate-500">
//                     10 components
//                   </p>
//                   <p className="pointer-events-none absolute top-3 right-3 z-10 flex items-center justify-center rounded-full bg-gray-900/30 p-1 text-white">
//                     <span className="sr-only">
//                       PNG previews only, upgrade to get the HTML.
//                     </span>
//                     <svg
//                       aria-hidden="true"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       className="size-6"
//                     >
//                       <path
//                         d="M5.75 11.75a1 1 0 011-1h10.5a1 1 0 011 1v5.5a2 2 0 01-2 2h-8.5a2 2 0 01-2-2v-5.5zM7.75 10.5v-.157c0-1.562-.094-3.302.996-4.42C9.368 5.288 10.374 4.75 12 4.75c1.626 0 2.632.537 3.254 1.174 1.09 1.117.996 2.857.996 4.419v.157"
//                         stroke="#fff"
//                         stroke-width="1.5"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                       ></path>
//                     </svg>
//                   </p>
//                 </div>
//               </li>
//               <li>
//                 <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
//                   <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
//                     <img
//                       src="https://tailwindui.com/plus/img/category-thumbnails/application-ui/list-containers.png"
//                       alt=""
//                       className="absolute inset-0 h-full w-full"
//                     />
//                   </div>
//                   <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
//                     <a href="https://tailwindui.com/components/application-ui/layout/list-containers">
//                       <span className="absolute -inset-2.5 z-10"></span>
//                       <span className="relative">List containers</span>
//                     </a>
//                   </h4>
//                   <p className="relative mt-1.5 text-xs font-medium text-slate-500">
//                     7 components
//                   </p>
//                   <p className="pointer-events-none absolute top-3 right-3 z-10 flex items-center justify-center rounded-full bg-gray-900/30 p-1 text-white">
//                     <span className="sr-only">
//                       PNG previews only, upgrade to get the HTML.
//                     </span>
//                     <svg
//                       aria-hidden="true"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       className="size-6"
//                     >
//                       <path
//                         d="M5.75 11.75a1 1 0 011-1h10.5a1 1 0 011 1v5.5a2 2 0 01-2 2h-8.5a2 2 0 01-2-2v-5.5zM7.75 10.5v-.157c0-1.562-.094-3.302.996-4.42C9.368 5.288 10.374 4.75 12 4.75c1.626 0 2.632.537 3.254 1.174 1.09 1.117.996 2.857.996 4.419v.157"
//                         stroke="#fff"
//                         stroke-width="1.5"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                       ></path>
//                     </svg>
//                   </p>
//                 </div>
//               </li>
//               <li>
//                 <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
//                   <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
//                     <img
//                       src="https://tailwindui.com/plus/img/category-thumbnails/application-ui/media-objects.png"
//                       alt=""
//                       className="absolute inset-0 h-full w-full"
//                     />
//                   </div>
//                   <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
//                     <a href="https://tailwindui.com/components/application-ui/layout/media-objects">
//                       <span className="absolute -inset-2.5 z-10"></span>
//                       <span className="relative">Media Objects</span>
//                     </a>
//                   </h4>
//                   <p className="relative mt-1.5 text-xs font-medium text-slate-500">
//                     8 components
//                   </p>
//                   <p className="pointer-events-none absolute top-3 right-3 z-10 flex items-center justify-center rounded-full bg-gray-900/30 p-1 text-white">
//                     <span className="sr-only">
//                       PNG previews only, upgrade to get the HTML.
//                     </span>
//                     <svg
//                       aria-hidden="true"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       className="size-6"
//                     >
//                       <path
//                         d="M5.75 11.75a1 1 0 011-1h10.5a1 1 0 011 1v5.5a2 2 0 01-2 2h-8.5a2 2 0 01-2-2v-5.5zM7.75 10.5v-.157c0-1.562-.094-3.302.996-4.42C9.368 5.288 10.374 4.75 12 4.75c1.626 0 2.632.537 3.254 1.174 1.09 1.117.996 2.857.996 4.419v.157"
//                         stroke="#fff"
//                         stroke-width="1.5"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                       ></path>
//                     </svg>
//                   </p>
//                 </div>
//               </li>
//               <li>
//                 <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
//                   <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
//                     <img
//                       src="https://tailwindui.com/plus/img/category-thumbnails/application-ui/dividers.png"
//                       alt=""
//                       className="absolute inset-0 h-full w-full"
//                     />
//                   </div>
//                   <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
//                     <a href="https://tailwindui.com/components/application-ui/layout/dividers">
//                       <span className="absolute -inset-2.5 z-10"></span>
//                       <span className="relative">Dividers</span>
//                     </a>
//                   </h4>
//                   <p className="relative mt-1.5 text-xs font-medium text-slate-500">
//                     8 components
//                   </p>
//                   <p className="pointer-events-none absolute top-3 right-3 z-10 flex items-center justify-center rounded-full bg-gray-900/30 p-1 text-white">
//                     <span className="sr-only">
//                       PNG previews only, upgrade to get the HTML.
//                     </span>
//                     <svg
//                       aria-hidden="true"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       className="size-6"
//                     >
//                       <path
//                         d="M5.75 11.75a1 1 0 011-1h10.5a1 1 0 011 1v5.5a2 2 0 01-2 2h-8.5a2 2 0 01-2-2v-5.5zM7.75 10.5v-.157c0-1.562-.094-3.302.996-4.42C9.368 5.288 10.374 4.75 12 4.75c1.626 0 2.632.537 3.254 1.174 1.09 1.117.996 2.857.996 4.419v.157"
//                         stroke="#fff"
//                         stroke-width="1.5"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                       ></path>
//                     </svg>
//                   </p>
//                 </div>
//               </li>
//             </ul>
//           </section>
//           <section
//             id="product-application-ui-page-examples"
//             className="grid scroll-mt-12 grid-cols-1 gap-x-8 gap-y-10 py-10 lg:py-12 xl:grid-cols-4"
//           >
//             <h3 className="text-base font-semibold text-slate-900">
//               Page Examples
//             </h3>
//             <ul className="col-span-3 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 sm:gap-y-10 md:grid-cols-3 xl:gap-x-8">
//               <li>
//                 <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
//                   <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
//                     <img
//                       src="https://tailwindui.com/plus/img/category-thumbnails/application-ui/home-screens.png"
//                       alt=""
//                       className="absolute inset-0 h-full w-full"
//                     />
//                   </div>
//                   <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
//                     <a href="https://tailwindui.com/components/application-ui/page-examples/home-screens">
//                       <span className="absolute -inset-2.5 z-10"></span>
//                       <span className="relative">Home Screens</span>
//                     </a>
//                   </h4>
//                   <p className="relative mt-1.5 text-xs font-medium text-slate-500">
//                     2 examples
//                   </p>
//                   <p className="pointer-events-none absolute top-3 right-3 z-10 flex items-center justify-center rounded-full bg-gray-900/30 p-1 text-white">
//                     <span className="sr-only">
//                       PNG previews only, upgrade to get the HTML.
//                     </span>
//                     <svg
//                       aria-hidden="true"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       className="size-6"
//                     >
//                       <path
//                         d="M5.75 11.75a1 1 0 011-1h10.5a1 1 0 011 1v5.5a2 2 0 01-2 2h-8.5a2 2 0 01-2-2v-5.5zM7.75 10.5v-.157c0-1.562-.094-3.302.996-4.42C9.368 5.288 10.374 4.75 12 4.75c1.626 0 2.632.537 3.254 1.174 1.09 1.117.996 2.857.996 4.419v.157"
//                         stroke="#fff"
//                         stroke-width="1.5"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                       ></path>
//                     </svg>
//                   </p>
//                 </div>
//               </li>
//               <li>
//                 <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
//                   <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
//                     <img
//                       src="https://tailwindui.com/plus/img/category-thumbnails/application-ui/detail-screens.png"
//                       alt=""
//                       className="absolute inset-0 h-full w-full"
//                     />
//                   </div>
//                   <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
//                     <a href="https://tailwindui.com/components/application-ui/page-examples/detail-screens">
//                       <span className="absolute -inset-2.5 z-10"></span>
//                       <span className="relative">Detail Screens</span>
//                     </a>
//                   </h4>
//                   <p className="relative mt-1.5 text-xs font-medium text-slate-500">
//                     2 examples
//                   </p>
//                   <p className="pointer-events-none absolute top-3 right-3 z-10 flex items-center justify-center rounded-full bg-gray-900/30 p-1 text-white">
//                     <span className="sr-only">
//                       PNG previews only, upgrade to get the HTML.
//                     </span>
//                     <svg
//                       aria-hidden="true"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       className="size-6"
//                     >
//                       <path
//                         d="M5.75 11.75a1 1 0 011-1h10.5a1 1 0 011 1v5.5a2 2 0 01-2 2h-8.5a2 2 0 01-2-2v-5.5zM7.75 10.5v-.157c0-1.562-.094-3.302.996-4.42C9.368 5.288 10.374 4.75 12 4.75c1.626 0 2.632.537 3.254 1.174 1.09 1.117.996 2.857.996 4.419v.157"
//                         stroke="#fff"
//                         stroke-width="1.5"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                       ></path>
//                     </svg>
//                   </p>
//                 </div>
//               </li>
//               <li>
//                 <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
//                   <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
//                     <img
//                       src="https://tailwindui.com/plus/img/category-thumbnails/application-ui/settings-screens.png"
//                       alt=""
//                       className="absolute inset-0 h-full w-full"
//                     />
//                   </div>
//                   <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
//                     <a href="https://tailwindui.com/components/application-ui/page-examples/settings-screens">
//                       <span className="absolute -inset-2.5 z-10"></span>
//                       <span className="relative">Settings Screens</span>
//                     </a>
//                   </h4>
//                   <p className="relative mt-1.5 text-xs font-medium text-slate-500">
//                     2 examples
//                   </p>
//                   <p className="pointer-events-none absolute top-3 right-3 z-10 flex items-center justify-center rounded-full bg-gray-900/30 p-1 text-white">
//                     <span className="sr-only">
//                       PNG previews only, upgrade to get the HTML.
//                     </span>
//                     <svg
//                       aria-hidden="true"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       className="size-6"
//                     >
//                       <path
//                         d="M5.75 11.75a1 1 0 011-1h10.5a1 1 0 011 1v5.5a2 2 0 01-2 2h-8.5a2 2 0 01-2-2v-5.5zM7.75 10.5v-.157c0-1.562-.094-3.302.996-4.42C9.368 5.288 10.374 4.75 12 4.75c1.626 0 2.632.537 3.254 1.174 1.09 1.117.996 2.857.996 4.419v.157"
//                         stroke="#fff"
//                         stroke-width="1.5"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                       ></path>
//                     </svg>
//                   </p>
//                 </div>
//               </li>
//             </ul>
//           </section>

export const applicationUIData = [
  {
    title: "Application Shells",
    cards: [
      {
        title: "Stacked Layouts",
        description: "",
        href: "https://tailwindui.com/components/application-ui/application-shells/stacked",
        image: {
          src: "https://tailwindui.com/plus/img/category-thumbnails/application-ui/stacked.png",
          alt: "",
        },
        componentCount: 9,
      },
      {
        title: "Sidebar Layouts",
        description: "",
        href: "https://tailwindui.com/components/application-ui/application-shells/sidebar",
        image: {
          src: "https://tailwindui.com/plus/img/category-thumbnails/application-ui/sidebar.png",
          alt: "",
        },
        componentCount: 8,
      },
      {
        title: "Multi-column Layouts",
        description: "",
        href: "https://tailwindui.com/components/application-ui/application-shells/multi-column",
        image: {
          src: "https://tailwindui.com/plus/img/category-thumbnails/application-ui/multi-column.png",
          alt: "",
        },
        componentCount: 7,
      },
    ],
  },
  {
    title: "Headings",
    cards: [
      {
        title: "Page Headings",
        description: "",
        href: "https://tailwindui.com/components/application-ui/headings/page-headings",
        image: {
          src: "https://tailwindui.com/plus/img/category-thumbnails/application-ui/page-headings.png",
          alt: "",
        },
        componentCount: 4,
      },
      {
        title: "Card Headings",
        description: "",
        href: "https://tailwindui.com/components/application-ui/headings/card-headings",
        image: {
          src: "https://tailwindui.com/plus/img/category-thumbnails/application-ui/card-headings.png",
          alt: "",
        },
        componentCount: 6,
      },
      {
        title: "Section Headings",
        description: "",
        href: "https://tailwindui.com/components/application-ui/headings/section-headings",
        image: {
          src: "https://tailwindui.com/plus/img/category-thumbnails/application-ui/section-headings.png",
          alt: "",
        },
        componentCount: 4,
      },
    ],
  },
  {
    title: "Data Display",
    cards: [
      {
        title: "Description Lists",
        description: "",
        href: "https://tailwindui.com/components/application-ui/data-display/description-lists",
        image: {
          src: "https://tailwindui.com/plus/img/category-thumbnails/application-ui/description-lists.png",
          alt: "",
        },
        componentCount: 7,
      },
      {
        title: "Stats",
        description: "",
        href: "https://tailwindui.com/components/application-ui/data-display/stats",
        image: {
          src: "https://tailwindui.com/plus/img/category-thumbnails/application-ui/stats.png",
          alt: "",
        },
        componentCount: 5,
      },
      {
        title: "Calendars",
        description: "",
        href: "https://tailwindui.com/components/application-ui/data-display/calendars",
        image: {
          src: "https://tailwindui.com/plus/img/category-thumbnails/application-ui/calendars.png",
          alt: "",
        },
        componentCount: 8,
      },
    ],
  },
  {
    title: "Forms",
    cards: [
      {
        title: "Form Layouts",
        description: "",
        href: "https://tailwindui.com/components/application-ui/forms/form-layouts",
        image: {
          src: "https://tailwindui.com/plus/img/category-thumbnails/application-ui/form-layouts.png",
          alt: "",
        },
        componentCount: 8,
      },
      {
        title: "Input Groups",
        description: "",
        href: "https://tailwindui.com/components/application-ui/forms/input-groups",
        image: {
          src: "https://tailwindui.com/plus/img/category-thumbnails/application-ui/input-groups.png",
          alt: "",
        },
        componentCount: 7,
      },
      {
        title: "Select Menus",
        description: "",
        href: "https://tailwindui.com/components/application-ui/forms/select-menus",
        image: {
          src: "https://tailwindui.com/plus/img/category-thumbnails/application-ui/select-menus.png",
          alt: "",
        },
        componentCount: 7,
      },
      {
        title: "Sign-in and Registration",
        description: "",
        href: "https://tailwindui.com/components/application-ui/forms/sign-in-forms",
        image: {
          src: "https://tailwindui.com/plus/img/category-thumbnails/application-ui/sign-in-forms.png",
          alt: "",
        },
        componentCount: 6,
      },
      {
        title: "Textareas",
        description: "",
        href: "https://tailwindui.com/components/application-ui/forms/textareas",
        image: {
          src: "https://tailwindui.com/plus/img/category-thumbnails/application-ui/textareas.png",
          alt: "",
        },
        componentCount: 3,
      },
      {
        title: "Radio Groups",
        description: "",
        href: "https://tailwindui.com/components/application-ui/forms/radio-groups",
        image: {
          src: "https://tailwindui.com/plus/img/category-thumbnails/application-ui/radio-groups.png",
          alt: "",
        },
        componentCount: 3,
      },
      {
        title: "Checkboxes",
        description: "",
        href: "https://tailwindui.com/components/application-ui/forms/checkboxes",
        image: {
          src: "https://tailwindui.com/plus/img/category-thumbnails/application-ui/checkboxes.png",
          alt: "",
        },
        componentCount: 3,
      },
      {
        title: "Toggles",
        description: "",
        href: "https://tailwindui.com/components/application-ui/forms/toggles",
        image: {
          src: "https://tailwindui.com/plus/img/category-thumbnails/application-ui/toggles.png",
          alt: "",
        },
        componentCount: 3,
      },
      {
        title: "Action Panels",
        description: "",
        href: "https://tailwindui.com/components/application-ui/forms/action-panels",
        image: {
          src: "https://tailwindui.com/plus/img/category-thumbnails/application-ui/action-panels.png",
          alt: "",
        },
        componentCount: 3,
      },
      // {
      //   title: "Date Pickers",
      //   description: "",
      //   href: "https://tailwindui.com/components/application-ui/forms/date-pickers",
      //   image: {
      //     src: "https://tailwindui.com/plus/img/category-thumbnails/application-ui/date-pickers.png",
      //     alt: "",
      //   },
      //   componentCount: 3,
      // },
      // {
      //   title: "File Uploads",
      //   description: "",
      //   href: "https://tailwindui.com/components/application-ui/forms/file-uploads",
      //   image: {
      //     src: "https://tailwindui.com/plus/img/category-thumbnails/application-ui/file-uploads.png",
      //     alt: "",
      //   },
      //   componentCount: 3,
      // },
    ],
  },
  {
    title: "Lists",
    cards: [
      {
        title: "Stacked Lists",
        description: "",
        href: "https://tailwindui.com/components/application-ui/lists/stacked-lists",
        image: {
          src: "https://tailwindui.com/plus/img/category-thumbnails/application-ui/stacked-lists.png",
          alt: "",
        },
        componentCount: 17,
        pro: true,
      },
      {
        title: "Tables",
        description: "",
        href: "https://tailwindui.com/components/application-ui/lists/tables",
        image: {
          src: "https://tailwindui.com/plus/img/category-thumbnails/application-ui/tables.png",
          alt: "",
        },
        componentCount: 20,
      },
      {
        title: "Grid Lists",
        description: "",
        href: "https://tailwindui.com/components/application-ui/lists/grid-lists",
        image: {
          src: "https://tailwindui.com/plus/img/category-thumbnails/application-ui/grid-lists.png",
          alt: "",
        },
        componentCount: 7,
      },
      {
        title: "Feeds",
        description: "",
        href: "https://tailwindui.com/components/application-ui/lists/feeds",
        image: {
          src: "https://tailwindui.com/plus/img/category-thumbnails/application-ui/feeds.png",
          alt: "",
        },
        componentCount: 3,
      },
    ],
  },
  {
    title: "Navigation",
    cards: [
      {
        title: "Navbars",
        description: "",
        href: "https://tailwindui.com/components/application-ui/navigation/navbars",
        image: {
          src: "https://tailwindui.com/plus/img/category-thumbnails/application-ui/navbars.png",
          alt: "",
        },
        componentCount: 3,
      },
      // Pagination
      {
        title: "Pagination",
        description: "",
        href: "https://tailwindui.com/components/application-ui/navigation/pagination",
        image: {
          src: "https://tailwindui.com/plus/img/category-thumbnails/application-ui/pagination.png",
          alt: "",
        },
        componentCount: 3,
      },
      // Tabs
      {
        title: "Tabs",
        description: "",
        href: "https://tailwindui.com/components/application-ui/navigation/tabs",
        image: {
          src: "https://tailwindui.com/plus/img/category-thumbnails/application-ui/tabs.png",
          alt: "",
        },
        componentCount: 5,
      },
      // Breadcrumbs
      {
        title: "Breadcrumbs",
        description: "",
        href: "https://tailwindui.com/components/application-ui/navigation/breadcrumbs",
        image: {
          src: "https://tailwindui.com/plus/img/category-thumbnails/application-ui/breadcrumbs.png",
          alt: "",
        },
        componentCount: 3,
      },
      // Sidebar Navigation
      {
        title: "Sidebar Navigation",
        description: "",
        href: "https://tailwindui.com/components/application-ui/navigation/sidebar-navigation",
        image: {
          src: "https://tailwindui.com/plus/img/category-thumbnails/application-ui/sidebar-navigation.png",
          alt: "",
        },
        componentCount: 4,
      },
    ],
  },
];
