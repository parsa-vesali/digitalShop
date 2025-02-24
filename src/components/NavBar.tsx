import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from './ui';
import {
  LogIn,
  ShoppingCart,
  Package,
  Zap,
  DollarSign,
  Store,
  RefreshCw,
  MapPin,
  Search,
} from 'lucide-react';

export const NavBar = () => {
  return (
    <div className="w-full fixed top-0 z-20 bg-white shadow">
      {/* ADS */}
      <Link href={'/products'}>
        <Image
          alt="gif"
          src="/image/svg/1.gif"
          width={100}
          height={100}
          className="w-full h-15 object-cover"
        />
      </Link>
      {/* TOPBAR */}
      <div className="container py-5 h-17 flex items-center justify-between">
        <div className="flex items-center gap-x-10">
          {/* lOGO */}
          <Link
            href={'/'}
            className="flex items-center gap-x-1 text-primary font-MorabbaMedium text-3xl font-semibold"
          >
            اسمارت کالا
          </Link>
          {/* SEARCHBAR */}
          <Button variant={'secondary'}>
            <Search size={20} className="text-gray-600" />
            <input
              type="text"
              className="w-96 bg-transparent p-2 outline-none border-none"
              placeholder="جستجو..."
            />
          </Button>
        </div>
        {/* ACTIONS */}
        <div className="flex items-center gap-x-4">
          <Button variant={'outline'}>
            <Link
              href={'/'}
              className="font-DanaMedium flex items-center gap-x-2"
            >
              <LogIn className="icon-xl rotate-180" />
              ورود | ثبت‌نام
            </Link>
          </Button>

          <Button variant={'ghost'} size={'icon'}>
            <ShoppingCart className="icon-xl" />
          </Button>
        </div>
      </div>
      {/* NAVBAR */}
      <div className="container h-10 flex items-center justify-between">
        <ul className="flex items-center gap-x-6">
          <li>
            <Link href="/categories" className="navar-link">
              <Package size={16} />
              دسته بندی
            </Link>
          </li>
          <li>
            <Link href="/products" className="navar-link">
            <Store size={16} />
              فروشگاه
            </Link>
          </li>
          <li>
            <Link href="/amazing-offers" className="navar-link">
              <Zap size={16} />
              شگفت‌انگیزها
            </Link>
          </li>
          <li>
            <Link href="/digital-gold" className="navar-link">
              <DollarSign size={16} />
              طلای دیجیتال
            </Link>
          </li>
          <li>
            <Link href="/best-sellers" className="navar-link">
              <ShoppingCart size={16} />
              پرفروش‌ترین‌ها
            </Link>
          </li>
          <li>
            <Link href="/used-products" className="navar-link">
              <RefreshCw size={16} />
              خرید کالای کارکرده
            </Link>
          </li>
        </ul>
        <span>
          <Link
            href="/map"
            className="flex items-center gap-x-1.5 text-sm text-gray-600"
          >
            <MapPin size={16} />
            ارسال به همدان، همدان
          </Link>
        </span>
      </div>
    </div>
  );
};
