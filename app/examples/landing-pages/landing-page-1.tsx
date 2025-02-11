import { UICustomizer } from "@/components/ui-customizer";
import { Button, ButtonLink } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/utils/cn";
import { Check, CheckCircle2 } from "lucide-react";

import { ReactElement } from "react";

export function Container({
  children,
  className,
}: {
  children: ReactElement;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-7xl mx-auto w-full px-2 sm:px-4 lg:px-6 xl:px-8",
        className
      )}
    >
      {children}
    </div>
  );
}

// <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
//                 <div className="relative z-20 h-35 md:h-65">
//                   <img src="https://demo.tailadmin.com/src/images/cover/cover-01.png" alt="profile cover" className="h-full w-full rounded-tl-sm rounded-tr-sm object-cover object-center">
//                   <div className="absolute bottom-1 right-1 z-10 xsm:bottom-4 xsm:right-4">
//                     <label for="cover" className="flex cursor-pointer items-center justify-center gap-2 rounded bg-primary px-2 py-1 text-sm font-medium text-white hover:bg-opacity-80 xsm:px-4">
//                       <input type="file" name="cover" id="cover" className="sr-only">
//                       <span>
//                         <svg className="fill-current" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
//                           <path fillRule="evenodd" clipRule="evenodd" d="M4.76464 1.42638C4.87283 1.2641 5.05496 1.16663 5.25 1.16663H8.75C8.94504 1.16663 9.12717 1.2641 9.23536 1.42638L10.2289 2.91663H12.25C12.7141 2.91663 13.1592 3.101 13.4874 3.42919C13.8156 3.75738 14 4.2025 14 4.66663V11.0833C14 11.5474 13.8156 11.9925 13.4874 12.3207C13.1592 12.6489 12.7141 12.8333 12.25 12.8333H1.75C1.28587 12.8333 0.840752 12.6489 0.512563 12.3207C0.184375 11.9925 0 11.5474 0 11.0833V4.66663C0 4.2025 0.184374 3.75738 0.512563 3.42919C0.840752 3.101 1.28587 2.91663 1.75 2.91663H3.77114L4.76464 1.42638ZM5.56219 2.33329L4.5687 3.82353C4.46051 3.98582 4.27837 4.08329 4.08333 4.08329H1.75C1.59529 4.08329 1.44692 4.14475 1.33752 4.25415C1.22812 4.36354 1.16667 4.51192 1.16667 4.66663V11.0833C1.16667 11.238 1.22812 11.3864 1.33752 11.4958C1.44692 11.6052 1.59529 11.6666 1.75 11.6666H12.25C12.4047 11.6666 12.5531 11.6052 12.6625 11.4958C12.7719 11.3864 12.8333 11.238 12.8333 11.0833V4.66663C12.8333 4.51192 12.7719 4.36354 12.6625 4.25415C12.5531 4.14475 12.4047 4.08329 12.25 4.08329H9.91667C9.72163 4.08329 9.53949 3.98582 9.4313 3.82353L8.43781 2.33329H5.56219Z" fill="white"></path>
//                           <path fillRule="evenodd" clipRule="evenodd" d="M6.99992 5.83329C6.03342 5.83329 5.24992 6.61679 5.24992 7.58329C5.24992 8.54979 6.03342 9.33329 6.99992 9.33329C7.96642 9.33329 8.74992 8.54979 8.74992 7.58329C8.74992 6.61679 7.96642 5.83329 6.99992 5.83329ZM4.08325 7.58329C4.08325 5.97246 5.38909 4.66663 6.99992 4.66663C8.61075 4.66663 9.91659 5.97246 9.91659 7.58329C9.91659 9.19412 8.61075 10.5 6.99992 10.5C5.38909 10.5 4.08325 9.19412 4.08325 7.58329Z" fill="white"></path>
//                         </svg>
//                       </span>
//                       <span>Edit</span>
//                     </label>
//                   </div>
//                 </div>
//                 <div className="px-4 pb-6 text-center lg:pb-8 xl:pb-11.5">
//                   <div className="relative z-30 mx-auto -mt-22 h-30 w-full max-w-30 rounded-full bg-white/20 p-1 backdrop-blur sm:h-44 sm:max-w-44 sm:p-3">
//                     <div className="relative drop-shadow-2">
//                       <img src="https://demo.tailadmin.com/src/images/user/user-06.png" alt="profile">
//                       <label for="profile" className="absolute bottom-0 right-0 flex h-8.5 w-8.5 cursor-pointer items-center justify-center rounded-full bg-primary text-white hover:bg-opacity-90 sm:bottom-2 sm:right-2">
//                         <svg className="fill-current" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
//                           <path fillRule="evenodd" clipRule="evenodd" d="M4.76464 1.42638C4.87283 1.2641 5.05496 1.16663 5.25 1.16663H8.75C8.94504 1.16663 9.12717 1.2641 9.23536 1.42638L10.2289 2.91663H12.25C12.7141 2.91663 13.1592 3.101 13.4874 3.42919C13.8156 3.75738 14 4.2025 14 4.66663V11.0833C14 11.5474 13.8156 11.9925 13.4874 12.3207C13.1592 12.6489 12.7141 12.8333 12.25 12.8333H1.75C1.28587 12.8333 0.840752 12.6489 0.512563 12.3207C0.184375 11.9925 0 11.5474 0 11.0833V4.66663C0 4.2025 0.184374 3.75738 0.512563 3.42919C0.840752 3.101 1.28587 2.91663 1.75 2.91663H3.77114L4.76464 1.42638ZM5.56219 2.33329L4.5687 3.82353C4.46051 3.98582 4.27837 4.08329 4.08333 4.08329H1.75C1.59529 4.08329 1.44692 4.14475 1.33752 4.25415C1.22812 4.36354 1.16667 4.51192 1.16667 4.66663V11.0833C1.16667 11.238 1.22812 11.3864 1.33752 11.4958C1.44692 11.6052 1.59529 11.6666 1.75 11.6666H12.25C12.4047 11.6666 12.5531 11.6052 12.6625 11.4958C12.7719 11.3864 12.8333 11.238 12.8333 11.0833V4.66663C12.8333 4.51192 12.7719 4.36354 12.6625 4.25415C12.5531 4.14475 12.4047 4.08329 12.25 4.08329H9.91667C9.72163 4.08329 9.53949 3.98582 9.4313 3.82353L8.43781 2.33329H5.56219Z" fill=""></path>
//                           <path fillRule="evenodd" clipRule="evenodd" d="M7.00004 5.83329C6.03354 5.83329 5.25004 6.61679 5.25004 7.58329C5.25004 8.54979 6.03354 9.33329 7.00004 9.33329C7.96654 9.33329 8.75004 8.54979 8.75004 7.58329C8.75004 6.61679 7.96654 5.83329 7.00004 5.83329ZM4.08337 7.58329C4.08337 5.97246 5.38921 4.66663 7.00004 4.66663C8.61087 4.66663 9.91671 5.97246 9.91671 7.58329C9.91671 9.19412 8.61087 10.5 7.00004 10.5C5.38921 10.5 4.08337 9.19412 4.08337 7.58329Z" fill=""></path>
//                         </svg>
//                         <input type="file" name="profile" id="profile" className="sr-only">
//                       </label>
//                     </div>
//                   </div>
//                   <div className="mt-4">
//                     <h3 className="mb-1.5 text-2xl font-medium text-black dark:text-white">
//                       Danish Heilium
//                     </h3>
//                     <p className="font-medium">Ui/Ux Designer</p>
//                     <div className="mx-auto mb-5.5 mt-4.5 grid max-w-94 grid-cols-3 rounded-md border border-stroke py-2.5 shadow-1 dark:border-strokedark dark:bg-[#37404F]">
//                       <div className="flex flex-col items-center justify-center gap-1 border-r border-stroke px-4 dark:border-strokedark xsm:flex-row">
//                         <span className="font-semibold text-black dark:text-white">259</span>
//                         <span className="text-sm">Posts</span>
//                       </div>
//                       <div className="flex flex-col items-center justify-center gap-1 border-r border-stroke px-4 dark:border-strokedark xsm:flex-row">
//                         <span className="font-semibold text-black dark:text-white">129K</span>
//                         <span className="text-sm">Followers</span>
//                       </div>
//                       <div className="flex flex-col items-center justify-center gap-1 px-4 xsm:flex-row">
//                         <span className="font-semibold text-black dark:text-white">2K</span>
//                         <span className="text-sm">Following</span>
//                       </div>
//                     </div>

