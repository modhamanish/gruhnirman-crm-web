// MUI Imports
import Grid from '@mui/material/Grid2'

// Component Imports
import CardStatHorizontal from '@/components/card-statistics/Horizontal'

// Vars
const data: any[] = [
  {
    title: 'Commercial',
    stats: '1,000',
    avatarIcon: 'tabler-building-community',
    avatarColor: 'primary'
  },
  {
    title: 'Residential',
    stats: '4,567',
    avatarIcon: 'tabler-home',
    avatarColor: 'error'
  },
  {
    title: 'Plotting',
    stats: '19,860',
    avatarIcon: 'tabler-map-route',
    avatarColor: 'success'
  },
  {
    title: 'Industrial',
    stats: '237',
    avatarIcon: 'tabler-building-fortress',
    avatarColor: 'warning'
  }
]

const PropertyListCards = () => {
  return (
    <Grid container spacing={4}>
      {data.map((item, i) => (
        <Grid key={i} size={{ xs: 12, sm: 6, md: 3 }}>
          <CardStatHorizontal {...item} />
          {/* <HorizontalWithSubtitle {...item} /> */}
        </Grid>
      ))}
    </Grid>
  )
}

export default PropertyListCards
