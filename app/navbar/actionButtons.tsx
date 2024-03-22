"use client"
import React from 'react'
import { Button } from '@/components/ui/button';
import { Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetDescription,
  SheetTitle, } from '@/components/ui/sheet';
import Link from 'next/link';
import { AlignCenter } from 'lucide-react';
  
const ActionButtons = () => {
  return (
    <>
    <div className='md:hidden flex md:space-x-4 md:flex-col md:items-center'>
      <Sheet>
        <SheetTrigger>
            <AlignCenter  />
        </SheetTrigger>
        <SheetContent>
        <SheetDescription>
          <div className='flex flex-col space-y-2 w-full text-black mt-10'>
          <Link href="/">Sign in</Link>
          <Link href="/">Get Started</Link>
          <Link href="/">Features</Link>
          <Link href="/">About Us</Link>
          
          </div>
        </SheetDescription>
        </SheetContent>
      </Sheet>

      
    </div>
    <div className='hidden md:flex md:space-x-4'>
      <Button className='text-md text-bold '
      variant="ghost">
        Sign in
      </Button>
      <Button className='text-md bg-blue-600'>Get Started
      </Button>



    </div>
    </>
  )
}

export default ActionButtons
