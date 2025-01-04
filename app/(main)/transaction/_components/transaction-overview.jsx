"use client"

import React, { useState } from 'react';
import AccountsPage from '../../account/[id]/page';
import {Card,CardHeader,CardTitle,CardContent } from '@/components/ui/card';
const DashboardOverview = ({account,transactions}) => {
    const [selectedAccountId,setSelectedAccountId]=useState(
         account.find((a)=>a.isDefault)?.id || account[0].id
    );
    //filter transactions for selected amount
    const accountTransactions=transactions.filter(
        (t)=>t.accountId===selectedAccountId
    );

    const recentTransactions=accountTransactions.sort((a,b)=> new Date(b.date)-new Date(a.date))
    .slice(0,5);
  return (
    <div className='grid gap-4 md:grid-cols-2'>
        <Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
   
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  
</Card>
     

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
   
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
 
</Card>

    </div>
  )
};

export default DashboardOverview;