//                     <div className="mx-auto max-w-180">
//                       <h4 className="font-medium text-black dark:text-white">
//                         About Me
//                       </h4>
//                       <p className="mt-4.5 text-sm font-normal">
//                         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                         Pellentesque posuere fermentum urna, eu condimentum
//                         mauris tempus ut. Donec fermentum blandit aliquet. Etiam
//                         dictum dapibus ultricies. Sed vel aliquet libero. Nunc a
//                         augue fermentum, pharetra ligula sed, aliquam lacus.
//                       </p>
//                     </div>

//                     <div className="mt-6.5">
//                       <h4 className="mb-3.5 font-medium text-black dark:text-white">
//                         Follow me on
//                       </h4>
//                       <div className="flex items-center justify-center gap-3.5">
//                         <a href="#" className="hover:text-primary" name="social-icon" aria-label="social-icon">
//                           <svg className="fill-current" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <g clip-path="url(#clip0_30_966)">
//                               <path d="M12.8333 12.375H15.125L16.0416 8.70838H12.8333V6.87504C12.8333 5.93088 12.8333 5.04171 14.6666 5.04171H16.0416V1.96171C15.7428 1.92229 14.6144 1.83337 13.4227 1.83337C10.934 1.83337 9.16663 3.35229 9.16663 6.14171V8.70838H6.41663V12.375H9.16663V20.1667H12.8333V12.375Z" fill=""></path>
//                             </g>
//                             <defs>
//                               <clipPath id="clip0_30_966">
//                                 <rect width="22" height="22" fill="white"></rect>
//                               </clipPath>
//                             </defs>
//                           </svg>
//                         </a>
//                         <a href="#" className="hover:text-primary" name="social-icon" aria-label="social-icon">
//                           <svg className="fill-current" width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <g clip-path="url(#clip0_30_970)">
//                               <path d="M20.9813 5.18472C20.2815 5.49427 19.5393 5.69757 18.7795 5.78789C19.5804 5.30887 20.1798 4.55498 20.4661 3.66672C19.7145 4.11405 18.8904 4.42755 18.0315 4.59714C17.4545 3.97984 16.6898 3.57044 15.8562 3.43259C15.0225 3.29474 14.1667 3.43617 13.4218 3.83489C12.6768 4.2336 12.0845 4.86726 11.7368 5.63736C11.3891 6.40746 11.3056 7.27085 11.4993 8.0933C9.97497 8.0169 8.48376 7.62078 7.12247 6.93066C5.76118 6.24054 4.56024 5.27185 3.59762 4.08747C3.25689 4.67272 3.07783 5.33801 3.07879 6.01522C3.07879 7.34439 3.75529 8.51864 4.78379 9.20614C4.17513 9.18697 3.57987 9.0226 3.04762 8.72672V8.77439C3.04781 9.65961 3.35413 10.5175 3.91465 11.2027C4.47517 11.8878 5.2554 12.3581 6.12304 12.5336C5.55802 12.6868 4.96557 12.7093 4.39054 12.5996C4.63517 13.3616 5.11196 14.028 5.75417 14.5055C6.39637 14.983 7.17182 15.2477 7.97196 15.2626C7.17673 15.8871 6.2662 16.3488 5.29243 16.6212C4.31866 16.8936 3.30074 16.9714 2.29688 16.8502C4.04926 17.9772 6.08921 18.5755 8.17271 18.5735C15.2246 18.5735 19.081 12.7316 19.081 7.66522C19.081 7.50022 19.0765 7.33339 19.0691 7.17022C19.8197 6.62771 20.4676 5.95566 20.9822 5.18564L20.9813 5.18472Z" fill=""></path>
//                             </g>
//                             <defs>
//                               <clipPath id="clip0_30_970">
//                                 <rect width="22" height="22" fill="white" transform="translate(0.666138)"></rect>
//                               </clipPath>
//                             </defs>
//                           </svg>
//                         </a>
//                         <a href="#" className="hover:text-primary" name="social-icon" aria-label="social-icon">
//                           <svg className="fill-current" width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <g clip-path="url(#clip0_30_974)">
//                               <path d="M6.69548 4.58327C6.69523 5.0695 6.50185 5.53572 6.15786 5.87937C5.81387 6.22301 5.34746 6.41593 4.86123 6.41569C4.375 6.41545 3.90878 6.22206 3.56513 5.87807C3.22149 5.53408 3.02857 5.06767 3.02881 4.58144C3.02905 4.09521 3.22244 3.62899 3.56643 3.28535C3.91042 2.9417 4.37683 2.74878 4.86306 2.74902C5.34929 2.74927 5.81551 2.94265 6.15915 3.28664C6.5028 3.63063 6.69572 4.09704 6.69548 4.58327ZM6.75048 7.77327H3.08381V19.2499H6.75048V7.77327ZM12.5438 7.77327H8.89548V19.2499H12.5071V13.2274C12.5071 9.87244 16.8796 9.56077 16.8796 13.2274V19.2499H20.5005V11.9808C20.5005 6.32494 14.0288 6.53577 12.5071 9.31327L12.5438 7.77327Z" fill=""></path>
//                             </g>
//                             <defs>
//                               <clipPath id="clip0_30_974">
//                                 <rect width="22" height="22" fill="white" transform="translate(0.333862)"></rect>
//                               </clipPath>
//                             </defs>
//                           </svg>
//                         </a>
//                         <a href="#" className="hover:text-primary" name="social-icon" aria-label="social-icon">
//                           <svg className="fill-current" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <g clip-path="url(#clip0_30_978)">
//                               <path d="M18.3233 10.6077C18.2481 9.1648 17.7463 7.77668 16.8814 6.61929C16.6178 6.90312 16.3361 7.16951 16.038 7.41679C15.1222 8.17748 14.0988 8.79838 13.0011 9.25929C13.1542 9.58013 13.2945 9.89088 13.4182 10.1842V10.187C13.4531 10.2689 13.4867 10.3514 13.519 10.4345C14.9069 10.2786 16.3699 10.3355 17.788 10.527C17.9768 10.5527 18.1546 10.5802 18.3233 10.6077ZM9.72038 3.77854C10.6137 5.03728 11.4375 6.34396 12.188 7.69271C13.3091 7.25088 14.2359 6.69354 14.982 6.07296C15.2411 5.8595 15.4849 5.62824 15.7117 5.38088C14.3926 4.27145 12.7237 3.66426 11 3.66671C10.5711 3.66641 10.1429 3.70353 9.72038 3.77762V3.77854ZM3.89862 9.16396C4.52308 9.1482 5.1468 9.11059 5.76863 9.05121C7.27163 8.91677 8.7618 8.66484 10.2255 8.29771C9.46051 6.96874 8.63463 5.67578 7.75046 4.42296C6.80603 4.89082 5.97328 5.55633 5.30868 6.37435C4.64409 7.19236 4.16319 8.14374 3.89862 9.16396ZM5.30113 15.6155C5.65679 15.0957 6.12429 14.5109 6.74488 13.8747C8.07771 12.5089 9.65071 11.4455 11.4712 10.8589L11.528 10.8424C11.3768 10.5087 11.2347 10.2108 11.0917 9.93029C9.40871 10.4207 7.63588 10.7269 5.86946 10.8855C5.00779 10.9634 4.23504 10.9973 3.66671 11.0028C3.66509 12.6827 4.24264 14.3117 5.30204 15.6155H5.30113ZM13.7546 17.7971C13.4011 16.0144 12.9008 14.2641 12.2586 12.5639C10.4235 13.2303 8.96138 14.2047 7.83113 15.367C7.375 15.8276 6.97021 16.3362 6.62388 16.8841C7.88778 17.8272 9.42308 18.3356 11 18.3334C11.9441 18.3347 12.8795 18.1533 13.7546 17.799V17.7971ZM15.4715 16.8117C16.9027 15.7115 17.8777 14.1219 18.2096 12.3475C17.898 12.2696 17.5029 12.1917 17.0684 12.1312C16.1023 11.9921 15.1221 11.9819 14.1534 12.101C14.6988 13.6399 15.1392 15.2141 15.4715 16.8126V16.8117ZM11 20.1667C5.93729 20.1667 1.83337 16.0628 1.83337 11C1.83337 5.93729 5.93729 1.83337 11 1.83337C16.0628 1.83337 20.1667 5.93729 20.1667 11C20.1667 16.0628 16.0628 20.1667 11 20.1667Z" fill=""></path>
//                             </g>
//                             <defs>
//                               <clipPath id="clip0_30_978">
//                                 <rect width="22" height="22" fill="white"></rect>
//                               </clipPath>
//                             </defs>
//                           </svg>
//                         </a>
//                         <a href="#" className="hover:text-primary" name="social-icon" aria-label="social-icon">
//                           <svg className="fill-current" width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <g clip-path="url(#clip0_30_982)">
//                               <path d="M11.6662 1.83337C6.6016 1.83337 2.49951 5.93546 2.49951 11C2.49847 12.9244 3.10343 14.8002 4.22854 16.3613C5.35366 17.9225 6.94181 19.0897 8.76768 19.6974C9.22602 19.7771 9.39743 19.5021 9.39743 19.261C9.39743 19.0438 9.38552 18.3224 9.38552 17.5542C7.08285 17.9786 6.48701 16.9932 6.30368 16.4771C6.2001 16.2131 5.75368 15.4 5.3641 15.1819C5.04326 15.0105 4.58493 14.586 5.35218 14.575C6.07451 14.5631 6.58968 15.2396 6.76201 15.5146C7.58701 16.9006 8.90518 16.511 9.43135 16.2709C9.51202 15.675 9.75218 15.2745 10.0162 15.0453C7.9766 14.8161 5.84535 14.025 5.84535 10.5188C5.84535 9.52146 6.2001 8.69737 6.78493 8.05479C6.69326 7.82562 6.37243 6.88604 6.8766 5.62562C6.8766 5.62562 7.64385 5.38546 9.39743 6.56612C10.1437 6.35901 10.9147 6.25477 11.6891 6.25629C12.4683 6.25629 13.2474 6.35896 13.9808 6.56521C15.7334 5.37354 16.5016 5.62654 16.5016 5.62654C17.0058 6.88696 16.6849 7.82654 16.5933 8.05571C17.1772 8.69737 17.5329 9.51046 17.5329 10.5188C17.5329 14.037 15.3906 14.8161 13.351 15.0453C13.6829 15.3313 13.9698 15.8813 13.9698 16.7411C13.9698 17.9667 13.9579 18.9521 13.9579 19.262C13.9579 19.5021 14.1302 19.7881 14.5885 19.6965C16.4081 19.0821 17.9893 17.9126 19.1094 16.3526C20.2296 14.7926 20.8323 12.9206 20.8329 11C20.8329 5.93546 16.7308 1.83337 11.6662 1.83337Z" fill=""></path>
//                             </g>
//                             <defs>
//                               <clipPath id="clip0_30_982">
//                                 <rect width="22" height="22" fill="white" transform="translate(0.666138)"></rect>
//                               </clipPath>
//                             </defs>
//                           </svg>
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

