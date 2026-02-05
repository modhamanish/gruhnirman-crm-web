// MUI Imports
import Grid from '@mui/material/Grid2'

// Component Imports
import PropertyDetails from './PropertyDetails'

const UserLeftOverview = () => {
  return (
    <Grid container spacing={4}>
      <Grid size={{ xs: 12 }}>
        <PropertyDetails />
      </Grid>
    </Grid>
  )
}

export default UserLeftOverview
