import React from 'react'
import {FeatureContainer, FeatureButton} from './FeatureElements'

const Feature = () => {
    return (
        <FeatureContainer>
            <h1>Pizza of the day</h1>
            <p>some information about the pizza of the day</p>
            <FeatureButton>
                Order Now
            </FeatureButton>
        </FeatureContainer>
    )
}

export default Feature
