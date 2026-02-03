import dynamic from 'next/dynamic'

// MUI Imports
import Grid from '@mui/material/Grid2'

// Server Action Imports
import PropertyLeftOverview from '@views/property/view/user-left-overview'
import PropertyView from '@/views/property/view/user-right'
import { PricingPlanType } from '@/types/pages/pricingTypes'
import { ReactElement } from 'react'

// Dynamic Imports
const OverViewTab = dynamic(() => import('@views/apps/user/view/user-right/overview'))
const SecurityTab = dynamic(() => import('@views/apps/user/view/user-right/security'))
const BillingPlans = dynamic(() => import('@views/apps/user/view/user-right/billing-plans'))
const NotificationsTab = dynamic(() => import('@views/apps/user/view/user-right/notifications'))
const ConnectionsTab = dynamic(() => import('@views/apps/user/view/user-right/connections'))

// Vars
const tabContentList = (data?: PricingPlanType[]): { [key: string]: ReactElement } => ({
  overview: <OverViewTab />,
  security: <SecurityTab />,
  'billing-plans': <BillingPlans data={data} />,
  notifications: <NotificationsTab />,
  connections: <ConnectionsTab />
})

const PropertyViewApp = async () => {
  return (
    <Grid container spacing={4}>
      <Grid size={{ xs: 12, lg: 4, md: 5 }}>
        <PropertyLeftOverview />
      </Grid>
      <Grid size={{ xs: 12, lg: 8, md: 7 }}>
        <PropertyView tabContentList={tabContentList()} />
      </Grid>
    </Grid>
  )
}

export default PropertyViewApp
