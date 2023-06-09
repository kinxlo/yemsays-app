/* eslint-disable react/prop-types */
import { Center, Grid, GridItem, Image } from '@chakra-ui/react'
import React from 'react'
import EditImgOverlay from '../../components/editImgOverlay/EditImgOverlay'
import SpinnerComponent from '../../components/feedback/SpinnerComponent'

const GridImageLayout = ({
  newProperty,
  isNotEditProperty,
  imageSet,
  isLoading,
}) => {
  return (
    <Grid
      h='562px'
      templateRows='repeat(3, 1fr)'
      templateColumns='repeat(3, 1fr)'
      gap={4}
      borderRadius={10}
      overflow={`hidden`}
    >
      <GridItem
        rowSpan={{ base: 2, lg: 3 }}
        colSpan={{ base: 3, lg: 2 }}
        bg='dashboardBG'
        pos={`relative`}
      >
        <EditImgOverlay isNotEditProperty={isNotEditProperty} />
        {isLoading ? (
          <SpinnerComponent size={`xl`} />
        ) : (
          <Image
            height={`100%`}
            display={newProperty ? `none` : `block`}
            className='cc-img-fluid'
            src={imageSet?.[0]}
          />
        )}
      </GridItem>
      <GridItem pos={`relative`} colSpan={1} bg='dashboardBG'>
        <EditImgOverlay size={`2rem`} isNotEditProperty={isNotEditProperty} />
        {isLoading ? (
          <SpinnerComponent size={`lg`} />
        ) : (
          <Image
            height={`177px`}
            display={newProperty ? `none` : `block`}
            className='cc-img-fluid'
            src={imageSet?.[1]}
          />
        )}
      </GridItem>
      <GridItem pos={`relative`} colSpan={1} bg='dashboardBG'>
        <EditImgOverlay size={`2rem`} isNotEditProperty={isNotEditProperty} />
        {isLoading ? (
          <SpinnerComponent size={`lg`} />
        ) : (
          <Image
            height={`177px`}
            display={newProperty ? `none` : `block`}
            className='cc-img-fluid'
            src={imageSet?.[2]}
          />
        )}
      </GridItem>
      <GridItem pos={`relative`} colSpan={1} bg='dashboardBG'>
        <EditImgOverlay size={`2rem`} isNotEditProperty={isNotEditProperty} />
        {isLoading ? (
          <SpinnerComponent size={`lg`} />
        ) : (
          <Image
            height={`177px`}
            display={newProperty ? `none` : `block`}
            className='cc-img-fluid'
            src={imageSet?.[3]}
          />
        )}
      </GridItem>
    </Grid>
  )
}

export default GridImageLayout
