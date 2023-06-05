import {AiOutlineCloseCircle} from 'react-icons/ai'
import {
  BannerCardContainer,
  BannerCardTypeContainer,
  BannerCardImage,
  BannerCardButton,
  BannerCardGetNowButton,
  BannerCardHeading,
} from './styleComponent'

const Banner = props => {
  const {removeBanner} = props

  return (
    <BannerCardContainer data-testid="banner">
      <BannerCardTypeContainer>
        <BannerCardImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <BannerCardHeading>
          Buy Nxt Watch Premium prepaid plans with UPI
        </BannerCardHeading>
        <BannerCardGetNowButton type="button">
          GET IT NOW
        </BannerCardGetNowButton>
      </BannerCardTypeContainer>
      <BannerCardButton
        type="button"
        onClick={() => removeBanner()}
        data-testid="close"
      >
        <AiOutlineCloseCircle className="banner-close-icon" />
      </BannerCardButton>
    </BannerCardContainer>
  )
}

export default Banner
