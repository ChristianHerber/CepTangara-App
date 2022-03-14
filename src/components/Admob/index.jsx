import { AdMobBanner, setTestDeviceIDAsync } from "expo-ads-admob";

const Admob = () => {
    return (
        <AdMobBanner
            bannerSize='fullBanner'
            adUnitID='ca-app-pub-3032945660168947/4065297547'
            setTestDeviceIDAsync
            servePersonalizedAds
            onDidFailToReceiveAdWithError={ (err) => console.log(err) }
        />
    )
}

export default Admob