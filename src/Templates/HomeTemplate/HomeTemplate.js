import HomeFooter from './HomeFooter'
import HomeHeader from './HomeHeader'

export default function HomeTemplate(props) {
    const { Component } = props

    return (
        <div>
            <HomeHeader />
            <Component />
            <HomeFooter />
        </div>

    )
}
