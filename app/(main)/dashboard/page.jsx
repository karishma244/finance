import React from 'react';
import CreateAccountDrawer from '@/components/create-account-drawer';
import { Card, CardContent } from '@/components/ui/card';
import { Plus } from 'lucide-react';
import { getUserAccounts } from "@/actions/dashboard";
import AccountCard from './_components/account-card';

 async function DashboardPage() {
     const account = await getUserAccounts();
    
    
     return (
         <div className='px-5'>
             {/* Budget Progress */}
             {/* Overview */}
             {/* Accounts Grid */}
             <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
                 <CreateAccountDrawer>
                     <Card className='hover:shadow-md transition-shadow cursor-pointer'>
                         <CardContent className="flex flex-col items-center justify-center
                        text-muted-foreground h-full pt-5">
                             <Plus className='h-10 w-10 mb-2' />
                             <p className='text-sm font-medium'> Add New Account</p>
                         </CardContent>
                     </Card>
                 </CreateAccountDrawer>
                 {account.length > 0 &&
                     account?.map((account) => {
                         return <AccountCard key={ account.id} account={account} />
                     })}
             </div>
         </div>
     );
}
  


export default DashboardPage;