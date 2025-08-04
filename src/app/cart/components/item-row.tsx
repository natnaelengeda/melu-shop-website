import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { TableCell, TableRow } from '@/components/ui/table'

// state
import useCartStore from '@/store/cart';

// utils
import AppAsset from '@/core/AppAsset';
import { addCommas } from '@/utils/add-commas';

// icons
import { Minus, Plus, Trash2 } from 'lucide-react';

interface IItemRow {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

export default function ItemRow({ id, imageUrl, name, price }: IItemRow) {
  const { removeQuantity, addQuantity, removeProduct, getItemQuantity } = useCartStore();

  const quantity = getItemQuantity(id);

  return (
    <TableRow>
      <TableCell>
        <div className="flex items-center gap-3">
          <div className="w-16 h-16 relative rounded overflow-hidden">
            <Image
              src={imageUrl || AppAsset.Logo}
              alt={name}
              fill
              className="object-cover" />
          </div>
          <div>
            <Link href={`/product/${id}`} className="font-medium hover:underline">
              {name}
            </Link>
          </div>
        </div>
      </TableCell>
      <TableCell className="text-right">{addCommas(price)} ETB</TableCell>
      <TableCell className="text-right">
        <div className="flex items-center justify-end">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 rounded-r-none cursor-pointer"
            onClick={() => removeQuantity(id)}>
            <Minus className="h-3 w-3" />
            <span className="sr-only">Decrease quantity</span>
          </Button>
          <div className="h-8 w-10 flex items-center justify-center border-y">
            <span className="text-sm">{quantity}</span>
          </div>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 rounded-l-none cursor-pointer"
            onClick={() => addQuantity(id)}>
            <Plus className="h-3 w-3" />
            <span className="sr-only">Increase quantity</span>
          </Button>
        </div>
      </TableCell>
      <TableCell className="text-right font-medium">{addCommas(price * quantity)} ETB</TableCell>
      <TableCell>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-muted-foreground"
          onClick={() => removeProduct(id)}>
          <Trash2 className="h-4 w-4" />
          <span className="sr-only">Remove item</span>
        </Button>
      </TableCell>
    </TableRow>
  )
}
