"use client";

import React, { useEffect, useState } from 'react';
import { Select,SelectTrigger,SelectItem,SelectContent,SelectValue } from './ui/select';
import { accountSchema } from '@/app/lib/schema';
import { Drawer,DrawerTrigger,DrawerContent ,DrawerHeader,DrawerTitle, DrawerClose} from './ui/drawer';
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Button } from './ui/button';
import useFetch from '@/hooks/use-fetch';
import { createAccount } from '@/actions/dashboard';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';
const CreateAccountDrawer = ({ children }) => {
    const [open, setOpen] = useState(false);
    const { register,handleSubmit,formState:{errors},setValue,watch,reset,} =useForm({
        resolver: zodResolver(accountSchema),
        defaultValues: {
            name: '',
            type: 'CURRENT',
            balance: "",
            isDefault: false,
        },
    });


    const {
        data: newAccount,
        error,
        fn:createAccountFn,
        loading: createAccountLoading,
    } = useFetch(createAccount);

    const onSubmit = async (data) => {
        await createAccountFn(data);
    };
    useEffect(() => {

        if (newAccount && !createAccountLoading) {
            toast.success("Account created successfully");
            reset();
            setOpen(false);
        }
            
        
    }, [createAccountLoading, newAccount]);


    useEffect(() => {
        if (error) {
            toast.error(error.message || "Failed to create account");
        }
    },[error]);
    

  return (
      <Drawer open={open} onOpenChange={setOpen}>
          <DrawerTrigger asChild>{ children}</DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Create New Account</DrawerTitle>
        
              </DrawerHeader>
              <div className='mb-4 px-4'>
                  <form className='space-y-4' onSubmit={handleSubmit(onSubmit)}>
                      <div className='space-y-2'>
                          <label htmlFor="name" className=' text-sm font-medium'>
                              Account Name
                          </label>
                          <Input
                              id="name"
                              placeholder="e.g.,Main Checking"
                              {...register("name")}
                          />
                          {errors.name && (
                              <p className='text-sm text-red-500'>{ errors.name.message}</p>
                          )}
                      </div>
                      <div className='space-y-2'>
                          <label htmlFor="type" className=' text-sm font-medium'>
                              Account Type
                          </label>
                          <Select onValueChange={(value) => setValue("type", value)}
                          defaultValue={watch("type")}>
      <SelectTrigger id="type">
    <SelectValue placeholder="Select Type" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="CURRENT">Current</SelectItem>
    <SelectItem value="SAVINGS">Savings</SelectItem>
    
  </SelectContent>
</Select>

                          {errors.type && (
                              <p className='text-sm text-red-500'>{ errors.type.message}</p>
                          )}
                      </div>
                      <div className='space-y-2'>
                          <label htmlFor="balance" className=' text-sm font-medium'>
                              Initial Balance
                          </label>
                          <Input
                              id="balance"
                              type="number"
                              step="0.01"
                          placeholder="0.00"
                              {...register("balance")}
                          />
                          {errors.balance&& (
                              <p className='text-sm text-red-500'>{ errors.balance.message}</p>
                          )}
                      </div>
                      <div className='flex items-center justify-between rounded-lg border p-3'>
                          <div className='space-y-0.5'>
                          <label htmlFor="isDefault" className=' text-sm font-medium cursor-pointer'>
                             Set as Default
                          </label>
                              <p className='text-sm text-muted-foreground'>This account will be selected by default for transactions</p>
                              </div>
                          <Switch id='isDefault' />
                          <Select onCheckedChange={(checked) => setValue("isDefault", value)}
                          checked={watch("isDefault")}></Select>
                          
                      </div>

                      <div className='flex gap-4 pt-4'>
                          <DrawerClose asChild>
                              <Button type="button" variant="outline" className="flex-1">
                                  Cancel
                              </Button>
                          </DrawerClose>
                          <Button type="submit" className="flex-1" disabled={createAccountLoading}>
                              {createAccountLoading ? (<>
                                  <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                                  Creating...
                              </>
                              ) : (
                                      "Create Account"
                                  )
                             }
                          </Button>
                      </div>
                  </form>
 </div>
    </DrawerContent>
  </Drawer>
  )
}

export default CreateAccountDrawer;