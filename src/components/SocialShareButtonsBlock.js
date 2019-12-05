import * as React from 'react';
import _ from 'lodash';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,
  WorkplaceShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
  EmailIcon,
  WorkplaceIcon,
} from 'react-share';

class SocialShareButtonsBlock extends React.PureComponent {
  render() {
    let shareUrl = _.get(this.props, 'section.shareUrl');
    if (
      !shareUrl &&
      _.get(this.props, 'pageResources.page.path') &&
      _.get(this.props, 'pageContext.site.siteMetadata.siteUrl')
    ) {
      shareUrl =
        _.get(this.props, 'pageContext.site.siteMetadata.siteUrl') +
        _.get(this.props, 'pageResources.page.path');
    } else {
      shareUrl = window.location.toString();
    }

    const title = _.get(
      this.props,
      'section.title',
      _.get(this.props, 'pageContext.frontmatter.title'),
    );

    const size = _.get(this.props, 'section.size', 32);
    const emailBody = _.get(
      this.props,
      'section.emailBody',
      _.get(this.props, 'pageContext.frontmatter.excerpt', ''),
    );

    const hashtags = _.get(
      this.props,
      'pageContext.frontmatter.hashtags'
      _.get(this.props, 'section.hashtags', []),
    );

    return (
      <div className="social-share-buttons">
        <div className="social-share-buttons__network">
          <FacebookShareButton
            url={shareUrl}
            quote={title}
            className="social-share-buttons__button"
            hashtag={hashtags.map(tag => `#${tag}`).join(' ')}
          >
            <FacebookIcon size={size} round />
          </FacebookShareButton>
        </div>

        <div className="social-share-buttons__network">
          <TwitterShareButton
            url={shareUrl}
            title={title}
            className="social-share-buttons__button"
            hashtags={hashtags}
          >
            <TwitterIcon size={size} round />
          </TwitterShareButton>
        </div>

        <div className="social-share-buttons__network">
          <LinkedinShareButton
            url={shareUrl}
            windowWidth={750}
            windowHeight={600}
            className="social-share-buttons__button"
          >
            <LinkedinIcon size={size} round />
          </LinkedinShareButton>
        </div>

        <div className="social-share-buttons__network">
          <WhatsappShareButton
            url={shareUrl}
            title={title}
            separator=":: "
            className="social-share-buttons__button"
          >
            <WhatsappIcon size={size} round />
          </WhatsappShareButton>
        </div>

        <div className="social-share-buttons__network">
          <EmailShareButton
            url={shareUrl}
            subject={title}
            body={emailBody}
            className="social-share-buttons__button"
          >
            <EmailIcon size={size} round />
          </EmailShareButton>
        </div>
        <div className="social-share-buttons__network">
          <WorkplaceShareButton
            url={shareUrl}
            quote={title}
            className="social-share-buttons__button"
          >
            <WorkplaceIcon size={32} round />
          </WorkplaceShareButton>
        </div>
      </div>
    );
  }
}
export default SocialShareButtonsBlock;
