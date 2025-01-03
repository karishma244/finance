import React from 'react';
import CreateAccountDrawer from '@/components/create-account-drawer';
import { Card, CardContent } from '@/components/ui/card';
import { Plus } from 'lucide-react';
import { getUserAccounts } from "@/actions/dashboard";
import AccountCard from './_components/account-card';
import BudgetProgress from "./_components/budget-progress";
import { getCurrentBudget } from "@/actions/budget";
 async function DashboardPage() {
     const account = await getUserAccounts();
     const defaultAccount = account?.find((account) => account.isDefault);
     // Get budget for default account
  let budgetData = null;
  if (defaultAccount) {
    budgetData = await getCurrentBudget(defaultAccount.id);
  }
     return (
         <div className='space-y-8'>
             {/* Budget Progress */}
            {defaultAccount && (<BudgetProgress
             initialBudget={budgetData?.budget}
             currentExpenses={budgetData?.currentExpenses || 0}
            />)}
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