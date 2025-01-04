import React from "react";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "./ui/input";

const ResponsiveNav = () => {
  return (
    <div  className="md:hidden ">
      <div className="py-3 text-center">
        <h1 className="text-2xl font-bold">MagDesign</h1>
      </div>
      <div className="flex items-center justify-between mx-auto  py-3 px-5">
        <div className="flex items-center gap-6">
          <FaFacebook />
          <FaYoutube />
          <FaTwitter />
        </div>

        <div className=" ">
          <Sheet>
            <SheetTrigger>
              {" "}
              <MenuIcon size={30} />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
               
                <SheetDescription className="pt-1 mt-6 ">
                  <div className="text-black text-left hover:text-orange-500">
                    <Link href="/">Home</Link>
                  </div>
                  <Accordion type="single" collapsible className="w-full ">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-black hover:text-orange-500">
                        Categories
                      </AccordionTrigger>
                      <AccordionContent className="flex flex-col gap-2  text-left text-black">
                        <Link href="#" className="hover:text-orange-500">
                          Travel
                        </Link>
                        <Link href="#" className="hover:text-orange-500">
                          Food
                        </Link>
                        <Link href="#" className="hover:text-orange-500">
                          Technology
                        </Link>
                        <Link href="#" className="hover:text-orange-500">
                          Business
                        </Link>
                        <Accordion type="single" collapsible className="w-full">
                          <AccordionItem value="item-1">
                            <AccordionTrigger className="text-black hover:text-orange-500">
                              DropDpwn
                            </AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-2 text-left  text-black">
                              <Link
                                href="#"
                                className="hover:text-orange-500"
                              >
                                Sub Menu One
                              </Link>
                              <Link
                                href="#"
                                className="hover:text-orange-500"
                              >
                                Sub Menu Two
                              </Link>
                              <Link
                                href="#"
                                className="hover:text-orange-500"
                              >
                                Sub Menu Three
                              </Link>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <div className="flex flex-col gap-2 text-black text-left ">
                    <Link href="#" className="hover:text-orange-500">
                      Travel
                    </Link>
                    <Link href="#" className="hover:text-orange-500">
                      Food
                    </Link>
                    <Link href="#" className="hover:text-orange-500">
                      Technology
                    </Link>
                    <Link href="#" className="hover:text-orange-500">
                      Business
                    </Link>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <div className=" border-b border-gray-300 pb-4">
        <div className="w-64 mx-auto">
         
          <Input placeholder="Search..." />
        </div>

        {/* <FaSearch size={20} className='mt-[-10px]'/> */}
      </div>
    </div>
  );
};

export default ResponsiveNav;
