// MUI Imports
import Grid from '@mui/material/Grid2'

// Type Imports
import type { UsersType } from '@/types/apps/userTypes'

// Component Imports
import PropertyListTable from './PropertyListTable'
import PropertyListCards from './PropertyListCards'

const PropertyList = () => {
  return (
    <Grid container spacing={4}>
      <Grid size={{ xs: 12 }}>
        <PropertyListCards />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <PropertyListTable />
      </Grid>
    </Grid>
  )
}

export default PropertyList
