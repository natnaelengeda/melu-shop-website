"use client";

import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler, Controller } from "react-hook-form"

// components
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// api
import { useFilteredProducts } from '@/api/products';
import { useGetCategories } from '@/api/category';

// type
import { Category } from '@/types/products';

// icons
import { Eraser, Filter } from 'lucide-react'

type Inputs = {
  product: string;
  category: string;
  price: string;
  sortBy: string;
};

export default function SearchForm({ isLoading, setProducts, setIsLoading }: any) {
  const [formData, setFormData] = useState<any>({
    product: "",
    category: "",
    price: "all",
    sortBy: "newest",
  });

  const { data: categories, isPending: isCategoryPending }: { data: Category[] | undefined, isPending: boolean } = useGetCategories();
  const { data, refetch, isFetching } = useFilteredProducts(formData);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { isDirty },
  } = useForm<Inputs>({
    defaultValues: {
      product: "",
      category: "",
      price: "all",
      sortBy: "newest",
    }
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setFormData(data);
    refetch();
  }

  useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, [data]);

  useEffect(() => {
    setIsLoading(isFetching);
  }, [isFetching]);

  return (
    <form
      className="bg-muted p-4 rounded-lg mb-8 mt-10"
      onSubmit={handleSubmit(onSubmit)}>
      <div
        className="w-full flex flex-col md:flex-row gap-4">
        <div className='w-full flex flex-row items-center justify-between gap-5'>
          <div className="w-full flex-1">
            <Input
              className='bg-white w-full'
              placeholder="Search product..."
              {...register('product')} />
          </div>
          <div className="flex flex-row items-center justify-end gap-3">
            <Controller
              name='category'
              control={control}
              defaultValue={categories && categories[0].id.toString()}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger>
                    <SelectValue
                      placeholder="Category"
                      color=''
                      style={{
                        color: 'white',
                      }} />
                  </SelectTrigger>
                  <SelectContent>
                    {
                      !isCategoryPending &&
                      categories &&
                      categories.map((category, index: number) => {
                        return (
                          <SelectItem
                            key={index}
                            value={category.id.toString()}>
                            {category.name}
                          </SelectItem>
                        );
                      })
                    }
                    {
                      isCategoryPending &&
                      <div className='px-2 py-1'>
                        <p className='text-sm'>Categories Loading...</p>
                      </div>
                    }
                  </SelectContent>
                </Select>
              )} />

            <Controller
              name="price"
              control={control}
              defaultValue='all'
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Price" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Prices</SelectItem>
                    <SelectItem value="under-250">Under 250ETB</SelectItem>
                    <SelectItem value="250-500">250ETB to 500ETB</SelectItem>
                    <SelectItem value="500-1000">500ETB to 1000ETB</SelectItem>
                    <SelectItem value="over-100">Over 100ETB</SelectItem>
                  </SelectContent>
                </Select>
              )} />
            <Controller
              name="sortBy"
              control={control}
              defaultValue='newest'
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sort By" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              )} />
          </div>
        </div>
        <div className='flex flex-row items-center justify-end gap-2'>
          {isDirty &&
            <Button
              type='reset'
              onClick={() => reset()}
              className='bg-gray-700 hover:bg-gray-600 text-white border border-gray-200 cursor-pointer'>
              <Eraser
                className="h-4 w-4" />
              <span
                className="">
                Clear
              </span>
            </Button>}
          <Button
            type='submit'
            disabled={isFetching}
            className='bg-primary text-black border border-gray-200 cursor-pointer'>
            {
              isFetching ?
                <LoadingSpinner /> :
                <Filter
                  className="h-4 w-4" />
            }
            <span
              className="">
              Search
            </span>
          </Button>
        </div>
      </div>
    </form>
  )
}
