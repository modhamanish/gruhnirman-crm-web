// MUI Imports
import Grid from '@mui/material/Grid2'

// Server Action Imports
import PropertyList from '@/views/property/list'

const PropertyListApp = async () => {
  return (
    <Grid container spacing={4}>
      <Grid size={{ xs: 12 }}>
        <PropertyList />
      </Grid>
    </Grid>
  )
}

export default PropertyListApp