export default function Landing1() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <UICustomizer />
      <header className="w-full h-full bg-background flex justify-between">
        <Container>
          <div className="h-20 flex justify-between items-center">
            <div>
              <Typography
                as="h6"
                variant="xl/medium"
                className="text-foreground"
              >
                <span className="">ACME</span>
                <span className="font-medium text-primary ml-1">INC</span>
              </Typography>
            </div>
            <div>
              <nav className="space-x-8 hidden md:block">
                <a href="#" className="text-foreground-secondary">
                  Home
                </a>
                <a href="#" className="text-foreground-secondary">
                  About
                </a>
                <a href="#" className="text-foreground-secondary">
                  Services
                </a>
                <a href="#" className="text-foreground-secondary">
                  Contact
                </a>
                <ButtonLink
                  href="#"
                  variant="default"
                  // size="lg"
                  // className="text-base"
                >
                  Get Started
                </ButtonLink>
              </nav>
            </div>
          </div>
        </Container>
      </header>
      <div className="w-full h-full flex flex-col gap-y-4 lg:px-32 py-24 min-h-screen">
        <Container className="relative w-full">
          <>
            <div className="flex flex-col gap-y-8 relative">
              {/* <GradientBackground /> */}

              <Typography
                variant="6xl/semibold"
                className="leading-tight max-w-4xl text-foreground"
              >
                Client Acquisition Marketing to Take Your Law Firm to the Next
                Level
              </Typography>
              <Typography variant="2xl/normal" className="max-w-4xl">
                <strong>Result driven marketing.</strong> ACME is a
                next-generation marketing and technology company.
              </Typography>
              <div className="flex gap-4">
                <Button variant="default" size="lg">
                  Get Started
                </Button>
                <Button variant="secondary" size="lg">
                  Learn More
                </Button>
              </div>
              <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 rounded-lg gap-4 overflow-hidden">
                {[
                  {
                    title: "SEO",
                    description:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan",
                    icon: "https://cdn.shadcn.com/assets/icons/seo.svg",
                  },
                  {
                    title: "PPC",
                    description:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan",
                    icon: "https://cdn.shadcn.com/assets/icons/ppc.svg",
                  },
                  {
                    title: "Social Media",
                    description:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan",
                    icon: "https://cdn.shadcn.com/assets/icons/social-media.svg",
                  },
                ].map((item, index) => (
                  <div
                    key={item.title}
                    className={cn(
                      "flex flex-col gap-y-4 p-4 lg:p-9 rounded-lg",
                      "bg-gradient-to-b to-background from-muted/80 border"
                      // bg-card
                      // {
                      //   "lg:border-t ": index % 3 !== 0,
                      //   "lg:border-r ": index % 3 !== 2,
                      //   "lg:border-b ": index === 0,
                      // },
                    )}
                  >
                    <div className="p-1 lg:p-2 rounded-lg shadow size-fit bg-card">
                      {/* <i
                        data-lucide="circle-check"
                        className="size-6 lg:size-7 text-white fill-primary-700"
                      ></i> */}
                      <CheckCircle2 className="size-6 lg:size-7 text-white fill-primary-700" />
                    </div>
                    <div className="flex flex-col gap-y-2">
                      <h3 className="text-xl font-medium capitalize">
                        {item.title}
                      </h3>
                      <p className="text-foreground-subtle">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              {/* <div className="space-x-4">
              <div>
                <Button>Get Started</Button>
                <Button variant="outline">Learn More</Button>
              </div>
              <div>
                <Badge variant="neutral">Powered by shadcn ui</Badge>
              </div>
            </div> */}
            </div>
          </>
        </Container>
      </div>
      <div className="w-full py-28 bg-primary-50 dark:bg-card">
        <Container>
          <div className="page-padding">
            <div className="padding-vertical padding-xhuge">
              <div className="flex flex-col justify-center items-center text-center gap-6">
                <div className="flex flex-col gap-2">
                  <Typography variant="md/semibold" className="text-primary">
                    ACME Works for You
                  </Typography>
                  <Typography
                    variant="5xl/semibold"
                    className="leading-tight max-w-4xl text-foreground"
                  >
                    How ACME makes increasing profit uncomplicated
                  </Typography>
                </div>
                <Typography
                  variant="xl/normal"
                  className="max-w-5xl text-foreground"
                >
                  Looking to take your business to the next level? Look no
                  further than ACME. Our suite of powerful tools is designed to
                  help you generate more leads, improve your conversion rates,
                  and turn those visitors into customers.
                </Typography>

                <div className="margin-top margin-medium">
                  <div className="button-row button-row-center is-reverse-mobile-landscape"></div>
                </div>
              </div>
            </div>
            <div className="container-small"></div>
          </div>
        </Container>
      </div>
      <div className="w-full py-28 bg-background">
        <Container>
          <div className="flex flex-col justify-center items-center text-center gap-4 bg-gray-50 dark:bg-card rounded-lg p-8 pt-14">
            <Typography
              variant="lg/normal"
              className="max-w-5xl text-foreground-secondary"
            >
              Join 250+ companies already growing with ACME
            </Typography>

            <div className="margin-top margin-medium">
              <div className="flex flex-wrap justify-center gap-14">
                <div className="logo02_wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/63461feeef0aab7c459f3c19/66a29adac36c93cdb2737e37_allveteran.webp"
                    loading="lazy"
                    alt="Company logo"
                    className="w-36 h-20 object-contain"
                  />
                </div>
                <div className="logo02_wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/63461feeef0aab7c459f3c19/66a29ae83ff8af1f55dfd03c_allconsumer.svg"
                    loading="lazy"
                    alt="Company logo"
                    className="w-36 h-20 object-contain"
                  />
                </div>
                <div className="logo02_wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/63461feeef0aab7c459f3c19/66a29b1a225206942bc568fa_benefits.webp"
                    loading="lazy"
                    alt="Company logo"
                    className="w-36 h-20 object-contain"
                  />
                </div>
                <div className="logo02_wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/63461feeef0aab7c459f3c19/641a0920878cbeebb8d20f0a_ionsolar-logo-removebg-preview.png"
                    loading="lazy"
                    alt="Company logo"
                    sizes="106.5078125px"
                    srcSet="https://cdn.prod.website-files.com/63461feeef0aab7c459f3c19/641a0920878cbeebb8d20f0a_ionsolar-logo-removebg-preview-p-500.png 500w, https://cdn.prod.website-files.com/63461feeef0aab7c459f3c19/641a0920878cbeebb8d20f0a_ionsolar-logo-removebg-preview-p-800.png 800w, https://cdn.prod.website-files.com/63461feeef0aab7c459f3c19/641a0920878cbeebb8d20f0a_ionsolar-logo-removebg-preview.png 912w"
                    className="w-36 h-20 object-contain"
                  />
                </div>
                <div className="logo01_wrapper logo1-2_wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/63461feeef0aab7c459f3c19/640a4566ee44966daa9d6ef6_jellyfish_logo_color-black-designer-colors-Blue-for-website.png"
                    loading="lazy"
                    sizes="94.453125px"
                    srcSet="https://cdn.prod.website-files.com/63461feeef0aab7c459f3c19/640a4566ee44966daa9d6ef6_jellyfish_logo_color-black-designer-colors-Blue-for-website-p-500.png 500w, https://cdn.prod.website-files.com/63461feeef0aab7c459f3c19/640a4566ee44966daa9d6ef6_jellyfish_logo_color-black-designer-colors-Blue-for-website-p-800.png 800w, https://cdn.prod.website-files.com/63461feeef0aab7c459f3c19/640a4566ee44966daa9d6ef6_jellyfish_logo_color-black-designer-colors-Blue-for-website-p-1080.png 1080w, https://cdn.prod.website-files.com/63461feeef0aab7c459f3c19/640a4566ee44966daa9d6ef6_jellyfish_logo_color-black-designer-colors-Blue-for-website-p-1600.png 1600w, https://cdn.prod.website-files.com/63461feeef0aab7c459f3c19/640a4566ee44966daa9d6ef6_jellyfish_logo_color-black-designer-colors-Blue-for-website-p-2000.png 2000w, https://cdn.prod.website-files.com/63461feeef0aab7c459f3c19/640a4566ee44966daa9d6ef6_jellyfish_logo_color-black-designer-colors-Blue-for-website.png 2143w"
                    alt="Company logo"
                    className="w-36 h-20 object-contain"
                  />
                </div>
              </div>
            </div>
            <div className="container-small"></div>
          </div>
        </Container>
      </div>
      <div className="w-full py-28 bg-background">
        <Container>
          <section className="cta_2_homepage">
            <div className="page-padding">
              <div className="container-large">
                <div className="padding-vertical padding-xhuge">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div className="flex flex-col gap-8">
                      <div className="margin-bottom margin-small">
                        <Typography
                          variant="5xl/semibold"
                          className="leading-tight max-w-4xl text-foreground"
                        >
                          Join Hundreds of Firms Growing with ACME
                        </Typography>
                      </div>
                      <div className="flex flex-col gap-6">
                        {[
                          "Build a Consistent Qualified Pipeline",
                          "Save Time and Resources",
                          "Receive Data-Driven Insights",
                        ].map((t) => (
                          <div key={t} className="flex items-center gap-3">
                            <div>
                              {/* <path fillRule="evenodd" clipRule="evenodd" d="M19.9457 8.62169L11.5923 16.6834L9.37568 14.315C8.96734 13.93 8.32568 13.9067 7.85901 14.2334C7.40401 14.5717 7.27568 15.1667 7.55568 15.645L10.1807 19.915C10.4373 20.3117 10.8807 20.5567 11.3823 20.5567C11.8607 20.5567 12.3157 20.3117 12.5723 19.915C12.9923 19.3667 21.0073 9.81169 21.0073 9.81169C22.0573 8.73836 20.7857 7.79336 19.9457 8.61002V8.62169Z" fill="#3F46FF"></path> */}
                              <Check className="text-primary size-5" />
                            </div>
                            <div className="cta02_item-text-wrapper">
                              <div className="text-size-medium">{t}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-2">
                        <ButtonLink href="#" className="button w-inline-block">
                          <div>Get started</div>
                        </ButtonLink>
                      </div>
                    </div>
                    <div
                      data-w-id="1c32879c-6cb8-4ee2-e242-2bb855b45498"
                      // style="opacity: 1; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;"
                      className="cta02_image-wrapper"
                    >
                      <img
                        src="https://cdn.prod.website-files.com/63461feeef0aab7c459f3c19/6414bd15e5bce03d02cd9b01_charlesdeluvio-Lks7vei-eAg-unsplash.jpg"
                        loading="lazy"
                        sizes="(max-width: 767px) 100vw, 768px"
                        srcSet="https://cdn.prod.website-files.com/63461feeef0aab7c459f3c19/6414bd15e5bce03d02cd9b01_charlesdeluvio-Lks7vei-eAg-unsplash-p-500.jpg 500w, https://cdn.prod.website-files.com/63461feeef0aab7c459f3c19/6414bd15e5bce03d02cd9b01_charlesdeluvio-Lks7vei-eAg-unsplash-p-800.jpg 800w, https://cdn.prod.website-files.com/63461feeef0aab7c459f3c19/6414bd15e5bce03d02cd9b01_charlesdeluvio-Lks7vei-eAg-unsplash-p-1080.jpg 1080w, https://cdn.prod.website-files.com/63461feeef0aab7c459f3c19/6414bd15e5bce03d02cd9b01_charlesdeluvio-Lks7vei-eAg-unsplash-p-1600.jpg 1600w, https://cdn.prod.website-files.com/63461feeef0aab7c459f3c19/6414bd15e5bce03d02cd9b01_charlesdeluvio-Lks7vei-eAg-unsplash-p-2000.jpg 2000w, https://cdn.prod.website-files.com/63461feeef0aab7c459f3c19/6414bd15e5bce03d02cd9b01_charlesdeluvio-Lks7vei-eAg-unsplash-p-2600.jpg 2600w, https://cdn.prod.website-files.com/63461feeef0aab7c459f3c19/6414bd15e5bce03d02cd9b01_charlesdeluvio-Lks7vei-eAg-unsplash-p-3200.jpg 3200w, https://cdn.prod.website-files.com/63461feeef0aab7c459f3c19/6414bd15e5bce03d02cd9b01_charlesdeluvio-Lks7vei-eAg-unsplash.jpg 5418w"
                        alt="MacBook mockup"
                        className="rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Container>
      </div>

      <div className="w-full py-28 bg-primary-50 dark:bg-card">
        <Container>
          <div>
            <div>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <Typography variant="md/semibold" className="text-primary">
                    We&apos;re ready when you are.
                  </Typography>
                  <Typography
                    variant="5xl/semibold"
                    className="leading-tight max-w-4xl text-foreground"
                  >
                    Ready to Take your Marketing to New Heights?
                  </Typography>
                </div>
                <Typography
                  variant="lg/normal"
                  className="max-w-5xl text-foreground-secondary"
                >
                  Learn more below or simply set up a meeting to get started.
                </Typography>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
                  {[
                    {
                      title: "ACME Leads",
                      description:
                        "Our bread and butter is lead generation, with millions of leads captured.",
                    },
                    {
                      title: "ACME Tech",
                      description:
                        "Cutting-edge software and strategies to maximize your conversion rates and take your business to the next level.",
                    },
                    {
                      title: "ACME Offers",
                      description:
                        "Turn would-be-lost leads into revenue for your business, over and over again.",
                    },
                    {
                      title: "Schedule a Meeting",
                      description:
                        "Meet with us for a Free Strategy Call. Well help tailor a plan to meet your needs.",
                    },
                  ].map((c) => (
                    <div
                      key={c.title}
                      className="bg-background p-5 md:p-8 rounded-xl border flex flex-col gap-4"
                    >
                      <div className="flex flex-col">
                        <div className="mb-8 md:mb-16">
                          <div className="p-2 bg-primary-100 dark:border dark:bg-transparent rounded size-fit">
                            <img
                              src="https://cdn.prod.website-files.com/63461feeef0aab7c459f3c19/6408c23ae7c9a77ac359fc23_L.svg"
                              loading="lazy"
                              alt="Stylized Letter L"
                              className="size-12"
                            />
                          </div>
                        </div>
                        <Typography as="h5" variant="2xl/medium" className="">
                          {c.title}
                        </Typography>
                        <Typography
                          as="p"
                          variant="lg/normal"
                          className="text-foreground-subtle mt-4"
                        >
                          {c.description}
                        </Typography>
                      </div>
                      <div>
                        <div className="grid w-full items-center gap-4"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="container-small"></div>
          </div>
        </Container>
      </div>

      <div>
        <footer className="pb-8">
          <div>
            <Container>
              <>
                <div className="bg-gray-50 dark:bg-card p-16 rounded-lg mt-36 mb-16">
                  <div className="flex flex-col gap-5 text-center">
                    <div>
                      <Typography
                        as="h3"
                        variant="4xl/semibold"
                        className="text-primary-600"
                      >
                        Get more customers with&nbsp;ACME.
                      </Typography>
                    </div>
                    <Typography as="p" variant="lg/normal" className="">
                      Join the many firms already growing with ACME.
                    </Typography>
                    <div className="mt-4">
                      <Button>Get Started</Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="py-14">
                    <div className="flex flex-col gap-8 md:flex-row justify-between items-center">
                      <a
                        id="w-node-dde648c4-b69f-117b-0737-d4bbeb47e1af-eb47e198"
                        href="#"
                        className=""
                      >
                        <Typography
                          as="h6"
                          variant="xl/medium"
                          className="text-foreground"
                        >
                          <span className="">ACME</span>
                          <span className="font-medium text-primary ml-1">
                            INC
                          </span>
                        </Typography>
                        {/* <div tabIndex={0} role="button" className="size-24">
                          <img
                            src="https://cdn.prod.website-files.com/63461feeef0aab7c459f3c19/63462a28ab79234b65c5a678_ampry_site_logo_dark.svg"
                            loading="lazy"
                            role="button"
                            alt="ACME logo"
                            className="uui-styleguide_logotype-2"
                          />
                        </div> */}
                      </a>
                      <div className="flex gap-8 font-medium">
                        <a href="#">
                          <div>Home</div>
                        </a>
                        <a href="#">
                          <div>Log In</div>
                        </a>
                        <a href="#">
                          <div>Blog</div>
                        </a>
                        <a href="#">
                          <div>Help</div>
                        </a>
                        <a href="#">
                          <div>Solutions</div>
                        </a>
                      </div>
                      <div className="flex gap-6 text-foreground-subtle">
                        <a
                          aria-label="Visit our Facebook page"
                          href="#"
                          target="_blank"
                        >
                          <div>
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </div>
                        </a>
                        <a
                          aria-label="Visit our Instagram Page"
                          href="#"
                          target="_blank"
                        >
                          <div>
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 2.16094C15.2063 2.16094 15.5859 2.175 16.8469 2.23125C18.0188 2.28281 18.6516 2.47969 19.0734 2.64375C19.6313 2.85938 20.0344 3.12188 20.4516 3.53906C20.8734 3.96094 21.1313 4.35938 21.3469 4.91719C21.5109 5.33906 21.7078 5.97656 21.7594 7.14375C21.8156 8.40937 21.8297 8.78906 21.8297 11.9906C21.8297 15.1969 21.8156 15.5766 21.7594 16.8375C21.7078 18.0094 21.5109 18.6422 21.3469 19.0641C21.1313 19.6219 20.8688 20.025 20.4516 20.4422C20.0297 20.8641 19.6313 21.1219 19.0734 21.3375C18.6516 21.5016 18.0141 21.6984 16.8469 21.75C15.5813 21.8063 15.2016 21.8203 12 21.8203C8.79375 21.8203 8.41406 21.8063 7.15313 21.75C5.98125 21.6984 5.34844 21.5016 4.92656 21.3375C4.36875 21.1219 3.96563 20.8594 3.54844 20.4422C3.12656 20.0203 2.86875 19.6219 2.65313 19.0641C2.48906 18.6422 2.29219 18.0047 2.24063 16.8375C2.18438 15.5719 2.17031 15.1922 2.17031 11.9906C2.17031 8.78438 2.18438 8.40469 2.24063 7.14375C2.29219 5.97187 2.48906 5.33906 2.65313 4.91719C2.86875 4.35938 3.13125 3.95625 3.54844 3.53906C3.97031 3.11719 4.36875 2.85938 4.92656 2.64375C5.34844 2.47969 5.98594 2.28281 7.15313 2.23125C8.41406 2.175 8.79375 2.16094 12 2.16094ZM12 0C8.74219 0 8.33438 0.0140625 7.05469 0.0703125C5.77969 0.126563 4.90313 0.332812 4.14375 0.628125C3.35156 0.9375 2.68125 1.34531 2.01563 2.01562C1.34531 2.68125 0.9375 3.35156 0.628125 4.13906C0.332812 4.90313 0.126563 5.775 0.0703125 7.05C0.0140625 8.33437 0 8.74219 0 12C0 15.2578 0.0140625 15.6656 0.0703125 16.9453C0.126563 18.2203 0.332812 19.0969 0.628125 19.8563C0.9375 20.6484 1.34531 21.3188 2.01563 21.9844C2.68125 22.65 3.35156 23.0625 4.13906 23.3672C4.90313 23.6625 5.775 23.8687 7.05 23.925C8.32969 23.9812 8.7375 23.9953 11.9953 23.9953C15.2531 23.9953 15.6609 23.9812 16.9406 23.925C18.2156 23.8687 19.0922 23.6625 19.8516 23.3672C20.6391 23.0625 21.3094 22.65 21.975 21.9844C22.6406 21.3188 23.0531 20.6484 23.3578 19.8609C23.6531 19.0969 23.8594 18.225 23.9156 16.95C23.9719 15.6703 23.9859 15.2625 23.9859 12.0047C23.9859 8.74688 23.9719 8.33906 23.9156 7.05938C23.8594 5.78438 23.6531 4.90781 23.3578 4.14844C23.0625 3.35156 22.6547 2.68125 21.9844 2.01562C21.3188 1.35 20.6484 0.9375 19.8609 0.632812C19.0969 0.3375 18.225 0.13125 16.95 0.075C15.6656 0.0140625 15.2578 0 12 0Z"
                                fill="currentColor"
                              ></path>
                              <path
                                d="M12 5.83594C8.59688 5.83594 5.83594 8.59688 5.83594 12C5.83594 15.4031 8.59688 18.1641 12 18.1641C15.4031 18.1641 18.1641 15.4031 18.1641 12C18.1641 8.59688 15.4031 5.83594 12 5.83594ZM12 15.9984C9.79219 15.9984 8.00156 14.2078 8.00156 12C8.00156 9.79219 9.79219 8.00156 12 8.00156C14.2078 8.00156 15.9984 9.79219 15.9984 12C15.9984 14.2078 14.2078 15.9984 12 15.9984Z"
                                fill="currentColor"
                              ></path>
                              <path
                                d="M19.8469 5.59214C19.8469 6.38902 19.2 7.0312 18.4078 7.0312C17.6109 7.0312 16.9688 6.38433 16.9688 5.59214C16.9688 4.79526 17.6156 4.15308 18.4078 4.15308C19.2 4.15308 19.8469 4.79995 19.8469 5.59214Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </div>
                        </a>
                        <a
                          aria-label="Visit our X Page"
                          href="#"
                          target="_blank"
                        >
                          <div>
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7.55016 21.75C16.6045 21.75 21.5583 14.2467 21.5583 7.74186C21.5583 7.53092 21.5536 7.3153 21.5442 7.10436C22.5079 6.40746 23.3395 5.54425 24 4.5553C23.1025 4.9546 22.1496 5.21538 21.1739 5.32874C22.2013 4.71291 22.9705 3.74547 23.3391 2.60577C22.3726 3.17856 21.3156 3.58261 20.2134 3.80061C19.4708 3.01156 18.489 2.48912 17.4197 2.31405C16.3504 2.13899 15.2532 2.32105 14.2977 2.8321C13.3423 3.34314 12.5818 4.15471 12.1338 5.14131C11.6859 6.12792 11.5754 7.23462 11.8195 8.2903C9.86249 8.19209 7.94794 7.6837 6.19998 6.7981C4.45203 5.91249 2.90969 4.66944 1.67297 3.14952C1.0444 4.23324 0.852057 5.51565 1.13503 6.73609C1.418 7.95654 2.15506 9.02345 3.19641 9.71999C2.41463 9.69517 1.64998 9.48468 0.965625 9.10592V9.16686C0.964925 10.3041 1.3581 11.4066 2.07831 12.2868C2.79852 13.167 3.80132 13.7706 4.91625 13.995C4.19206 14.1931 3.43198 14.222 2.69484 14.0794C3.00945 15.0574 3.62157 15.9129 4.44577 16.5263C5.26997 17.1398 6.26512 17.4806 7.29234 17.5012C5.54842 18.8711 3.39417 19.6141 1.17656 19.6106C0.783287 19.61 0.390399 19.5859 0 19.5384C2.25286 20.9837 4.87353 21.7514 7.55016 21.75Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </div>
                        </a>
                        <a
                          aria-label="Visit our LinkedIn page"
                          href="#"
                          target="_blank"
                        >
                          <div>
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5562 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2937 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <Separator />
                  <div className="w-full flex justify-center text-center pt-10 pb-4 text-foreground-subtle text-sm">
                    <div className="flex gap-6">
                      <div>© 2024 &nbsp;All Rights Reserved</div>
                    </div>
                  </div>
                </div>
              </>
            </Container>
          </div>
        </footer>
      </div>
    </div>
  );
}
